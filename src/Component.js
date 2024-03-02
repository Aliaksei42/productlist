// Component.js
import React, { useEffect } from 'react';
import styles from './Component.module.css';
import { fetchData } from './services/api'

function Component() {

  useEffect(() => {
    fetchData() // Вызываем функцию fetchData
      .then(data => {
        console.log(data); // Выводим результат в консоль
      })
      .catch(error => {
        console.error('Error:', error);
      });
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
          <tr className={styles.row}>
            <td className={styles.cell}>001</td>
            <td className={styles.cell}>Classic Leather Shoes</td>
            <td className={styles.cell}>$59.99</td>
            <td className={styles.cell}>Footwear Co.</td>
          </tr>
          <tr className={styles.row}>
            <td className={styles.cell}>002</td>
            <td className={styles.cell}>Designer Handbag</td>
            <td className={styles.cell}>$89.99</td>
            <td className={styles.cell}>Fashion House</td>
          </tr>
          <tr className={styles.row}>
            <td className={styles.cell}>003</td>
            <td className={styles.cell}>Wireless Earbuds</td>
            <td className={styles.cell}>$69.99</td>
            <td className={styles.cell}>Acoustics Ltd.</td>
          </tr>
          <tr className={styles.row}>
            <td className={styles.cell}>004</td>
            <td className={styles.cell}>Vintage Pocket Watch</td>
            <td className={styles.cell}>$79.99</td>
            <td className={styles.cell}>Timeless Timepieces</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.flexContainer}>
      <button className={styles.button}>
          Previous
        </button>
        <span>Page 1 of 5</span>
        <button className={styles.button}>
          Next
        </button>
      </div>
    </section>
  );
}

export default Component;