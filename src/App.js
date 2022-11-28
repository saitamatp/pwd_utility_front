import Decrypt from "./Components/decrypt/Decrypt";
import Navi from "./Components/Navbar/Navi";
import Encrypt from "./Components/encrypt/Encrypt";
import Start from "./Components/startEncrypt/start";
import HomePage from "./Components/HomePage/HomePage";
import NotFound from "./Components/NotFound/NotFound";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Guide from "./Components/guide/Guide";
import './App.css';


function App() {
  return (
   <div> 
      <Navi/>
      <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/decrypt" element={<Decrypt />} />
          <Route path="/encrypt" element={<Encrypt />} />
          <Route path="/new" element={<Start />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
      </div>
      <p id="NotReady">This site is still under development, we will remove this sign once the site is ready ready.</p>
   </div>
  );
}
/*
<a href="/"> Back to HomePage</a>
      <p>Password is <b>BuddyKaChillKaBillG002MantriWoo#</b></p>
*/
export default App;
