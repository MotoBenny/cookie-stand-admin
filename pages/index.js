import Footer from '../components/Footer';
import Header from '../components/Header';
import Form from '../components/Form';
import LoginForm from '../components/LoginForm';
import { useState } from 'react';
import { useAuth } from '../contexts/auth';



export default function Home() {
  const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
  const [locJson, setJson] = useState([])

  const { user, login, logout } = useAuth();

  const [ userName, setUserName ] = useState(false);

  async function handleLogin(username, password) {

    setUserName(username)
    login(username, password)
  }

  function handleLogout() {
    logout()
    setUserName(false)
  }

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
    <>
      <Header />
      <main className='bg-emerald-100 flex flex-col items-center'>
      { userName ? <Form onsubmit={StandHandler} user={userName} logout={handleLogout} locJson={locJson} />: <LoginForm onLogin={handleLogin}/> }
      
      </main>
      <Footer copyright=' 2022' />
    </>
  )
}

