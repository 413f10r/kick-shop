import { useGlobalContext } from "../context/GlobalContext";
import Badge from "react-bootstrap/Badge";
import QuantityCounter from "./ QuantityCounter";

export default function OrderRecap() {
    const { cart, handleQuantityChange, handleRemoveItem, quantities } = useGlobalContext();

    // Calcolare il totale escludendo i prodotti non disponibili
    const total = cart.reduce((acc, item, index) => {
        if (item.availability > 0) {
            acc += item.price * (quantities[index] || 1);
        }
        return acc;
    }, 0);

    // Calcolare il costo di spedizione (esempio: gratuito se il totale supera 200€)
    const shippingCost = total > 200 ? 0 : 25;

    return (
        <div className="offcanvas-body">
            {cart.length === 0 ? (
                <p>Il carrello è vuoto.</p>
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
                                    onClick={() => handleRemoveItem(index)}
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {/* Se ci sono prodotti nel carrello, mostriamo il costo di spedizione e il totale */}
            {cart.length > 0 && (
                <div>
                    <div className="input-group pt-3 d-flex justify-content-end">
                        <span className="input-group-text"><strong>Costo di spedizione : </strong></span>
                        <Badge className='bg-warning'>
                            <h5>
                                <strong>{shippingCost} €</strong>
                            </h5>
                        </Badge>
                    </div>

                    {/* Totale */}
                    <div className="input-group pt-3 d-flex justify-content-end">
                        <span className="input-group-text"><strong>TOTALE : </strong></span>
                        <Badge className='bg-success'>
                            <h5>
                                <strong>{(total + shippingCost).toFixed(2)} €</strong>
                            </h5>
                        </Badge>
                    </div>
                </div>
            )}
        </div>
    );
}
