import NavBar from '../../components/NavBar';
import React from 'react';
import Footer from '../../components/Footer';

export default function Documentation() {
  return (
    <div className={'Documentation'}>
      <NavBar />
      <h1 className="welcomeHeader">Welcome to hopLite JS!</h1>
      <h1>Documentation</h1>
      <h1><a href="https://github.com/oslabs-beta/hoplitejs">Click here for ReadME</a></h1>
      <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </h1>
      <Footer />
    </div>
  )
}