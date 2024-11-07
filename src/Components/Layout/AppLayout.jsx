import { Outlet } from "react-router-dom";
import FooterComponent from "../UI/Footer"
import HeaderComponent from "../UI/Header"

const Applayout = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </>
    )
}

export default Applayout;

