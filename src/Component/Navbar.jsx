import React, { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { BiSolidBell } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa"
import '../App.css';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [api , setApi] = useState({});

  useEffect(() => {
    fetch("https://academics.newtonschool.co/api/v1/music/song", {
      headers: {
        "projectId": "98fveygd2iw6"
      }
    })
   
    .then(response => {
      return response.json()
    })
  .then(data => {
    setApi(data)
  })
  // console.log("setApi");
  },[])

  return (
    <div className="container-nav">
      <header>
        <nav className="navbar">
          <div className="logo">

            <ul className='nav-link'>
              <li> <img src="soundcloud_logo.png" alt=" Logo" /> </li>
              <li><a href="#">Home</a></li>
              <div className='border-right'>
                <ul className="nav-links">
                  <li><a href="#">Feed</a></li>
                  <li><a href="#">Library</a></li>
                  <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <div className='search'>
                      <FiSearch />
                    </div>

                  </div>
                  <li className='pro'><a href="#">Try Next Pro</a></li>
                  <li><a href="#">For Artists</a></li>
                  <li><a href="#">Upload</a></li>
                  <li className='google-mail'><a href="#"><span className='name'>N</span></a></li>
                  <button className="bell" ><BiSolidBell /></button>
                  <button className='message'><FaEnvelope /></button>

                  <div className='dots'>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                  </div>
                </ul>
              </div>
            </ul>
          </div>






          <div className="nav-buttons">

          </div>

        </nav>
      </header>
      <main>
        {/* Your main content here */}
      </main>
     
    </div>
  );
}

export default App;
