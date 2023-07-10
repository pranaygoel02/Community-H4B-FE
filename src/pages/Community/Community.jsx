import { useCallback, useEffect, useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import CommunityList from "../../components/Community/CommunityList";
import Circle from "../../assets/images/circle.svg";
import axios from "../../axios/axiosInstance";
import Map from "./Map";
import { Link } from "react-router-dom";

function Community() {
  const [communityData, setCommunityData] = useState([]);

  const getCommunityData = useCallback(async () => {
    try {
      const response = await axios.get("/community");
      setCommunityData((prev) => response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getCommunityData();
  }, [getCommunityData]);

  const [loc, setLoc] = useState(null);

  return (
    <div className="bg-light box-border-event-max">
      <section
        id="community-hero"
        className="min-h-[65vh] relative rounded-3xl  text-center py-8 pb-0 flex flex-row justify-center items-center  "
      >
        <div className="absolute left-[15%] md:right-[17%] top-72 h-8 aspect-square bg-orange-500"></div>
        <div className="absolute right-[15%] md:right-[17%] bottom-5 h-8 bg-green-500">
          <img src={Circle} className="w-[32px]" />
        </div>

        <div className="space-y-12 container-padding relative ">
          <h1 className="font-bold text-5xl text-black">
            Search Local Communities Now!
          </h1>
          <p className="md:max-w-[60%] mx-auto text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            cras pulvinar mattis nunc sed blandit.
          </p>
          <form
            // onSubmit={getCoords}
            className="flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-center"
          >
            <div id="loc-search-input" className="input-div">
              <HiLocationMarker className="text-xl" />
              <input name="loc" type="text" placeholder="Enter your location" />
            </div>
            <button type="submit" className="btn-primary">
              Search
            </button>
          </form>
        </div>
      </section>
      <section className="text-center container-padding space-y-12">
            <div className="w-full inline-flex justify-between items-center mt-16">
              <hr className="w-full hidden sm:block border-[1px]" />
              <p className="font-grostek text-5xl w-full">
                <b>Landing Zone</b>
              </p>
              <hr className="w-full hidden sm:block border-[1px]" />
            </div>
            <div className="flex flex-row border-2 border-black overflow-hidden justify-center h-[520px] relative">
              <Link
                to={"/map"}
                className="absolute z-10 top-0 left-0 btn-small m-2"
              >
                View full map
              </Link>
              <Map showDataList={false} width="1170px" height="520px" />
            </div>
          </section>
          <section className="bg-accent">
            <div className="container-padding space-y-12">
              <p className="text-left font-bold text-3xl">
                Communities near XYZ
              </p>
              <CommunityList data={communityData} />
            </div>
          </section>
    </div>
  );
}

export default Community;
