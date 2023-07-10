import { HiLocationMarker } from "react-icons/hi";
import InfoCard from "../../components/InfoCard/InfoCard";
import CreateAccount from "./CreateAccount";
import CommunityCategory from "./Category/CommunityCategory";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/user.context";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Landing() {
  const { user } = useUserContext();
  const navigate = useNavigate();

  const initial = { opacity: 0, y: 30 };
  const animate = { opacity: 1, y: 0 };
  const transition = { duration: 1, ease: "easeIn", delay: 0.5 };

  const [ref, inView] = useInView({
    threshold: 0.2,
    rootMargin: "0px 0px -30px 0px",
  });
  const [numRef, numInView] = useInView({
    threshold: 0.2,
    rootMargin: "0px 0px -30px 0px",
  });

  const animateIn = (inView || numInView) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 };

  const infoSectionData = [
    {
      text: `Access to all the categories of communities in India with necessary details to discover your next big opportunity.`,
      tag: "Discover",
    },
    {
      text: `Stay updated with all the events and conferences happening around you and be a part of it.`,
      tag: "Events",
    },
    {
      text: `Network with others and crack the solution of most difficult challenges with peer’s help.`,
      tag: "Network",
    },
    {
      text: `Share insights, ask queries and make communities more better for the future with real time connections and network.`,
      tag: "Share",
    },
  ];
  const dataCard = [
    {
      numbers: 10,
      heading: "Communities ",
    },
    {
      numbers: 16,
      heading: "Visited Users",
    },
    {
      numbers: 15,
      heading: "Events Listed",
    },
    {
      numbers: 20,
      heading: "Registered Users",
    },
  ];

  const handleLocSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const loc = formData.get("loc");
    console.log(loc);
    navigate(`/map?loc=${loc}`);
  };

  return (
    <>
      <section
        id="landing-hero"
        className="bg-neutral container-padding text-center space-y-12"
      >
        <motion.h1
          initial={initial}
          animate={animate}
          transition={transition}
          className="font-bold text-center text-5xl"
        >
          Discover Communities Near You!
        </motion.h1>
        <motion.p
          initial={{ ...initial, y: -30 }}
          animate={animate}
          transition={{ ...transition }}
          className="md:max-w-[60%] mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras
          pulvinar mattis nunc sed blandit.
        </motion.p>
        <motion.form
          initial={initial}
          animate={animate}
          transition={{ ...transition, delay: 1 }}
          onSubmit={handleLocSearch}
          className="text-center flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-center"
        >
          <div id="loc-search-input" className="input-div">
            <HiLocationMarker className="text-xl" />
            <input name="loc" type="text" placeholder="Enter your location" />
          </div>
          <button type="submit" className="btn-primary">
            Search
          </button>
        </motion.form>
      </section>
      <motion.section
        initial={initial}
        animate={animate}
        transition={{ ...transition, delay: 1 }}
        className="container-padding bg-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center gap-8"
      >
        <div className="space-y-8 md:col-span-2 lg:col-span-3">
          <h1 className="font-bold text-5xl">What is Lorem Ipsom?</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            cras pulvinar mattis nunc sed blandit.
          </p>
        </div>
        <img
          className="lg:col-span-2 w-full object-cover"
          src={"https://placehold.co/600x400"}
        />
      </motion.section>
      <section className="bg-primary text-white container-padding text-center space-y-12 relative">
        <div className="absolute right-[2%] -top-[1.4%] md:right-[0.7%] md:-top-[3.2%] h-10 md:h-12 aspect-square bg-orche rotate-45"></div>
        <motion.h1
          ref={ref}
          animate={animateIn}
          transition={{ duration: 1 }}
          className="font-bold text-5xl"
        >
          What’s in here ?
        </motion.h1>
        <div
          animate={animateIn} ref={ref} transition={{ duration: 1 }}
           className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
        >
          {infoSectionData.map((info, index) => (
            <InfoCard key={info} {...info} />
          ))}
        </div>
      </section>
      <motion.section
      initial='hidden'
      animate={animateIn} ref={numRef} transition={{ duration: 1 }}
      className="container-padding-mini flex flex-row justify-around gap-3 flex-wrap">
        {dataCard.map((obj, id) => (
          <div className="col-span-1 text-center flex flex-col justify-center items-center">
            <p className="text-5xl w-full">
              <CountUp redraw={true} end={obj.numbers} />+
            </p>
            <p className="text-grostek text-xl ">{obj.heading}</p>
          </div>
        ))}
      </motion.section>
      <CommunityCategory />
      {!user && <CreateAccount />}
    </>
  );
}

export default Landing;
