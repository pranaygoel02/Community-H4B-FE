import { HiLocationMarker } from "react-icons/hi";
import InfoCard from "../../components/InfoCard/InfoCard";
import CreateAccount from "./CreateAccount";
import CommunityCategory from "./Category/CommunityCategory";
import { useNavigate } from "react-router-dom";

function Landing() {

  const navigate = useNavigate()

  const infoSectionData = [
    {
      text: `Access to all the categories of communities in India with necessary details to discover your next big opportunity.`,
      tag: 'Discover'
    },
    {
      text: `Stay updated with all the events and conferences happening around you and be a part of it.`,
      tag: 'Events'
    },
    {
      text: `Network with others and crack the solution of most difficult challenges with peer’s help.`,
      tag: 'Network'
    },
    {
      text: `Share insights, ask queries and make communities more better for the future with real time connections and network.`,
      tag: 'Share'
    }
  ]

  const handleLocSearch = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const loc = formData.get('loc')
    console.log(loc);
    navigate(`/map?loc=${loc}`)
  }

  return (
    <>
      <section id="landing-hero" className="bg-neutral container-padding text-center space-y-12">
        <h1 className="font-bold text-center text-5xl">Discover Communities Near You!</h1>
        <p className="md:max-w-[60%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras
          pulvinar mattis nunc sed blandit.
        </p>
        <form onSubmit={handleLocSearch} className="text-center flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-center">
          <div id="loc-search-input" className="input-div">
            <HiLocationMarker className="text-xl" />
            <input name="loc" type="text" placeholder="Enter your location" />
          </div>
          <button type="submit" className="btn-primary">
            Search
          </button>
        </form>
      </section>
      <section className="container-padding grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center gap-8">
        <div className="space-y-8 md:col-span-2 lg:col-span-3">
          <h1 className="font-bold text-5xl">What is Lorem Ipsom?</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            cras pulvinar mattis nunc sed blandit.
          </p>
        </div>
        <img className="lg:col-span-2 w-full object-cover" src={"https://placehold.co/600x400"} />
      </section>
      <section className="bg-primary text-white container-padding text-center space-y-12 relative">
        <div className="absolute right-[2%] -top-[1.4%] md:right-[0.7%] md:-top-[3.2%] h-10 md:h-12 aspect-square bg-orche rotate-45"></div>
        <h1 className="font-bold text-5xl">What’s in here ?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {
            infoSectionData.map((info, index) => (
              <InfoCard key={info} {...info}/>
            ))
          }
        </div>
      </section>
      <CommunityCategory/>
      <CreateAccount/>
    </>
  );
}

export default Landing;
