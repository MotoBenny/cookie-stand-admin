import { hours } from '../pages/data'

export default function Form(props) {
  console.log(props)
  return (
    <>
    <form className='grid grid-rows-2 w-1/2 p-2 bg-emerald-300 rounded-md my-10' onSubmit={props.onSubmit}>
      <h1 className='flex justify-center py-3 text-2xl'>Create Cookie Stand</h1>
      <div className="grid col-span-2">
        <label>Location </label>
        <input name='location' className='flex-auto w-full' placeholder='Location' required />
      </div>
      <div className='flex flex-row'>
        <div className='grid col-span-'>
        </div>
        <div className='space-x-5'>
          <label>Minimum Customers per Hour </label>
          <input name='minCustHr' className='flex-bottom' placeholder='Minimum Customers per Hour' required />
          <label>Maximum Customers per Hour </label>
          <input name='maxCustHr' className='flex-auto' placeholder='Maximum Customers per Hour' required />
          <label>Average Cookies per Sale </label>
          <input name='avgCookiesSale' className='flex-auto' placeholder='Average Cookies per Sale' required />
          <button className='px-4 py-2 bg-emerald-500 m-2'>Create</button>
        </div>
      </div>
    </form>
    <ReportTable locJson={props}/>
    </>
  )
  
  function ReportTable(props) {
    function calcHourlyTotal() {
      let globalTotal = 0;
      let hourlyTotal = []
      for (let i = 0; i < hours.length; i++) {
        let sumHour = 0;
        locJson.map(elem => {
          sumHour += elem.HourlySales[i]
        })
        hourlyTotal[i] = sumHour
      }
      globalTotal = hourlyTotal.reduce((acc, curr) => acc + curr)
      hourlyTotal[hours.length] = globalTotal;
      return (hourlyTotal)
    }
    // if no results print "results coming soon"
    // if results render table
    function drawReportTable() {
      return (
        <table>
          <thead>
            <tr>
              <td>
                Location
              </td>
              {props.locJson.map(hour => {
                return (
                  <td key={hour}>
                    {hour}
                  </td>
                )
              })}
              <td>
                Totals
              </td>
            </tr>
          </thead>
          <tbody>
            {props.location.map(location => {
              return (
                <tr key={location.Location}>
                  <td>{location.Location}</td>
                  {location.HourlySales.map(hourSales => {
                    return (
                      <td className='border-2 border-black' key={hourSales}>
                        {hourSales}
                      </td>
                    );
                  })
                  }
                  <td>
                    {
                      location.HourlySales.reduce((acc, curr) => acc + curr)
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className='border-2 border-black'>
              <td className='border-2 border-black'>Totals</td>
              {calcHourlyTotal().map(elem => {
                return (
                  <td className='border-2 border-black' key={elem}>{elem}</td>
                )
              })}
            </tr>
          </tfoot>
        </table>
      )
    }
  
    function reportTable(props) {
      console.log(props)
      if (props.locJson.length === 0) {
        return (
          <p>No stand data</p>
        )
      } else {
        return drawReportTable()
      }
    }
    // return (
    //   reportTable(props)
    // )
  }
  

}