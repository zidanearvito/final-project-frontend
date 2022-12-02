import complete from "./img/complete.png";
import money from "./img/money.png";
import hour from "./img/24hour.png";
import professional from "./img/professional.png";

const WhyUs = () => {
  return (
    <section className="container bg-grey" id="whyUs">
      <div className="row">
        <div className="col-12 text-center mt-5">
          <h1 className="mb-1 text-bold">Why Us?</h1>
          <p className="mid">Mengapa Harus Pilih Lef.id ?</p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-3">
          <div className="card border-0 bg-grey">
            <div className="card-body px-4">
              <blockquote className="blockquote mb-0">
                <img
                  src={complete}
                  width="100px"
                  fill="currentColor"
                  className=""
                  alt="icon_complete"
                />
                <h5 className="mt-3">Pesawat Lengkap</h5>
                <p className="mt-3">
                  Tersedia banyak pilihan maskapai yang membantu perjalanan anda
                  jadi mudah
                </p>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card border-0 bg-grey">
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <img
                  src={money}
                  width="100px"
                  fill="currentColor"
                  className="bi bi-1-circle"
                  alt="icon_price"
                />
                <h5 className="mt-3">Harga Murah</h5>
                <p className="mt-3">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  e-ticket lain
                </p>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card border-0 bg-grey">
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <img
                  src={hour}
                  width="100px"
                  fill="currentColor"
                  className="bi bi-1-circle"
                  alt="icon_24hrs"
                />
                <h5 className="mt-3">Layanan 24 Jam</h5>
                <p className="mt-3">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card border-0 bg-grey">
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <img
                  src={professional}
                  width="100px"
                  fill="currentColor"
                  className="bi bi-1-circle"
                  alt="icon_professional"
                />
                <h5 className="mt-3">Pelayanan Profesional</h5>
                <p className="mt-3">
                  Pelayanan yang profesional, berpengalaman, jujur, ramah dan
                  selalu tepat waktu
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
