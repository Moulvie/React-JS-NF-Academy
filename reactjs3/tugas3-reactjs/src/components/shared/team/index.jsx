export default function Team() {
    return (
      <>
        <section id="team" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4 fw-bold">Memperkenalkan Team Kami</h2>
            <p className="text-center mb-5 text-muted">
              Di balik layar, kami adalah tim yang penuh semangat, beragam
              keahlian, dan satu tujuan: menciptakan solusi terbaik untukmu.
            </p>
  
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {/* Card 1 */}
              <div className="col">
                <div className="card h-100 text-center shadow-sm border-0">
                  <img
                    src="https://scontent.fcgk3-3.fna.fbcdn.net/v/t39.30808-1/467021228_594143943275038_2438284091704369309_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE0jg699zJH4ylEmUIR2kwcK9CS17O3a_Ir0JLXs7dr8vEDciL1TdIE_JLp0ez1ZnCwNbox39ZynxwJT31chj6m&_nc_ohc=xnniAQ3hnNYQ7kNvwEeFi2y&_nc_oc=AdnijQJl600rVjKZh72x3bi1l3s2CqaWY0sz8ZbfBXbjUdpLSoQBqjgIeArtmFuM5mUYFdVEtTuykhqVDApRUlw9&_nc_zt=24&_nc_ht=scontent.fcgk3-3.fna&_nc_gid=PsPrHSmj5bETa9nwWf82tg&oh=00_AfGku6eRFdTFp5n5eCXHkxVwwvkZwIyTdP_U-1csoNDgwg&oe=68142204"
                    className="rounded-circle mx-auto mt-4"
                    alt="Rizky Maulana"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">Rizky Maulana</h5>
                    <p className="card-text text-muted">Frontend Developer</p>
                    <p className="small">
                      Pecinta Design and Frontend Development.
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
                    src="https://scontent.fcgk3-3.fna.fbcdn.net/v/t39.30808-6/489241345_644773708382748_6274659501080332822_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE9o485LACrHCH7jZpTTzbmUjsKqNwTDCRSOwqo3BMMJE3p4z83kmhl4SBmWXxr1e3qndDBJCujE2Vc5ac321RL&_nc_ohc=cmnoFrdI3PgQ7kNvwER-B8g&_nc_oc=AdnYkczpbdXPbRZSOwrE0ulAVVdVZh9L4Lz6IacLCXoYAff_xFh2oJ_i-uQqqywV-4OpyIESaKNNlk86mE8W7x5G&_nc_zt=23&_nc_ht=scontent.fcgk3-3.fna&_nc_gid=5RMh7RY-_br9rAEwu_04rg&oh=00_AfExHlpHCvfZ3W-iclb3_znAYTpFGxJxCidhG6AHMwZctQ&oe=68141608"
                    className="rounded-circle mx-auto mt-4"
                    alt="Muhammad Imam Najib"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">Muhammad Imam Najib</h5>
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
                    src="https://scontent.fcgk3-4.fna.fbcdn.net/v/t39.30808-1/481771640_2597860927091731_92580203988816586_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHhyAvrjSnyqHOMzV2l9ClqeH3uXIOnQqN4fe5cg6dCozUDktJ_Y4qaPNcDp9lGTOr6LwrWXztF5oK_5mllOMBp&_nc_ohc=Tb6hZHyYBbgQ7kNvwGR5FYk&_nc_oc=AdnpUPSuOOGcfMfnEQ2UTlspPZjhtWbJSfabjlsFqW_fsZa43vKshdheFXiefG9uB756VDAh_UjmR6Vim-0rr23T&_nc_zt=24&_nc_ht=scontent.fcgk3-4.fna&_nc_gid=0uD7lTImMmoyzCgslQmKIw&oh=00_AfFSLpHwObbp8ovLa_fk07RLqnxFV16XGSEoJjiAqVv0_A&oe=68140A18"
                    className="rounded-circle mx-auto mt-4"
                    alt="Fadel Amili"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">Fadel Amili</h5>
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