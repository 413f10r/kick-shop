import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom"

export default function DefaultLayout() {

    return (
        <>
            <Header />

            <main className="container-fluid">
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}