// import logo from './logo.svg';
//import './App.css';
import { BrowserRouter ,Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from './components/footer';

function App() {
  // const location = useLocation
  // const pathSegments = location.pathname ? location.pathname.split('/') : [];
  // const lastSegment = pathSegments[pathSegments.length - 1];
  return (
    <>
      
      <BrowserRouter>
          <Navbar  />
          
          <Routes>
            <Route exact path="/"  element={<News exact key='general' category="general"  />}/>
            
            
            <Route exact path="/business"  element={<News key='business' category="business"  />}/>
            
            
            <Route exact path="/entertainment"   element={<News key='entertainment' category="entertainment"  />}/>
            
            
            <Route exact path="/health"  element={<News key='health' category="health"  />}/>
            
            
            <Route exact path="/science"    element={<News key='science' category="science" />} />
            
            
            
            <Route exact path="/sports"  element={<News key='sports' category="sports" />}/>
            
            
            <Route exact path="/technology"   element={<News key='technology' category="technology" />}/>


            <Route exact path="/in"   element={<News key='in' category="general" country="in" /> }/>
            <Route exact path="/br"   element={<News key='br' category="general" country="br"/>}/>
            <Route exact path="/us"   element={<News key='us' category="general" country="us"/>}/>
            <Route exact path="/am"   element={<News key='am' category="general"country="am" />}/>
            <Route exact path="/au"   element={<News key='au' category="general" country="au"/>}/>
            
            
          </Routes>
          <Footer/>
          </BrowserRouter>
    </>
  );
}

export default App;
