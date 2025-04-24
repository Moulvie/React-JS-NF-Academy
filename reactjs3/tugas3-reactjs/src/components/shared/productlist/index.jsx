import { useState } from "react";
import initialBooks from "../../../utils/books";

export default function ProductList() {
  const [books, setBooks] = useState(initialBooks);

  // State untuk form input
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
    image: "",
  });

  // Handle perubahan form input
  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  // Tambahkan buku baru ke state
  const addBook = (e) => {
    e.preventDefault(); // Hindari refresh halaman
    const bookToAdd = {
      id: books.length + 1,
      ...newBook,
    };

    setBooks([...books, bookToAdd]);

    // Reset form setelah ditambahkan
    setNewBook({
      title: "",
      author: "",
      year: "",
      description: "",
      image: "",
    });
  };

  return (
    <>
      <section id="main" className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h1 className="fw-light">Koleksi Buku Terbaru</h1>
            <p className="lead text-body-secondary">
              Tambahkan buku baru ke koleksi kamu 🎉
            </p>
            {/* Form Tambah Buku */}
            <form onSubmit={addBook} className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Judul Buku"
                  value={newBook.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="author"
                  placeholder="Penulis"
                  value={newBook.author}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  className="form-control"
                  name="year"
                  placeholder="Tahun Terbit"
                  value={newBook.year}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  name="image"
                  placeholder="Link Gambar"
                  value={newBook.image}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  name="description"
                  placeholder="Deskripsi Buku"
                  rows="3"
                  value={newBook.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Tambah Buku
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Tampilkan semua buku */}
      <section id="album" className="album py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Koleksi Buku Pilihan</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {books.map((book) => (
              <div key={book.id} className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={book.image}
                    className="card-img-top"
                    alt={book.title}
                    style={{ height: "225px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.description}</p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <p className="mb-0">{book.author}</p>
                      </div>
                      <small className="text-muted">{book.year}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}