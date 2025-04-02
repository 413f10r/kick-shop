import { Link } from "react-router-dom"
import CartSection from "./CartSection";


export default function ProductCard({ product }) {
    const { id, name, price, gender, brand, slug, images } = product;

    return (
        <div className="card h-100" key={id}>
            <Link className="card-body" to={`/products/${slug}`}>
                <div id={`carousel-${id}`} className="carousel slide" data-bs-theme="dark">
                    <div className="carousel-inner">
                        {
                            // Inverte l'ordine delle immagini
                            images && images.reverse().map((image, index) => {
                                const { id, image_url } = image;

                                // Aggiungi la classe "active" solo per la prima immagine
                                const className = index === 0 ? 'carousel-item active' : 'carousel-item';

                                return (
                                    <div key={id} className={className}>
                                        <img src={image_url} alt={name} className="w-100 mb-3" />
                                    </div>
                                );
                            })
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${id}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${id}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <h5 className="card-title">{name}</h5>
                <p>Brand: {brand}</p>
                <p>Prezzo: {price} €</p>
                <p>Genere: {gender}</p>
            </Link>

            <div className="d-flex justify-content-around pb-3">
                <Link to={`/products/${slug}`} className="btn btn-outline-primary">Dettagli</Link>

                <CartSection />
            </div>
        </div>
    );
}