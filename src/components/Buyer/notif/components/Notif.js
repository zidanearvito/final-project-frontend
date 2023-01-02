import React, { useEffect } from "react";
import classes from "../css/Notif.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getNotif } from "../../../../store/actions/notif";
import { hideLoader, showLoader } from "../../../../store/actions/loader";
import LoadData from "../../../UI/LoadData";

const Notif = () => {
  const dispatch = useDispatch();
  const { notif, loading } = useSelector((state) => state.notifReducer);
//   console.log(loading);
  useEffect(() => {
    dispatch(showLoader());
    dispatch(getNotif());
    dispatch(hideLoader());
  }, [dispatch]);
  return (
    <>
      {loading && (
        <div className="margin pt-5">
          <LoadData />
        </div>
      )}
      <div className={classes.container}>
        {notif.data?.map((notif) => (
          <div className="alert alert-secondary text-center" key={notif.id} role="alert">
            <h2>{notif.message}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Notif;
