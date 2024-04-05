import SpaceCard from "./SpaceCard";
import {useEffect, useState} from "react";

const SpaceList = ({filterSpaces, lanuchedSpace}) => {
  // console.log("launch space", lanuchedSpace);
  const [spaces, setSpaces] = useState([])
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&${lanuchedSpace?.launch?`launch_success=${lanuchedSpace?.launch}`:''}&${filterSpaces?.year?`launch_year=${filterSpaces?.year}`:''}`)
      const spaces = await data.json();
      setSpaces(spaces)
    }
    getData()
  }, [filterSpaces, lanuchedSpace])
 
  return(
    <div className="p-4 flex-1 rounded-md lg:ml-4 flex flex-wrap">
      {spaces?.length ? spaces.map((space) => <SpaceCard space={space} key={space.flight_number}/>) : `No spaces available which are launched in ${filterSpaces.year} which is ${lanuchedSpace.launch ? 'successfully launched' : 'failed somehow'}`}
      {/* {spaces?.length && spaces.map((space) => <SpaceCard space={space} key={space.flight_number}/>)} */}
      {/* {spaces?.length &&  <SpaceCard space={spaces[0]}/>} */}
    </div>
  )
}
 export default SpaceList
