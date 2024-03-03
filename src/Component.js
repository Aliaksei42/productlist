import React, { useEffect, useState } from 'react';
import styles from './Component.module.css';
import { fetchPosts } from './services/apiUtils.js';

function Component() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await fetchPosts();
                setItems(res); // Устанавливаем полученные товары в состояние items
            } catch (error) {
                console.error(error);
            }
        };
        fetchArticles();
    }, []);

    return (
        <section className={styles.overflowAuto}>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.borderTop}>
                        <th className={styles.headerCell}>ID</th>
                        <th className={styles.headerCell}>Name</th>
                        <th className={styles.headerCell}>Price</th>
                        <th className={styles.headerCell}>Brand</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        const { id, product, price, brand } = item; // Деструктуризация объекта item
                        return (
                            <tr key={id} className={styles.row}>
                                <td className={styles.cell}>{id}</td>
                                <td className={styles.cell}>{product}</td>
                                <td className={styles.cell}>{price}</td>
                                <td className={styles.cell}>{brand}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className={styles.flexContainer}>
                <button className={styles.button}>Previous</button>
                <span>Page 1 of 5</span>
                <button className={styles.button}>Next</button>
            </div>
        </section>
    );
}

export default Component;
