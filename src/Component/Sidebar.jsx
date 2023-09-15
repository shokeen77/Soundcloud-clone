import React, { useEffect, useState } from 'react';

function Sidebar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stopPoint = 200; // Adjust the desired stopping point
      const scrollTop = window.scrollY || window.pageYOffset;

      if (scrollTop >= stopPoint) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <aside className={`sidebar ${isFixed ? 'fixed' : ''}`}>
      <h2>Sidebar</h2>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
