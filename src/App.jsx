import './app.scss';
import Navbar from './componets/navbar/Navbar';
import Sidebar from './componets/sidebar/Sidebar';
import Hero from './componets/Hero/Hero';
import Parallax from './componets/Parallax/Parallax';
import Skills from './componets/Skills/Skills';
import Portfolio from './componets/Portfolio/Portfolio';
import Contact from './componets/contact/Contact';
import Mouse from './componets/mouse/Mouse';

const App = () => {
  return <div>

    <Sidebar/>
    <section id='Homepage'>
  
    <Mouse/>
      <Navbar/>
    <Hero/></section>
    <section id='skills'><Parallax type="skills"/></section>
    <section style={{minHeight:'100vh',overflow:'visible'}}><Skills/></section>
    <section id='Portfolio'  ><Parallax type="Portfolio"/></section>
  <Portfolio />
     <section id='contact' style={{minHeight:"120vh"}}>
      <Contact/>
</section>

  </div>;
};

export default App;
