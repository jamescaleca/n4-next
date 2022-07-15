import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>N4 Enterprises</title>
        <meta name="description" content="IT Management and Consulting for Large Enterprises" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Raleway&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <main className={`${styles.main} text-slate-100`}>
        <div className="main-banner">
            <h1 className="text-3xl font-bold underline font-orbitron">IT AND MANAGEMENT CONSULTING FOR LARGE ENTERPRISES</h1>
            <p className="cont-card">Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Amet consectetur adipiscing elit ut aliquam purus sit amet. Eget sit amet tellus cras. Eget gravida cum sociis natoque.</p>
            <button className="bg-blue-600 text-sm font-semibold text-center uppercase text-white">SCHEDULE APPOINTMENT</button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
