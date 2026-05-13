import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export function useProducts(limit) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const res = await axios.get(
                `https://dummyjson.com/products?limit=${limit}`
            );

            setProducts(res.data.products);
        } catch (err) {
            setError("Não foi possível buscar produtos. Tente novamente.");
        } finally {
            setLoading(false);
        }
    }, [limit]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    async function searchProducts(search) {
        if (!search.trim()) {
            fetchProducts();
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const res = await axios.get(
                `https://dummyjson.com/products/search?q=${search}`
            );

            setProducts(res.data.products);
        } catch (err) {
            setError("Não foi possível buscar produtos. Tente novamente.");
            setProducts([]);
        } finally {
            setLoading(false);
        }
    }

    return { products, loading, error, searchProducts, fetchProducts };
}