const books = [
    {
      id: 1,
      title: "Historiografi Islam & perkembangannya",
      author: " Dr. Nyayu Soraya, M.Hum, Maryam, M.Hum, Dr. Maryamah, M.Hum",
      year: 2021,
      description:
        "Historiografi adalah ilmu yang mempelajari praktik ilmu sejarah. Hal ini dapat diwujudkan dalam berbagai bentuk, termasuk mempelajari metodologi sejarah dan perkembangan sejarah sebagai suatu disiplin akademik.",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      title: "Buku Pintar Sejarah Islam",
      author: "Qasim a. Ibrahim dan Muhammad A. Saleh",
      year: 2014,
      description:
        "Buku ini memaparkan sejarah Islam dan menjelaskannya dari sudut pandang Islam: sejak masa Nabi Muhammad, Khalifah Empat, Dinasti Umayah, Dinasti Abbasiyah, hingga masa kini; sejak muncul di Makkah hingga merekah di penjuru dunia.",
      image:
        "https://books.google.co.id/books/publisher/content?id=1s9nCwAAQBAJ&hl=id&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U27lxCd-XdDou20Q18nXHSX17pLhA&w=1280",
    },
    {
      id: 3,
      title: "Kisah Teladan Para Sahabiyah Nabi",
      author: "Ana Widyastuti, M.Pd, Carrot Academy",
      year: 2019,
      description:
        "Kisah Teladan Para Nabi menghadirkan cerita-cerita inspiratif penuh hikmah, mengajarkan nilai kesabaran, keberanian, dan keikhlasan dari perjalanan hidup para nabi. Bacaan yang memperkaya iman dan membangun karakter mulia.",
      image: "https://books.google.co.id/books/publisher/content?id=jEyrDwAAQBAJ&hl=id&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0u0iI5LtMfn7M2UFwdP31rWcI5rg&w=1280",
    },
    {
      id: 4,
      title: "Pokok-pokok filsafat hukum apa dan bagaimana filsafat hukum Indonesia",
      author: "Darji Darmodiharjo, Shidarta ",
      year: 1995,
      description:
        "Filsafat: Menyelami Hakikat Kehidupan mengajak pembaca memahami pertanyaan-pertanyaan mendasar tentang eksistensi, kebenaran, etika, dan makna hidup. Disajikan dengan bahasa yang lugas, buku ini menjadi jembatan untuk mengenal pemikiran para filsuf besar dan mengasah kemampuan berpikir kritis serta reflektif dalam menghadapi dunia.",
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 5,
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      year: 1997,
      description:
        "A personal finance classic that compares the mindsets of the author's two fathers regarding wealth and investing.",
      image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
    },
    {
      id: 6,
      title: "The Power of Now",
      author: "Eckhart Tolle",
      year: 1997,
      description:
        "A spiritual guide to help readers discover the power of living fully in the present moment.",
      image: "https://cdn.gramedia.com/uploads/items/9786230405198.jpeg",
    },
    {
      id: 7,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      description:
        "A coming-of-age novel that explores teenage angst and alienation through the eyes of Holden Caulfield.",
      image: "https://upload.wikimedia.org/wikipedia/id/3/32/Rye_catcher.jpg",
    },
    {
      id: 8,
      title: "The Last Lecture",
      author: "Randy Pausch",
      year: 2008,
      description:
        "A heartfelt lecture and memoir by a professor diagnosed with terminal cancer, sharing life lessons and dreams.",
      image: "https://upload.wikimedia.org/wikipedia/id/9/97/Sampul_The_Last_Lecture.jpg",
    },
    {
      id: 9,
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
      year: 1989,
      description:
        "A framework for achieving personal and professional success through principles of fairness, integrity, and human dignity.",
      image: "https://m.media-amazon.com/images/I/71rmHeQeuRL._AC_UF1000,1000_QL80_.jpg",
    },
  ];
  
  export default books;