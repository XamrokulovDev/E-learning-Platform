import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Routerlayout = () => {
  return (
    <header>
      <nav>
        <Navbar/>
      </nav>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </header>
  )
}

export default Routerlayout;