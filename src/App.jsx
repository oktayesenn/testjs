import {BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience , Feedbacks, Hero, NavBar, Tech, Works, StarsCanvas} from './components';

const App = () =>{
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavBar />
          <Hero />
        </div>
      </div>
      </BrowserRouter>
  )

}

export default App;