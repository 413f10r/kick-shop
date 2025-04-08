import { useGlobalContext } from "../context/GlobalContext";
import Badge from "react-bootstrap/Badge";
import QuantityCounter from './ QuantityCounter';
import { useState, useEffect } from 'react';
import ConfirmationModal from "./ConfirmationModal";
import { NavLink } from "react-router-dom";

export default function OrderRecap() {
    const { cart = [], handleQuantityChange, handleRemoveItem, quantities = [] } = useGlobalContext();

    const [showModal, setShowModal] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [scroll, setScroll] = useState(0); // Stato per il banner di spedizione

    const ShippingCost = 25; // Costo fisso di spedizione

    // Effetto per il banner di spedizione
    useEffect(() => {
        const scrollInterval = setInterval(() => {
            setScroll((prevScroll) => prevScroll + 1);
        }, 30); // Velocità dello scroll

        return () => clearInterval(scrollInterval);
    }, []);

    const confirmRemove = (index) => {
        setSelectedIndex(index);
        setShowModal(true);
    };

    const handleConfirm = () => {
        handleRemoveItem(selectedIndex);
        setShowModal(false);
        setSelectedIndex(null);
    };

    const handleCancel = () => {
        setShowModal(false);
        setSelectedIndex(null);
    };

    // Calcolare il totale escludendo i prodotti non disponibili
    const subtotal = cart.reduce((acc, item, index) => {
        if (item && item.availability > 0) {
            acc += item.price * (quantities[index] || 1);
        }
        return acc;
    }, 0);

    // Calcolare il totale con il costo di spedizione
    const total = cart.length === 0 ? 0 : subtotal;

    // Calcolare il nuovo totale (senza costo di spedizione se supera 200€)
    const newTotal = cart.length === 0 ? 0 : (subtotal >= 200 ? subtotal : total + ShippingCost);

    // Funzione per mostrare il messaggio di spedizione gratuita
    const freeShipping = () => {
        if (subtotal >= 200) {
            return (
                <div className="alert alert-success mt-3">
                    🎉 Spedizione gratuita per ordini superiori a 200€!
                </div>
            );
        } else {
            const amountLeft = (200 - subtotal).toFixed(2);
            return (
                <div className="alert alert-warning mt-3">
                    Mancano
                    <strong> {amountLeft}€ </strong>
                    per ottenere la spedizione gratuita. Potrebbero interessarti: i  nostri
                    <NavLink
                        aria-current="page"
                        to={`/ballon`}
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <button
                            type="button"
                            className="btn btn-outline-dark mx-2"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        >
                            Palloni
                        </button>
                    </NavLink>
                    <NavLink
                        aria-current="page"
                        to={`/search?q=scarpe`}
                        onClick={() => window.scrollTo(0, 0)}>
                        Scarpe</NavLink>

                    da collezione.
                </div>
            );
        }
    };

    return (
        <div className="offcanvas-body">
            {/* Banner di spedizione */}
            <div className="banner-container">
                <div className="banner-content" style={{ transform: `translateX(-${scroll}px)` }}>
                    <p className="text"><strong className="text-warning">OFFERTA</strong> speciale Kick Shop!!! 🚚 Approfitta della
                        <strong className="text-warning"> SPEDIZIONE GRATUITA!!! </strong> Per ordini superiori a 200€! Non lasciarti sfuggire questa occasione!
                    </p>
                </div>
            </div>

            {cart.length === 0 ? (
                <>
                    <p className="text-center text-muted">
                        <i className="fa-solid fa-heart-broken"></i> Il tuo carrello è vuoto.
                    </p>
                    <NavLink
                        aria-current="page"
                        to={`/`}
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <button
                            type="button"
                            className="btn btn-outline-dark mx-2"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        >
                            Torna alla Home
                        </button>
                    </NavLink>
                </>
            ) : (
                <ul className="list-group">
                    {cart.map((item, index) => (
                        <li key={index} className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center gap-3" aria-current="true">
                            {/* Immagine prodotto */}
                            <img
                                src={item.images?.[0]?.image_url}
                                alt={item.name}
                                style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                            />

                            {/* Info e badge */}
                            <div className="d-flex flex-column flex-grow-1">
                                <p className="mb-1">
                                    <strong>{item.name}</strong> - {item.price} €
                                </p>

                                {item.availability === 0 && (
                                    <Badge bg="warning" text="dark">Non disponibile</Badge>
                                )}
                            </div>

                            {/* Counter + trash */}
                            <div className='d-flex gap-2 align-items-center'>
                                {item.availability > 0 ? (
                                    <QuantityCounter
                                        index={index}
                                        quantity={quantities[index] || 1}
                                        onQuantityChange={handleQuantityChange}
                                        maxQuantity={item.availability}
                                    />
                                ) : (
                                    <span className="text-muted">Prodotto esaurito</span>
                                )}

                                <button
                                    className="btn btn-danger"
                                    onClick={() => confirmRemove(index)}
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {/* Totale */}
            <div className="input-group pt-3 d-flex justify-content-start">
                <span className="input-group-text"><strong>TOTALE PARZIALE : </strong></span>
                <div
                    className={`input-group-text ${subtotal >= 200 ? "text-decoration-line-through text-danger" : ""}`}
                >
                    <h6>
                        <strong>{total.toFixed(2)} €</strong>
                    </h6>
                </div>
            </div>

            {/* Costo di spedizione */}
            <div className="input-group pt-3 d-flex justify-content-start">
                <span className="input-group-text"><strong>+ Costo di spedizione : </strong></span>
                <div
                    className={`input-group-text ${subtotal >= 200 ? "text-decoration-line-through text-danger" : ""}`}
                >
                    <h5>
                        <strong>{ShippingCost.toFixed(2)} €</strong>
                    </h5>
                </div>
            </div>

            {/* Messaggio di spedizione gratuita */}
            {freeShipping()}

            {/* Nuovo totale */}
            <div className="input-group pt-3 d-flex justify-content-start">
                <span className="input-group-text"><h4><strong>PREZZO FINALE: </strong></h4></span>
                <Badge className='bg-success'>
                    <h4>
                        <strong>{newTotal.toFixed(2)} €</strong>
                    </h4>
                </Badge>
            </div>

            {/* Modal di conferma */}
            <ConfirmationModal
                show={showModal}
                onCancel={handleCancel}
                onConfirm={handleConfirm}
                message="Sei sicuro di voler rimuovere questo prodotto dal carrello?"
            />
        </div>
    );
}