import Footer from '../components/Footer'
import Header from '../components/Header'
import Form from '../components/Form'
import ReportTable from '../components/ReportTable';
import { useState } from 'react';
import { hours } from './data'


export default function Home() {

  const [jsonString, setJson] = useState()

  function StandHandler(event) {
    event.preventDefault();
    var locationData = {}
    locationData["Location"] = event.target.location.value;
    locationData["Minimum Customers per Hour"] = parseInt(event.target.minCustHr.value);
    locationData["Maximum Customers per Hour"] = parseInt(event.target.maxCustHr.value);
    locationData["Average Cookies per Hour"] = parseInt(event.target.avgCookiesSale.value);
    setJson(locationData);
    event.target.reset();
  }


  return (
    <div>
      <Header />
      <main className='bg-emerald-100 flex flex-col items-center'>

        <Form onSubmit={StandHandler} />
        <ReportTable jsonString={jsonString} />
      </main>
      <Footer copyright=' 2022' />
    </div>
  )
}
