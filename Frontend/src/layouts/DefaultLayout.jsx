import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

// import BannerScroll from "../components/BannerScroll";

export default function DefaultLayout() {
    return (
        <>
            {/* <BannerScroll/> */}

            {/* Header principale sotto la barra di scorrimento */}
            <Header />

            <main className="container-fluid">
                {/* Questo è il contenuto dinamico delle rotte */}
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}
