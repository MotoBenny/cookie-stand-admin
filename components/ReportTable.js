import { loadGetInitialProps } from 'next/dist/shared/lib/utils';


export default function ReportTable({ locJson }) {
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
            {hours.map(hour => {
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
          {locJson.map(location => {
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

  function reportTable() {
    if (locJson.length == 0) {
      return (
        <p>No stand data</p>
      )
    } else {
      return drawReportTable()
    }
  }
  return (
    reportTable()
  )
}
