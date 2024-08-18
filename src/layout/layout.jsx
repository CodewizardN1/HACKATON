import Navbar from "../components/navbar/navbar"

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />

            {children}
        </div>
    )
}

export default Layout