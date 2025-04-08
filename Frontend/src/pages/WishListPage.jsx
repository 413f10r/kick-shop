import { useGlobalContext } from "../context/GlobalContext";
import CategorySection from "../components/CategorySection";
import HorizontalProductCard from "../components/HorizontalProductCard";

export default function WishListPage() {
    const { wish, product } = useGlobalContext(); // Accedi alla wishlist dal contesto

    return (
        <>
            <h1 className="category-title py-3">La tua wish list</h1>
            {wish.length > 0 ? (
                wish.map((product) => (
                    <HorizontalProductCard key={product.id} product={product} />
                ))
            ) : (
                <p className="wishlist-empty">La tua wishlist è vuota.</p>
            )}
            <CategorySection />
        </>
    );
}