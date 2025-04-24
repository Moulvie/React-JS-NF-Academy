export default function Team() {
    return (
      <>
        <section id="team" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4 fw-bold">Kenalan dengan Tim Kami</h2>
            <p className="text-center mb-5 text-muted">
              Di balik layar, kami adalah tim yang penuh semangat, beragam
              keahlian, dan satu tujuan: menciptakan solusi terbaik untukmu.
            </p>
  
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {/* Card 1 */}
              <div className="col">
                <div className="card h-100 text-center shadow-sm border-0">
                  <img
                    src="https://i.pinimg.com/736x/3d/07/8c/3d078c4b317d55fde720379d25cdd0e9.jpg"
                    className="rounded-circle mx-auto mt-4"
                    alt="Raka Saputra"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">Raka Saputra</h5>
                    <p className="card-text text-muted">Frontend Developer</p>
                    <p className="small">
                      Pecinta React dan desain pixel-perfect.
                    </p>
                    <div>
                      <a href="#" className="text-secondary mx-2">
                        <i className="bi bi-github"></i>
                      </a>
                      <a href="#" className="text-primary mx-2">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Card 2 */}
              <div className="col">
                <div className="card h-100 text-center shadow-sm border-0">
                  <img
                    src="https://i.pinimg.com/736x/06/ad/5e/06ad5e43ed9b9f239ac3e887d4f4e64a.jpg"
                    className="rounded-circle mx-auto mt-4"
                    alt="Salsa Amelia"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">Salsa Amelia</h5>
                    <p className="card-text text-muted">UI/UX Designer</p>
                    <p className="small">
                      Ahli dalam menciptakan antarmuka ramah pengguna.
                    </p>
                    <div>
                      <a href="#" className="text-secondary mx-2">
                        <i className="bi bi-github"></i>
                      </a>
                      <a href="#" className="text-primary mx-2">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Card 3 */}
              <div className="col">
                <div className="card h-100 text-center shadow-sm border-0">
                  <img
                    src="https://i.pinimg.com/736x/c3/64/6d/c3646d3d6d5a2cfa56feb70c736e19a3.jpg"
                    className="rounded-circle mx-auto mt-4"
                    alt="Dimas Arya"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">Dimas Arya</h5>
                    <p className="card-text text-muted">Backend Developer</p>
                    <p className="small">
                      Spesialis API dan arsitektur data yang scalable.
                    </p>
                    <div>
                      <a href="#" className="text-secondary mx-2">
                        <i className="bi bi-github"></i>
                      </a>
                      <a href="#" className="text-primary mx-2">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }