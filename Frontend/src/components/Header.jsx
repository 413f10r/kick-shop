import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>

            <nav className="navbar navbar-expand-lg bg-body-">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={`/`}>
                        <img className="img-fluid rounded" width="70px" src="/logo.png" alt="Logo Kick Shop" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={`/`}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={`/man`}>Uomo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={`/woman`}>Donna</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={`/summer`}>Estate</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={`/winter`}>Inverno</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Cerca" aria-label="Cerca" />
                            <button className="btn btn-outline-light" type="submit">Cerca</button>
                        </form>
                    </div>
                </div>
            </nav>

        </header>
    )
}