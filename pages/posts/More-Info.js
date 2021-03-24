import React from 'react';
import ReactPlayer from "react-player";
import NavBar from '../../components/NavBar';
import Footer from '../../components/LandingPage/Footer';

export default function More_Info() {
  return (
    <div className="More_Info">
      <NavBar /> 
      <div className="FAQ">
        <h1>FAQ</h1>
        <h2>Questions and Answers Here</h2>
      </div>
      <div className="Youtube">
        <h1>Tutorial Video</h1>
        <ReactPlayer url="https://www.youtube.com/watch?v=ug50zmP9I7s" />
      </div>
      <h1>Team-Members</h1>
      <Footer />
    </div>
  )
}