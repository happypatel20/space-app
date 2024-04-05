import { useState } from "react"
const Sidebar = ({setFilter, setLaunch}) => {
  const yearsList = [
    "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017" , "2018", "2019", "2020"
  ]
  const filterByYear = (yr) => {
    setFilter({year: yr})
  }
  const filterByLaunch = (launch) => {
    setLaunch({launch: launch})
  }
  const [toggledButtonId, setToggledButtonId] = useState(null);
  const [toggle, setToggle] = useState("nothing");
  const toggleButton = (year) => {
    setToggledButtonId(year)
    filterByYear(year)
  }
  return(
    <div className="card bg-white p-4 rounded-md w-full lg:w-2/12">
      <h3 className="font-bold text-md mb-1">Launch Year</h3>
      <div className="flex flex-wrap justify-between">
        {yearsList.map((year) => {
          const isToggled = year === toggledButtonId
          return(
           <button key={year} className={`${isToggled ? 'bg-fuchsia-600 text-white' : ''} flex-1 m-1 text-sm border border-fuchsia-600 px-4 py-1 text-fuchsia-600 rounded-sm hover:bg-fuchsia-600 hover:text-white transition-all hover:transition-all duration-300 hover:duration-300`}
           onClick={
            () => {
              toggleButton(year)
            }
          }>{year}</button>
          )})}
      </div>
      <h3 className="font-bold text-md mb-1 mt-3">Launch Successfully</h3>
      <div className="flex flex-wrap justify-between">
        <button className={`${toggle === 'launched' ? 'bg-fuchsia-600 text-white' : ''} flex-1 m-1 text-sm border text-fuchsia-600 border-fuchsia-600 px-4 py-1  rounded-sm hover:bg-fuchsia-600 hover:text-white transition-all hover:transition-all duration-300 hover:duration-300`} onClick={() => {
          filterByLaunch("true")
          setToggle("launched")
        }}>True</button>
        <button className={`${toggle === 'failed' ? 'bg-fuchsia-600 text-white' : ''} flex-1 m-1 text-sm border text-fuchsia-600 border-fuchsia-600 px-4 py-1  rounded-sm hover:bg-fuchsia-600 hover:text-white transition-all hover:transition-all duration-300 hover:duration-300`} onClick={() => {
          filterByLaunch("false")
          setToggle("failed")
        }}>False</button>
      </div>
    </div>
  )
}

export default Sidebar;
