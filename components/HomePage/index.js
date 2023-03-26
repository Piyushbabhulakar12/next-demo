import NavbarApp from "../Navbar/Navbar"
import About from "./components/About"
import AboutDetail from "./components/AboutDetail"
import HeroSection from "./components/HeroSection"
import Services from "./components/Services"
import WhyChooseUs from "./components/WhyChooseUs"

const HomePage = () => {
    return(
        <>
        <NavbarApp />
        <HeroSection />
        <About />
        <AboutDetail />
        <Services />
        <WhyChooseUs />
        </>
    )
}
export default HomePage