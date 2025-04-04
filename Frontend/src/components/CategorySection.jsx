import { Link } from "react-router-dom";
import manCategory from "../assets/img/category/manCategory.jpg";
import womanCategory from "../assets/img/category/womanCategory.jpg";
import summerCategory from "../assets/img/category/summerCategory.jpg";
import winterCategory from "../assets/img/category/winterCategory.jpg";

export default function CategorySection() {
    return (
        <>
            <h2 className="text-center py-3">Categorie</h2>
            <div className="container-fluid">
                <ul className="row">

                    <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <Link className="w-100 position-relative" to={`/man`}>
                            <figure className="categoryCard">
                                <img src={manCategory} alt="Man category" className="w-100 imgBox" />
                            </figure>
                            <button className="btn btn-outline-light position-absolute start-0 bottom-0 ms-3 mb-3 fs-4">Collezione Uomo</button>
                        </Link>
                    </li>



                    <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <Link className="w-100 position-relative" to={`/woman`}>
                            <figure className="categoryCard">
                                <img src={womanCategory} alt="woman category" className="w-100 imgBox" />
                            </figure>
                            <button className="btn btn-outline-light position-absolute start-0 bottom-0 ms-3 mb-3 fs-4">Collezione Donna</button>
                        </Link>
                    </li>

                    <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <Link className="w-100 position-relative" to={`/summer`}>
                            <figure className="categoryCard">
                                <img src={summerCategory} alt="summer category" className="w-100 imgBox" />
                            </figure>
                            <button className="btn btn-outline-light position-absolute start-0 bottom-0 ms-3 mb-3 fs-4">Collezione Estate</button>
                        </Link>
                    </li>

                    <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <Link className="w-100 position-relative" to={`/winter`}>
                            <figure className="categoryCard">
                                <img src={winterCategory} alt="winter category" className="w-100 imgBox" />
                            </figure>
                            <button className="btn btn-outline-light position-absolute start-0 bottom-0 ms-3 mb-3 fs-4">Collezione Inverno</button>
                        </Link>
                    </li>

                </ul>
            </div>

        </>
    )
}