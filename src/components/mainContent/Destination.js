import React from "react";
import OwlCarousel from "react-owl-carousel";
import left from "./img/left.png";
import right from "./img/right.png";
import ampera from "./img/ampera.jpg";
import monas from "./img/monas.jpg";
import jam_gadang from "./img/jam_gadang.jpg";

const Destination = () => {
  return (
    <section className="container-fluid bg-grey" id="destination">
      <div className="row">
        <div className="col-12 text-center mt-5">
          <h1 className="mb-1">Destination</h1>
          <p>Berbagai destinasi wisata yang wajib anda kunjungi</p>
        </div>
      </div>
      <OwlCarousel
        className="owl-theme"
        loop
        nav
        center
        dots={false}
        margin={false}
        navText={[
          `<img src=${left} width='32px' height='32px'>`,
          `<img src=${right} width='32px' height='32px'>`,
        ]}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 2,
          },
        }}>
        <div className="card-body p-2 mx-3">
          <img
            src={ampera}
            width="600px"
            height="400px"
            className="rounded-4"
            alt="Jembatan Ampera"
          />
          <div className="text-center mt-2">
            <strong>Palembang</strong>
            <p>1200 Akomodasi</p>
          </div>
        </div>
        <div className="card-body p-2 mx-3">
          <img
            src={monas}
            width="600px"
            height="400px"
            className="rounded-4"
            alt="Monas"
          />
          <div className="text-center mt-2">
            <strong>Jakarta</strong>
            <p>1500 Akomodasi</p>
          </div>
        </div>
        <div className="card-body p-2 mx-3">
          <img
            src={jam_gadang}
            width="600px"
            height="400px"
            className="rounded-4"
            alt="Jam Gadang"
          />
          <div className="text-center mt-2">
            <strong>Bukittinggi</strong>
            <p>100 Akomodasi</p>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
};

export default Destination;
