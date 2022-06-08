import Footer from '../components/Footer'
import Header from '../components/Header'
import Form from '../components/Form'
import ReportTable from '../components/ReportTable';
import { useState } from 'react';



export default function Home() {
  const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
  const [locJson, setJson] = useState([])

  function StandHandler(event) {
    event.preventDefault();
    let locationData = {}
    locationData["Location"] = event.target.location.value;
    locationData["Minimum Customers per Hour"] = parseInt(event.target.minCustHr.value);
    locationData["Maximum Customers per Hour"] = parseInt(event.target.maxCustHr.value);
    locationData["Average Cookies per Hour"] = parseInt(event.target.avgCookiesSale.value);
    locationData["HourlySales"] = hourly_sales.map(hour => Math.floor(Math.random() * (event.target.maxCustHr.value - event.target.minCustHr.value) + event.target.minCustHr.value))
    console.log(locationData)
    setJson([...locJson, locationData]);
    event.target.reset();
  }



  return (
    <div>
      <Header />
      <main className='bg-emerald-100 flex flex-col items-center'>

        <Form onSubmit={StandHandler} />
        <ReportTable locJson={locJson} />
      </main>
      <Footer copyright=' 2022' />
    </div>
  )
}
