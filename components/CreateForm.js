// takes in from data, and uses data.js to populate a city with cookie sales information



export default function createForm({ jsonString }) {
  // form the table row with cookie sales data
  // use hours to iterate through
  hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
  foreach (hour in hourly_sales); {
    sales = hour * jsonString.avgCookiesSale
    return <td>sales</td>
  }

}
