import axios from 'axios';
import { createContext, useContext, useState } from 'react';


// Creazione del contesto globale
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    // RICERCA
    const [query, setQuery] = useState('');
    const [searchProducts, setSearchProducts] = useState([]);


    //Chiamate api per ricerca 
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita il refresh della pagina

        // http://localhost:3000/search/
        axios.get(`http://localhost:3000/search/${query}`)
            .then(((res) => setSearchProducts(res.data)))
            .catch((error) => console.log("Errore nella ricerca:", error));

        setQuery(""); // svuota search bar

    }



    // FILTRO
    const [filterItems, setFilterItems] = useState("");

    // Funzione filtri
    const filters = () => {
        if (filterItems === "name-asc") {
            searchProducts.sort((a, b) => a.name.localeCompare(b.name)); // Ordina per nome A-Z
        } else if (filterItems === "name-desc") {
            searchProducts.sort((a, b) => b.name.localeCompare(a.name)); // Ordina per nome Z-A
        } else if (filterItems === "price-asc") {
            searchProducts.sort((a, b) => a.price - b.price); // Ordina per prezzo crescente
        } else if (filterItems === "price-desc") {
            searchProducts.sort((a, b) => b.price - a.price); // Ordina per prezzo decrescente
        }

        return searchProducts;
    };

    const filteredItems = filters(); // Ottieni i prodotti filtrati

    // Valori condivisi nel contesto globale
    const value = {
        query,
        setQuery,
        handleSubmit,
        searchProducts,
        setFilterItems,
        filteredItems
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

// Hook personalizzato per accedere al contesto globale in altri componenti
const useGlobalContext = () => useContext(GlobalContext);

// Esportazione del GlobalProvider e del custom hook per l'uso nei componenti
export { GlobalProvider, useGlobalContext };