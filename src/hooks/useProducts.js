import { useEffect, useState } from "react";
import axios from "axios";

export function useProducts(limit) {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                setLoading(true);
                const res = await axios.get(`https://dummyjson.com/products?limit=${limit}`);

                setProducts(res.data.products);
            } catch (err) {
                setError("Erro ao buscar produtos");
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [limit]);

    return { products, loading, error };
}