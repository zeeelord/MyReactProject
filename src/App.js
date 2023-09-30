import Navbar from './Components/NavBar'
import './assets/css/main_style.css'
import Homepage from "./Components/Home";

export default function App() {
    return (
        <div className="App relative">
            <Navbar></Navbar>
            <Homepage></Homepage>
        </div>
    )
}