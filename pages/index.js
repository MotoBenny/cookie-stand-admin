import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function Home() {
  // TODO refactor to rename placeholder

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
        <Placeholder jsonString={jsonString} />
      </main>
      <Footer copyright='2022' />
    </div>
  )
}

function Header() {
  return (
    // dial in this color a bit more. py = padding Y axis
    <header className="bg-emerald-500 py-6 px-8">
      <h1 className='text-5xl'>Cookie Stand Admin</h1>
    </header>
  )
}

function Footer(props) {
  return (
    <footer className="bg-emerald-500 py-4 px-8">
      <p>&copy;{props.copyright}</p>
    </footer>
  )
}

function Form(props) {
  return (
    // <form className='flex flex-col w-1/2 p-2 bg-green-200 rounded-md my-10' onSubmit={props.onSubmit}>
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
  )
}

function Placeholder({ jsonString }) {
  return (
    <div>
      <p className='flex flex-col items-center'>Report Table Coming Soon...</p>
      <p className='flex flex-col items-center my-5'>{JSON.stringify(jsonString)}</p>
    </div>
  )
}
