import { Link, Outlet } from "react-router-dom"

function Sablon() {
    return (
        <>
            <header className="container-fluid bg-dark">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link className="navbar-brand" to="/">Ana Ekran</Link>
                    <Link className="navbar-brand" to="/blog">Blog Ekrani</Link>
                    <Link className="navbar-brand" to="/iletisim">Iletisim Ekrani</Link>

                </nav>
            </header>

            <section className="container py-5"><Outlet></Outlet></section>
            <footer className="container">Tüm haklari saklidir. 2023 mayıs</footer>
        </>
    )
}


export default Sablon