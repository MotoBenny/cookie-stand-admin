export default function Form(props) {
  return (
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