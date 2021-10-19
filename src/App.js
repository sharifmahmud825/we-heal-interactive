import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUS/AboutUs';
import CallToAction from './Components/Appointment/CallToAction';
import Contact from './Components/Contact/Contact';
import Doctors from './Components/Doctor/Doctors';
import Doctor from './Components/Doctor/Doctors';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services/:serviceId'>
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path='/doctors'>
            <Doctors></Doctors>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/about'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/appointment'>
            <CallToAction></CallToAction>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
