import React, { useEffect, useState } from 'react'
import styles from './Component.module.css'
import { fetchPosts } from './services/apiUtils.js'

function Component() {
    const [items, setItems] = useState([]) // items - хранит товары с уникальными ключами
    const [filteredItems, setFilteredItems] = useState([]) // filteredItems - хранит товары отфильтрованные по id,drand,name,price
    const [offset, setOffset] = useState(0) // Смещение для запроса данных
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await fetchPosts(offset)
                const uniqueItemsMap = {} // Объект для хранения уникальных товаров
                res.forEach((item) => {
                    // Если товар с таким id еще не встречался, добавляем его в объект
                    if (!uniqueItemsMap[item.id]) {
                        uniqueItemsMap[item.id] = item
                    }
                })
                console.log(offset)
                // Преобразуем объект обратно в массив
                const uniqueItems = Object.values(uniqueItemsMap)
                setItems(uniqueItems) // Устанавливаем только уникальные товары в состояние items
                setFilteredItems(uniqueItems) // Инициализируем отфильтрованные данные
                setIsLoading(false)
            } catch (error) {
                // Обработка ошибки
                console.error(error)
                // Если у ошибки есть идентификатор, выведите его в консоль
                if (error.id) {
                    console.error('Error ID:', error.id)
                }
                // Повторный запрос при ошибке
                fetchArticles()
            }
        }
        fetchArticles()
    }, [offset])

    // Функция для фильтрации данных по заданному критерию
    const filterData = (criterion) => {
        let filteredData = [...items] // Создаем копию всех элементов
        filteredData.sort((a, b) => {
            // Если значения являются числами, сравниваем их как числа
            if (!isNaN(a[criterion]) && !isNaN(b[criterion])) {
                return a[criterion] - b[criterion]
            }
            // Если одно из значений пусто, используем пустую строку для сравнения
            if (!a[criterion]) return -1
            if (!b[criterion]) return 1
            // Иначе сравниваем как строки
            return a[criterion]
                .toString()
                .localeCompare(b[criterion].toString())
        })
        setFilteredItems(filteredData) // Устанавливаем отфильтрованные данные
    }

    // Обработчик нажатия на кнопку "Next"
    const handleNextClick = () => {
        setOffset((prevOffset) => prevOffset + 50) // Увеличиваем смещение на 50
    }
    const handlePreviousClick = () => {
        setOffset((prevOffset) => Math.max(0, prevOffset - 50)) // Уменьшаем смещение на 50, оставляя его не меньше нуля
    }

    return (
        <section className={styles.overflowAuto}>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.borderTop}>
                            <th
                                className={styles.headerCell}
                                onClick={() => filterData('id')}
                            >
                                ID
                            </th>
                            <th
                                className={styles.headerCell}
                                onClick={() => filterData('product')}
                            >
                                Name
                            </th>
                            <th
                                className={styles.headerCell}
                                onClick={() => filterData('price')}
                            >
                                Price
                            </th>
                            <th
                                className={styles.headerCell}
                                onClick={() => filterData('brand')}
                            >
                                Brand
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.map((item) => {
                            const { id, product, price, brand } = item // Деструктуризация объекта item
                            return (
                                <tr key={id} className={styles.row}>
                                    <td className={styles.cell}>{id}</td>
                                    <td className={styles.cell}>{product}</td>
                                    <td className={styles.cell}>{price}</td>
                                    <td className={styles.cell}>{brand}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
            <div className={styles.flexContainer}>
                <button className={styles.button} onClick={handlePreviousClick}>
                    Previous
                </button>
                <span>
                    {offset} - {offset + 50}
                </span>
                <button className={styles.button} onClick={handleNextClick}>
                    Next
                </button>
            </div>
        </section>
    )
}

export default Component
