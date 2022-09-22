import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Signin from './signin';
import Dashboard from'./Dashboard';


export default function Home() {
  return (
  <div>
            <Signin>   
            <Dashboard></Dashboard>

               </Signin>
    
    </div>
  )
}
