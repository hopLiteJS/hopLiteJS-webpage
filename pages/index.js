import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import React from 'react';
import NavBar from '../components/NavBar';
import LandingPage from '../components/LandingPage/LandingPage';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Head>
        <title>HopLiteJS</title>
      </Head>
      <LandingPage />
    </div>
  );
}
