import {
  BrowserRouter ,
  Switch,
  Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
// import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Navbar from './components/Layout/Navbar';
import NotFound from './components/Pages/NotFound';
import New from "./components/Pages/New";
import Adduser from "./components/Users/Addusers";
import EditUser from "./components/Users/EditUser";
import Home from "./components/Pages/Home";
import ViewUser from "./components/Users/ViewUser";




function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        {/* <Navbar/>
        <Home/> */}
    
      <Navbar/>
      {/* <Home/>
      <Contact/>
      <About/> */}
      <Switch>
        <Route  path='/' exact component={Home} />
        <Route  path='/About' exact component={About} />
        {/* <Route  path='/New' exact component={New} /> */}
        <Route  path='/Contact' exact component={Contact} />
        <Route  path='/Adduser' exact component={Adduser} />
        <Route  path='/EditUser/:id' exact component={EditUser} />
        <Route  path='/ViewUser/:id' exact component={ViewUser} />
        <Route  component={NotFound} />
      </Switch>
      
      </div>
       </BrowserRouter>
    
  );
}

export default App;