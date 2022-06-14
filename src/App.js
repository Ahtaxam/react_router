import './App.css';
import {Routes , Route , Link} from "react-router-dom"
import Home from './component/Home';
import About from './component/About';
import Aboutme from './component/Aboutme';
import Aboutyou from './component/Aboutyou';
import Notfound from './component/Notfound';
import Order_summary from './component/Order_summary';
import Users from './component/Users';
import Userabout from './component/Userabout';

function App() {
  return (
    <div className="App">
      <h1 style={{color:"red"}} >React Routers</h1>
      <Routes>
        <Route exact path='/' element = {<Home text = "from App"/>}/>
        <Route  path='/about' element={<About/>}>
          <Route index element = {<Aboutme/>}/>
          <Route path='me' element = {<Aboutme/>}/>
          <Route path='you' element = {<Aboutyou/>}/>
        </Route>
        <Route path='users' element ={<Users/>} >
          <Route path=':UserId' element= {<Userabout/>}/>
        </Route>
        <Route path='order_summary' element = {<Order_summary/>}/>
        <Route path='*' element= {<Notfound/>}/>
      </Routes>
    </div>
  );
}

export default App;
