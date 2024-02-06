import SalesChart from "./SalesChart"
import salesAnalytics from "../../data/salesAnalytics";

function SalesChartComp() {
  return (
      <div className="bg-secondaryback rounded-[20px] p-6 w-full text-center h-[380px] flex flex-col justify-between items-start gap-5 pr-1 md:pr-4">
        <div className="w-full flex flex-row justify-between items-center pl-4">
          <h1 className="md:text-2xl text-lg font-semibold text-ChartGray capitalize">sales analytics</h1>
          <div className="outline-none rounded-xl px-2.5 py-1 md:px-5 md:py-2 bg-secondaryback text-darkerGray text-xs lg:text-lg text-center">
            <select
              name=""
              id=""
              className="bg-transparent rounded-lg text-darkerGray outline-none w-full"
              >
              <option value="week" className="w-full bg-secondaryback text-darkerGray outline-none">week</option>
              <option value="month" className="w-full bg-secondaryback text-darkerGray outline-none">month</option>
              <option value="2 months" className="w-full bg-secondaryback text-darkerGray outline-none">2 months</option>
              <option value="3 months" className="w-full bg-secondaryback text-darkerGray outline-none">3 months</option>
              <option value="all year"  className="w-full bg-secondaryback text-darkerGray outline-none">all year</option>
            </select>
          </div>
        </div>
        <div className="w-full h-full justify-self-start">
          <SalesChart data={salesAnalytics}/>
        </div>
      </div>
  )
}

export default SalesChartComp