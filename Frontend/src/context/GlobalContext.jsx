import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    // Initial form data
    const initialData = {
        userName: '',
        userSurname: '',
        userEmail: '',
        addressShipping: '',
        addressInvoice: '',
        telephone: '',
        city: '',
        province: '',
    };

    // Memorizza dati
    const [query, setQuery] = useState('');
    const [searchProducts, setSearchProducts] = useState([]);
    const [formData, setFormData] = useState(initialData);
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        try {
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error("Errore nel parsing del carrello:", error);
            return [];
        }
    });
    const [wish, setWish] = useState(() => {
        const savedWish = localStorage.getItem("wish");
        try {
            return savedWish ? JSON.parse(savedWish) : [];
        } catch (error) {
            console.error("Errore nel parsing della wishlist:", error);
            return [];
        }
    });
    const [quantities, setQuantities] = useState([]);
    const [total, setTotal] = useState(0);

    // Aggiungi lo stato per il costo di spedizione
    const [shippingCost, setShippingCost] = useState(0); // Nuovo stato per il costo di spedizione

    // Gestione ricerca
    const handleSubmit = (searchTerm) => {
        axios.get(`http://localhost:3000/search/${searchTerm}`)
            .then((res) => {
                if (res.data && Array.isArray(res.data)) {
                    setSearchProducts(res.data); // Imposta i prodotti trovati
                } else {
                    setSearchProducts([]); // Se non è un array, metti un array vuoto
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 404) {
                    setSearchProducts([]); // Gestisci errore 404 e mostra array vuoto
                    console.log("Nessun prodotto trovato per questa ricerca.");
                } else {
                    console.log("Errore durante la ricerca:", error);
                }
            });
    };

    // Gestione ordinamento
    const [sortCriteria, setSortCriteria] = useState({ field: 'name', order: 'asc' });

    const handleSort = (field, order) => {
        setSortCriteria({ field, order });
    };

    // Funzione per ordinare i prodotti
    const sortProducts = (products) => {
        const { field, order } = sortCriteria;
        return [...products].sort((a, b) => {
            if (field === 'name') {
                return order === 'asc'
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name);
            } else if (field === 'price') {
                return order === 'asc'
                    ? a.price - b.price
                    : b.price - a.price;
            }
            return 0;
        });
    };

    const sortedProducts = sortProducts(searchProducts);

    // VISUALIZZAZIONE GRIGLIA - LISTA
    const [viewMode, setViewMode] = useState("grid"); // "grid" o "list"

    // Altri effetti e metodi (carrello, wish list, quantità, checkout) restano invariati
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("wish", JSON.stringify(wish));
    }, [wish]);

    useEffect(() => {
        setQuantities((prevQuantities) => {
            return cart.map((_, index) => prevQuantities[index] || 1);
        });
    }, [cart]);

    useEffect(() => {
        const newTotal = cart.reduce((acc, item, index) => {
            return acc + item.price * (quantities[index] || 1);
        }, 0);
        setTotal(newTotal);
    }, [quantities, cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            if (prevCart.some((item) => item.id === product.id)) {
                return prevCart; // Non aggiungere duplicati
            }
            return [...prevCart, product];
        });
    };

    const addToWish = (product) => {
        setWish((prevWish) => {
            if (prevWish.some((item) => item.id === product.id)) {
                return prevWish; // Non aggiungere duplicati
            }
            return [...prevWish, product];
        });
    };

    const handleQuantityChange = (index, value) => {
        const product = cart[index];
        const maxStock = product.availability;

        const newQuantity = Math.min(parseInt(value), maxStock);

        const updatedQuantities = [...quantities];
        updatedQuantities[index] = newQuantity;
        setQuantities(updatedQuantities);
    };

    const handleRemoveItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    };

    const handleRemoveItemWish = (id) => {
        const itemToRemove = wish.find((item) => item.id === id);
        if (itemToRemove) {
            setWish((prevWish) => prevWish.filter((item) => item.id !== id));
        };
    };

    const setFieldValue = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submitCheckout = (e, navigate) => {
        e.preventDefault();
        if (!formData.userEmail || !formData.userName) {
            alert("Compila tutti i campi obbligatori!");
            return;
        }

        const cartWithQuantities = cart.map((item, index) => ({
            id_product: item.id,
            quantity: quantities[index] || 1
        }));

        const dataToSend = {
            ...formData,
            carts: cartWithQuantities
        };

        axios.post('http://localhost:3000/checkout', dataToSend, {
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => {
                // Imposta il nuovo shipping cost ricevuto dal backend
                setShippingCost(res.data.shippingCost); // Aggiorna il costo di spedizione
                setCart([]);
                setFormData(initialData);
                navigate("/thankyou");
            })
            .catch((err) => {
                console.log(err.response?.data?.error || "Errore durante l'invio dell'ordine");
            });
    };

    const value = {
        query,
        setQuery,
        handleSubmit,
        searchProducts: sortedProducts, // Cambiato per utilizzare i prodotti ordinati
        handleSort,
        submitCheckout,
        formData,
        setFieldValue,
        cart,
        setCart,
        addToCart,
        addToWish,
        quantities,
        handleQuantityChange,
        handleRemoveItem,
        handleRemoveItemWish,
        setQuantities,
        total,
        setTotal,
        wish,
        viewMode,
        setViewMode,
        shippingCost, // Aggiungi shippingCost al contesto
        setShippingCost, // Aggiungi il metodo per aggiornare shippingCost
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
