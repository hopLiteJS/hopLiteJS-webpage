
import Head from 'next/head';
// import styles from '../styles/Home.module.css'
import React from 'react';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Image from 'next/image';


export default function BlogPage() {
  return (
    <div className= "BlogPost">
      <NavBar /> 
      <h1>Blog Page</h1>
      <Footer />
    </div>
  );
}

