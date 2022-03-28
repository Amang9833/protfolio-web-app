import { useState } from "react";


//Component Import
import Intro from "./components/intro/Intro";
import Protfolio from "./components/protfolio/Protfolio";
import Topbar from "./components/topbar/Topbar";
import Testimonials from "./components/testimontials/Testimonials";
import Contact from './components/contact/Contact';
import Works from "./components/work/Works";
import Menu from './components/menu/Menu'
// import Pubg from "../components2/text-form/Pubg";

//App Css Import
import './app.scss';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        {/* <Pubg /> */}
        <Intro />
        <Protfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );

}

export default App;