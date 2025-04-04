import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

export default function ProductCard({ product }) {
    const { id, name, price, season, gender, brand, slug, images, availability } = product;

    const { addToCart } = useGlobalContext();

    return (
        <div className="card h-100" key={id}>
            <Link className="card-body" to={`/products/${slug}`}
                onClick={() => window.scrollTo(0, 0)} // Riporta lo scroll all'inizio della pagina
            >
                <div id={`carousel-${id}`} className="carousel slide" data-bs-theme="dark">
                    <div className="carousel-inner cardBox position-relative">
                        {/* Icona del cuore */}
                        <i
                            className="fa-solid fa-heart  heart-icon"
                            style={{
                                top: "1rem",
                                left: "1rem",
                                color: "gray",
                                fontSize: "1.5rem",
                                cursor: "pointer",
                                zIndex: 10,
                                transition: "color 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = "red";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = "gray";
                            }}
                        ></i>

                        {/* Icona del carrello */}
                        <i className="fa-solid fa-cart-shopping cart-icon"
                            style={{
                                top: "1rem",
                                right: "1rem",
                                color: "gray",
                                fontSize: "1.5rem",
                                cursor: "pointer",
                                zIndex: 10,
                                transition: "color 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = "green";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = "gray";
                            }}
                            type="button"
                            onClick={() => addToCart(product)}
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight"// Chiama la funzione addToCart con il prodotto
                        >

                        </i>


                        {/* Carousel delle immagini */}
                        {images &&
                            images.reverse().map((image, index) => {
                                const { id, image_url } = image;

                                // Aggiungi la classe "active" solo per la prima immagine
                                const className = index === 0 ? "carousel-item active" : "carousel-item";

                                return (
                                    <div key={id} className={className}>
                                        <figure className="imgBox-dimension">
                                            <img src={image_url} alt={name} className="w-100 mb-3 effectCard imgBox" />
                                        </figure>
                                    </div>
                                );
                            })}
                    </div>

                    {/* Controlli del carousel */}
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#carousel-${id}`}
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#carousel-${id}`}
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* Dettagli del prodotto */}
                <h5 className="card-title"><strong>{name}</strong></h5>{gender}
                <p className="fonts"><strong>a partire da:</strong> <button className="btn btn-outline-success"><strong>€{price}</strong></button></p>

            </Link>
        </div>
    );
}