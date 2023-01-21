import { BrowserRouter as Router} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import End from "./components/End"
import Modal from "./components/Modal"
import Courseintro from "./components/Courseintro";
import Description from "./components/Description";
import Suggestions from "./components/Suggestions";
import Branding from "./components/Branding"

function App() {
  return (
    <Router>
      <Modal/>
      <Header/>
      <Courseintro/>
      <Description/>
      <Suggestions/>
      <Branding/>
      <Footer/>
      <End/>
    </Router>
  );
}

export default App;
