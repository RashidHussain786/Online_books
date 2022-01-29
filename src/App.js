import{Nav}  from './Components/App_header/Nav'
import { Hero } from './Components/App_hero/Hero';
import { Hero1 } from './Components/App_hero1/Hero1';
import { Hero2 } from './Components/App_hero2/Hero2';
import {Footer}  from './Components/App_footer/Footer';
import { TestinomialMain } from './Components/Testinomial/TestinomialMain';


function App() {
  return (
    <div>
      <Nav/>
     <Hero/>
     <Hero1/>
      <Hero2/>
      <TestinomialMain/>
      <Footer/>
    </div>
  );
}


export default App;
