// src/pages/Home.js
import React, { useState } from "react";
import initialBooks from "../utils/books";

const Home = () => {
  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = () => {
    if (!newBook.title || !newBook.author || !newBook.price) return;
    const newId = books.length + 1;
    const bookToAdd = { id: newId, ...newBook, price: parseInt(newBook.price) };
    setBooks([...books, bookToAdd]);
    setNewBook({ title: "", author: "", price: "", description: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Buku</h1>

      <div className="mb-6 border p-4 rounded shadow bg-gray-50">
        <h2 className="text-lg font-semibold mb-2">Tambah Buku Baru</h2>
        <input
          type="text"
          name="title"
          placeholder="Judul"
          value={newBook.title}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />
        <input
          type="text"
          name="author"
          placeholder="Penulis"
          value={newBook.author}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />
        <input
          type="number"
          name="price"
          placeholder="Harga"
          value={newBook.price}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2"
        />
        <input
          type="text"
          name="description"
          placeholder="Deskripsi"
          value={newBook.description}
          onChange={handleChange}
          className="border p-2 mr-2 mb-2 w-full"
        />
        <button
          onClick={handleAddBook}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Tambah Buku
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p>Penulis: {book.author}</p>
            <p>Harga: Rp {book.price.toLocaleString()}</p>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
