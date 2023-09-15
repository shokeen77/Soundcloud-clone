import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function Featuredtracks() {
  const carouselRef = useRef(null);
  const arrowIconsRef = useRef([null, null]);
  const [apiLoading, setLoadingapi] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://academics.newtonschool.co/api/v1/music/song", {
          headers: {
            "projectId": "98fveygd2iw6"
          }
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setApiData(data.data); // Assuming data is an array
        setLoadingapi(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoadingapi(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const showHideIcons = () => {
      if (!carouselRef.current) return;

      const scrollWidth = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      setScrollPosition(carouselRef.current.scrollLeft);

      arrowIconsRef.current[0].style.display =
        scrollPosition === 0 ? 'none' : 'block';
      arrowIconsRef.current[1].style.display =
        scrollPosition === scrollWidth ? 'none' : 'block';
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener('scroll', showHideIcons);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('scroll', showHideIcons);
      }
    };
  }, [scrollPosition]);

  const handleIconClick = (iconId) => {
    if (!carouselRef.current) return;

    const firstImgWidth = carouselRef.current.children[0].clientWidth + 14;
    const newScrollLeft =
      scrollPosition + (iconId === 'left' ? -firstImgWidth : firstImgWidth);

    carouselRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  if (apiLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <main className="main-content">
        <h4 className="featured">Featured Tracks</h4>
        <div className="wrapper">
          <i
            className="carousel-icon"
            onClick={() => handleIconClick('left')}
            ref={(el) => (arrowIconsRef.current[0] = el)}
          >
            <AiOutlineLeft />
          </i>
          <div className="carousel" ref={carouselRef}>
            {apiData.map((track, index) => (
              <div key={index} className="track">
                <img src={track.thumbnail}  />
                <p>{track.title}</p>
              </div>
            ))}
          </div>
          <i
            className="carousel-icon"
            onClick={() => handleIconClick('right')}
            ref={(el) => (arrowIconsRef.current[1] = el)}
          >
            <AiOutlineRight />
          </i>
        </div>
      </main>
      <aside className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Featuredtracks;
