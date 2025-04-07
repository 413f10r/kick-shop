import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import CategorySection from '../components/CategorySection';
import FilterSection from '../components/FilterSection';
import { useGlobalContext } from '../context/GlobalContext';

export default function WinterPage() {

    const { viewMode } = useGlobalContext();

    // CHIAMATA PRODOTTI
    const [winterProducts, setWinterProducts] = useState([]);

    // fetch per prodotti
    const fetchProducts = () => {
        // console.log('Fetching products...')

        axios
            .get('http://localhost:3000/products')
            .then((res) => {
                setWinterProducts(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // rendering prodotti in html
    const renderWinterProducts = () => {
        return winterProducts
            .filter((winterProduct) => winterProduct.season === "inverno" || winterProduct.season === "autunno") // Filtra per genere
            .map((winterProduct) => (
                <div
                    className={viewMode === "grid" ? "col-lg-3 col-md-4 col-sm-6 g-3" : "col-12 py-3"}
                    key={winterProduct.id}
                >
                    <ProductCard product={winterProduct} viewMode={viewMode} />
                </div>
            ));
    };

    // invocazione chiamata al caricamento del componente in pagina
    useEffect(fetchProducts, []);

    return (
        <>
            <h1 className="text-center category-title py-3">Collezione Inverno</h1>

            <figure>
                <img src="/src/assets/img/hero-winter.webp" alt="Hero image 3" className="w-100 hero-border" />
            </figure>

            <div className="px-5">
                <FilterSection />

                <div className={viewMode === "grid" ? "row row-cols-lg-4" : "row"}>
                    {renderWinterProducts()}
                </div>

                <CategorySection />
            </div>
        </>
    )
}