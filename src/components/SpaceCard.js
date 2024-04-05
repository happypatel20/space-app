const SpaceCard = ({space}) => {
  const {mission_name, mission_id, launch_year, launch_success} = space;
  const {mission_patch} = space.links;
  return(
    <div className="text-black w-full md:w-6/12 lg:w-3/12 p-2">
      <div className="p-2 bg-white h-full shadow-lg border rounded-sm border-black" >
        <img src={mission_patch} alt="space" className="h-[150px] w-full object-contain" />
        <h1 className="font-bold mt-3">{mission_name}</h1>
        <p className="text-sm">Mission Ids: {mission_id.join(", ")}</p>
        <p className="text-sm">Launch Year: {launch_year}</p>
        <p className="text-sm">Successfull Launch: {launch_success ? "True" : "False"}</p>
      </div>
    </div>
  )
}

export default SpaceCard
