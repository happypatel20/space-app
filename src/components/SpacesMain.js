import { useState } from "react"
import Sidebar from "./Sidebar"
import SpaceList from "./SpaceList"
const SpacesMain = () => {
  const [filter, setFilter] = useState({})
  const [launch, setLaunch] = useState({})
  return(
    <>
      <Sidebar setFilter={setFilter} setLaunch={setLaunch} />
      <SpaceList filterSpaces={filter}  lanuchedSpace={launch} />
    </>
  )
}

export default SpacesMain
