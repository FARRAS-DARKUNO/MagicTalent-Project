import { useSelector } from "react-redux";
import Footer from "./components/Navar-Footer/Footer";
import Navbar from "./components/Navar-Footer/Navbar";
import LandingPage from "./Pages/LandingPage";
import { RootState } from "../../store";



const PortfolioUser = () => {

  const theme = useSelector((state: RootState) => state.themeChange.Theme);
  
  return (
    <div className={`${theme}`}>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  )
};

export default PortfolioUser