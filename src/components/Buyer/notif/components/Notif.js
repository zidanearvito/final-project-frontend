import React, { useEffect } from "react";
import classes from "../css/Notif.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteNotif, getNotif } from "../../../../store/actions/notif";
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

  const deleteNotifById = async (id) => {
    await dispatch(deleteNotif(id))
    dispatch(showLoader())
    dispatch(getNotif())
  }
  return (
    <>
      {loading && (
        <div className="margin pt-5">
          <LoadData />
        </div>
      )}
      <div className={classes.container}>
        {notif.data?.map((notif) => (
          <div
            className="alert alert-secondary text-center"
            key={notif.id}
            role="alert"
          >
            <p>{notif.message}</p>
            <button
              type="submit"
              onClick={() => deleteNotifById(notif.id)}
              className="btn btn-notif float-end"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Notif;
