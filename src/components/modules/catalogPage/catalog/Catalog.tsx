import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useAppDispatch } from "store/store";
import { fetchBooks } from "store/books/asyncActions";
import { selectCategory } from "store/categories/selectors";
import { FiltersSidebar } from "../filters/filtersSidebar/FiltersSidebar";
import { selectBookData } from "store/books/selectors";

import styles from "./Catalog.module.scss";

import type { TCatalogBook } from "store/catalog/types";

import BookGrid from "../bookGrid/BookGrid";

// const books: TCatalogBook[] = [
//   {
//     id: 1,
//     title: "The Adventures of Knowledge",
//     full_description: "An inspiring tale that explores the journey of discovery and wisdom.",
//     short_description: "A tale of discovery and wisdom.",
//     price: 45.99,
//     category: "Архітектура",
//     isThisSlider: true,
//     available: "In stock",
//     authors: "John Doe",
//     titleImage: "https://via.placeholder.com/150/0000FF/808080?text=Book+1",
//     timeAdded: "2024-01-01T10:00:00Z",
//     images: [
//       "https://via.placeholder.com/150/0000FF/808080?text=Book+1",
//       "https://via.placeholder.com/150/FF0000/FFFFFF?text=Book+1a",
//     ],
//     quantity: 12,
//     characteristicDto: {
//       publisher: "Publisher A",
//       language: "Англійська",
//       bookType: "Paper",
//       coverType: "Softcover",
//     },
//   },
//   {
//     id: 2,
//     title: "History Unveiled",
//     full_description: "A detailed look into the hidden aspects of world history.",
//     short_description: "Discover hidden aspects of history.",
//     price: 30.5,
//     category: "Архітектура",
//     isThisSlider: false,
//     available: "Out of stock",
//     authors: "Jane Smith",
//     titleImage: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Book+2",
//     timeAdded: "2023-11-15T15:45:00Z",
//     images: [
//       "https://via.placeholder.com/150/FF0000/FFFFFF?text=Book+2",
//       "https://via.placeholder.com/150/FFFF00/000000?text=Book+2a",
//     ],
//     quantity: 0,
//     characteristicDto: {
//       publisher: "Publisher A",
//       language: "Українська",
//       bookType: "Paper",
//       coverType: "Softcover",
//     },
//   },
//   {
//     id: 3,
//     title: "The Science of Everything",
//     full_description: "A comprehensive guide to understanding the natural world.",
//     short_description: "A guide to understanding science.",
//     price: 50.0,
//     category: "Архітектура",
//     isThisSlider: true,
//     available: "In stock",
//     authors: "Emily Johnson",
//     titleImage: "https://via.placeholder.com/150/00FF00/000000?text=Book+3",
//     timeAdded: "2023-08-10T09:30:00Z",
//     images: ["https://via.placeholder.com/150/00FF00/000000?text=Book+3"],
//     quantity: 8,
//     characteristicDto: {
//       publisher: "Publisher A",
//       language: "Італійська",
//       bookType: "Paper",
//       coverType: "Softcover",
//     },
//   },
//   {
//     id: 4,
//     title: "Fantasy Realms",
//     full_description: "Explore mythical worlds and incredible adventures.",
//     short_description: "Mythical worlds and adventures.",
//     price: 60.0,
//     category: "Архітектура",
//     isThisSlider: false,
//     available: "In stock",
//     authors: "Michael Brown",
//     titleImage: "https://via.placeholder.com/150/FFFF00/000000?text=Book+4",
//     timeAdded: "2024-02-12T08:00:00Z",
//     images: [
//       "https://via.placeholder.com/150/FFFF00/000000?text=Book+4",
//       "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Book+4a",
//     ],
//     quantity: 20,
//     characteristicDto: {
//       publisher: "Publisher B",
//       language: "Англійська",
//       bookType: "Paper",
//       coverType: "Softcover",
//     },
//   },
//   {
//     id: 5,
//     title: "Romantic Escapades",
//     full_description: "A journey through the intricacies of love and relationships.",
//     short_description: "A story about love.",
//     price: 35.99,
//     category: "Архітектура",
//     isThisSlider: true,
//     available: "Out of stock",
//     authors: "John Doe",
//     titleImage: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Book+5",
//     timeAdded: "2023-12-01T14:20:00Z",
//     images: ["https://via.placeholder.com/150/FF00FF/FFFFFF?text=Book+5"],
//     quantity: 0,
//     characteristicDto: {
//       publisher: "Publisher B",
//       language: "Німецька",
//       bookType: "Electronic",
//       coverType: "Hardcover",
//     },
//   },
//   {
//     id: 6,
//     title: "The World of Quantum",
//     full_description: "Dive deep into the mysteries of quantum physics.",
//     short_description: "The mysteries of quantum physics.",
//     price: 70.5,
//     category: "Архітектура",
//     isThisSlider: false,
//     available: "In stock",
//     authors: "John Doe",
//     titleImage: "https://via.placeholder.com/150/00FFFF/000000?text=Book+6",
//     timeAdded: "2024-03-21T11:00:00Z",
//     images: ["https://via.placeholder.com/150/00FFFF/000000?text=Book+6"],
//     quantity: 15,
//     characteristicDto: {
//       publisher: "Publisher B",
//       language: "Німецька",
//       bookType: "Electronic",
//       coverType: "Hardcover",
//     },
//   },
//   {
//     id: 7,
//     title: "Warriors of the Past",
//     full_description: "A thrilling story about legendary warriors.",
//     short_description: "Legendary warriors and battles.",
//     price: 40.0,
//     category: "Архітектура",
//     isThisSlider: true,
//     available: "In stock",
//     authors: "Jane Smith",
//     titleImage: "https://via.placeholder.com/150/FFA500/000000?text=Book+7",
//     timeAdded: "2024-01-05T09:00:00Z",
//     images: [
//       "https://via.placeholder.com/150/FFA500/000000?text=Book+7",
//       "https://via.placeholder.com/150/FFFF00/FFFFFF?text=Book+7a",
//     ],
//     quantity: 10,
//     characteristicDto: {
//       publisher: "Publisher C",
//       language: "Німецька",
//       bookType: "Electronic",
//       coverType: "Hardcover",
//     },
//   },
//   {
//     id: 8,
//     title: "Mystical Lands",
//     full_description: "Explore the magical lands filled with wonder and intrigue.",
//     short_description: "Magical lands and wonders.",
//     price: 55.0,
//     category: "Архітектура",
//     isThisSlider: false,
//     available: "Out of stock",
//     authors: "Jane Smith",
//     titleImage: "https://via.placeholder.com/150/8A2BE2/FFFFFF?text=Book+8",
//     timeAdded: "2023-07-20T12:00:00Z",
//     images: ["https://via.placeholder.com/150/8A2BE2/FFFFFF?text=Book+8"],
//     quantity: 0,
//     characteristicDto: {
//       publisher: "Publisher C",
//       language: "Польська",
//       bookType: "Electronic",
//       coverType: "Hardcover",
//     },
//   },
//   {
//     id: 9,
//     title: "Secrets of the Mind",
//     full_description: "Discover the untapped potential of the human brain.",
//     short_description: "Unlock your mind's potential.",
//     price: 47.99,
//     category: "Архітектура",
//     isThisSlider: true,
//     available: "In stock",
//     authors: "Emily Johnson",
//     titleImage: "https://via.placeholder.com/150/7FFF00/000000?text=Book+9",
//     timeAdded: "2024-01-18T13:30:00Z",
//     images: ["https://via.placeholder.com/150/7FFF00/000000?text=Book+9"],
//     quantity: 7,
//     characteristicDto: {
//       publisher: "Publisher C",
//       language: "Польська",
//       bookType: "Electronic",
//       coverType: "Hardcover",
//     },
//   },
//   {
//     id: 10,
//     title: "Timeless Tales",
//     full_description: "A collection of stories that stand the test of time.",
//     short_description: "Stories for every generation.",
//     price: 25.0,
//     category: "Архітектура",
//     isThisSlider: false,
//     available: "In stock",
//     authors: "Emily Johnson",
//     titleImage: "https://via.placeholder.com/150/4682B4/FFFFFF?text=Book+",
//     timeAdded: "2023-10-10T10:00:00Z",
//     images: ["https://via.placeholder.com/150/4682B4/FFFFFF?text=Book+10"],
//     quantity: 30,
//     characteristicDto: {
//       publisher: "Publisher C",
//       language: "Польська",
//       bookType: "Paper",
//       coverType: "Softcover",
//     },
//   },
// ];

export function Catalog() {
  const selectedCategory = useSelector(selectCategory);
  const { books } = useSelector(selectBookData);
  console.log("books: ", books);
  const dispatch = useAppDispatch();

  const filteredByCategory = books.filter((book) => {
    console.log("selectedCategory: ", selectedCategory);

    return book.category === selectedCategory.name;
  });

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>
        {selectedCategory?.ukrName}
        <span> ({filteredByCategory.length})</span>
      </h1>

      {/* Catalog */}
      <div className={styles.catalogBox}>
        <FiltersSidebar />

        <div className={styles.bookGrid}>
          <BookGrid filteredByCategory={filteredByCategory} />
        </div>
      </div>
    </div>
  );
}
