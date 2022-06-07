import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState} from 'react';

export default function Home() {
  const [question, setQuestion] = useState(a question)
  return (
    <div>
      <Header />
      <main className='bg-#70E6B7 flex flex-col items-center'>
        <Form onSubmit={formHandler}/>
        <Placeholder />
      </main>
      <Footer copyright='2022' />
    </div>
  )
}

function Header() {
  return (
    // dial in this color a bit more. py = padding Y axis
    <header className="bg-green-400 py-6 px-8">
      <h1 className='text-5xl'>Cookie Stand Admin</h1>
    </header>
  )
}

function Footer(props) {
  return (
    <footer className="bg-green-400 py-4 px-8">
      <p>&copy;{props.copyright}</p>
    </footer>
  )
}

function Form(props) {
  return (
    <form className='flex w-1/2 p-2 bg-green-200 rounded-md my-10' onSubmit={props.onSubmit}>
      <h1>Create Cookie Stand</h1>
        <input className='flex-auto' placeholder='Location' required/>
      <button className='px-4 py-2 bg-green-400'>Create</button>
    </form>
  )
}

function Placeholder() {
  return (
    <p>Json data</p>
  )
}

function formHandler(event) {
  event.preventDefault();
  event.target.reset();
}
