import React from "react";
import EventCard from "./EventCard";

const EventsSection = () => {
  const array = [1, 2, 3, 4, 5, 6];
  const headers = [
    {
      filter: "Date",
      options: ["5 days", "2 days"],
      active: false,
    },
    {
      filter: "Type",
      options: ["Online", "Offline"],
      active: false,
    },
    {
      filter: "Distance",
      options: ["20km", "30km"],
      active: false,
    },
    {
      filter: "Category",
      options: ["Devops", "Web"],
      active: false,
    },
    {
      filter: "Sort By",
      options: ["Sort By:Relevance", "Sort By: Members"],
      active: true,
    },
  ];
  return (
    <>
      <section
        className="bg-accent box-border-event container-padding-minor "
        style={{
            paddingBlock: '5rem'
        }}
      >
        <h1 className="font-bold text-3xl mb-5">
          Events near Kolkta,West Bengal
        </h1>
        <div className="my-5 flex flex-row flex-wrap justify-start ">
          {headers.map((obj, id) => {
            return (
              <select
                id={obj.filter}
                key={obj.filter}
                className={`px-2 py-1 my-2 text-lg font-grostek cursor-pointer mr-3 bg-neutral  rounded-3xl ${
                  obj.active ? "active-option" : ""
                } `}
              >
                {obj.options.map((option, idx) => (
                  <option>{option}</option>
                ))}
              </select>
            );
          })}
        </div>
        <div className="flex overflow-x-auto space-x-8 w-full events overflow-y-visible">
          {array.map((obj, id) => (
            <EventCard />
          ))}
        </div>
        <div className="flex overflow-x-auto space-x-8 w-full events overflow-y-visible">
          {array.map((obj, id) => (
            <EventCard />
          ))}
        </div>
      </section>
    </>
  );
};

export default EventsSection;
