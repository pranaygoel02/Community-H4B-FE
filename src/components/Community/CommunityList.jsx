import CommunityCard from "./CommunityCard";

function CommunityList({ data }) {
  return (
    <div className="flex flex-col">
      {data.map((obj, id) => (
        <CommunityCard {...obj}/>
      ))}
    </div>
  );
}

export default CommunityList;
