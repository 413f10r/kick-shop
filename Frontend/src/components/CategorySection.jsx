import { Link } from "react-router-dom";


export default function CategorySection() {
    return (
        <>

             {/* categorie */}
             <h2 className="text-center py-3">Categorie</h2>

<div className="container-fluid">
    <ul className="row">
        <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <Link className="w-100 position-relative" to={`/man`}>
                <figure className="categoryCard">
                    <img src="/src/assets/img/category/manCategory.jpg" alt="Man category" className="w-100 imgBox" />
                </figure>

                <button className="btn btn-outline-light position-absolute start-0 bottom-0 ms-3 mb-3 fs-4">Uomo</button>
            </Link>

        </li>

        <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <Link className="w-100 position-relative" to={`/woman`}>
                <figure className="categoryCard">
                    <img src="/src/assets/img/category/womanCategory.jpg" alt="Man category" className="w-100 imgBox" />
                </figure>

                <button className="btn btn-outline-light position-absolute start-0 bottom-0 ms-3 mb-3 fs-4">Donna</button>
            </Link>
        </li>

        <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <Link className="w-100 position-relative" to={`/summer`}>
                <figure className="categoryCard">
                    <img src="src/assets/img/category/summerCategory.jpg" alt="Man category" className="w-100 imgBox" />
                </figure>

                <button className="btn btn-outline-light position-absolute start-0 bottom-0 ms-3 mb-3 fs-4">Estate</button>
            </Link>
        </li>

        <li className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <Link className="w-100 position-relative" to={`/winter`}>
                <figure className="categoryCard" >
                    <img src="/src/assets/img/category/winterCategory.jpg" alt="Man category" className="w-100 imgBox" />
                </figure>

                <button className="btn btn-outline-light position-absolute start-0 bottom-0 ms-3 mb-3 fs-4">Inverno</button>
            </Link>
        </li>
    </ul>
</div>

        </>
    )
}