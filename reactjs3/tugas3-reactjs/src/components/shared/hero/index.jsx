export default function Hero() {
    return (
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Temukan Buku Favoritmu Yang Kamu Inginkan
            </h1>
            <p className="lead">
              Jelajahi ribuan koleksi buku menarik dari berbagai genre. Mulai dari
              fiksi, edukasi, hingga pengembangan diri — semua bisa kamu beli atau
              sewa dengan mudah dan cepat.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Jelajahi Buku
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Cara Kerja
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLRWzsb4clDglczfr8Z1jCWVJy0Vi8tNGZ-uvcmHrjhZkvUB4l2Q&s=10&ec=72940544"
              alt="Tumpukan Buku"
              width="720"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>
        </div>
      </div>
    );
  }