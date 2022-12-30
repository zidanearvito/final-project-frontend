import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "../css/Wishlist.module.css";
import arrow from "../img/arrow.png";
import LoadData from "../../../UI/LoadData";
import ModalConfirm from "../../../UI/ModalConfirm";
import {
  deleteWishlist,
  getWishlist,
} from "../../../../store/actions/wishlist";
import { hideLoader, showLoader } from "../../../../store/actions/loader";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.wishlistReducer);
//   console.log(data);

  const [modal, setModal] = useState(false);
  const [id, setId] = useState();
//   console.log(id)

  useEffect(() => {
    dispatch(showLoader());
    dispatch(getWishlist());
    dispatch(hideLoader());
  }, [dispatch]);

  const deleteWish = async (id) => {
    await dispatch(deleteWishlist(id));
    setModal(false);
    dispatch(showLoader());
    dispatch(getWishlist());
  };

  const showModal = () => {
    setModal(true);
  };

  const modalHandle = () => {
    setModal(false);
  };

  return (
    <>
      {modal && (
        <ModalConfirm onClick={() => deleteWish(id)} onConfirm={modalHandle} />
      )}
      {loading && (
        <div className={classes.loading}>
          <LoadData />{" "}
        </div>
      )}
      <div className={classes.margin}>
        {data.data?.map((wish) => (
          <div className={classes.card} key={wish.id}>
            <div className={classes.title}>
              <p>{wish.ticket.airplaneId}</p>
              <p>{wish.ticket.class}</p>
            </div>
            <div className={classes.content}>
              <div className="row mx-2 mt-4">
                <div className="col-1">
                  <div className={classes.logo}>
                    {/* <img src={ticket.airplane.company.companyImage} alt="Logo" /> */}
                  </div>
                </div>
                <div className="col-3">
                  <p className="mb-1">{wish.ticket.flightFrom}</p>
                  <h5 className="mb-1">
                    {wish.ticket.departureDate.split("T")[0]}
                  </h5>
                  <p>{wish.ticket.departureTime}</p>
                </div>
                <div className="col-2">
                  <div className={classes.arrow}>
                    <img src={arrow} alt="" />
                  </div>
                </div>
                <div className="col-3">
                  <p className="mb-1">{wish.ticket.flightTo}</p>
                  <h5 className="mb-1">
                    {wish.ticket.arrivalDate.split("T")[0]}
                  </h5>
                  <p>{wish.ticket.arrivalTime}</p>
                </div>
                <div className="col-3">
                  <h5 className="mb-1">
                    Rp. {new Intl.NumberFormat().format(wish.ticket.price)}{" "}
                    <span className="badge bg-secondary">/org</span>
                  </h5>
                  <button
                    className="btn rent"
                    onClick={() => showModal(setId(wish.id))}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Wishlist;
