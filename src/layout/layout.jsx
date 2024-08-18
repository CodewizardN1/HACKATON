import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>

            {children}

            <Footer/>
        </div>
    )
}

export default Layout