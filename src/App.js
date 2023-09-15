import Featuredtracks from './Component/Featuredtracks';
import Navbar from './Component/Navbar';
import './App.css';
import Sidebar from './Component/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
   <Featuredtracks/>
    </div>
  );
}

export default App;
