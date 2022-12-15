import React, { useState, useEffect, useLayoutEffect } from "react";
import classes from "./css/Profile.module.css";
import userIcon from "./img/icon_user.png";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import { updateProfile, getUser } from "../../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.authReducer.dataUser);
  const email = localStorage.getItem("email");
  const [firstName, setfisrtName] = useState("");
  const [lastName, setlastName] = useState("");
  const [gender, setGender] = useState("gender");
  const [address, setaddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [response, setResponse] = useState(false);
  const [responseMessage, setResponseMessage] = useState("Success");

  const history = useNavigate();

  useLayoutEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  useEffect(() => {
    setfisrtName(data.firstName);
    setlastName(data.lastName);
    setGender(data.gender);
    setaddress(data.address);
    setPhoneNumber(data.phoneNumber);
    setAvatar(data.avatar);
  }, [data]);

  const handleFirstName = (event) => {
    setfisrtName(event.target.value);
  };

  const handleLastName = (event) => {
    setlastName(event.target.value);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handleAddress = (event) => {
    setaddress(event.target.value);
  };

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const modalHandler = () => {
    window.location.reload();
  };

  const updateForm = async (event) => {
    event.preventDefault();

    const form = {
      firstName,
      lastName,
      gender,
      address,
      phoneNumber,
      image: avatar,
    };
    const formData = new FormData();

    for (const key in form) {
      formData.append(key, form[key]);
    }

    const res = await dispatch(updateProfile(formData, history))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    // console.log(res.response);

    if (res.response) {
      setResponse(true);
      setResponseMessage(res.response.data.message);
    }
  };

  return (
    <div className="wrapper d-flex justify-content-center position-relative bg-grey">
      {response && (
        <Modal
          title={responseMessage}
          message={responseMessage}
          onConfirm={modalHandler}
        />
      )}
      <div className={classes.box}>
        <div className={classes.leftBox}>
          <div className={classes.icon}>
            <a href="/">
              <i className="fa fa-arrow-circle-left"></i>
            </a>
          </div>
          {!avatar ? (
            <img src={userIcon} alt="Icon" />
          ) : (
            <img src={data.avatar} alt="Icon" />
          )}
          <h5 className={classes.textName}>
            {firstName} {lastName}
          </h5>
          <p className={classes.textEmail}>{email}</p>
        </div>
        <div className={classes.rightBox}>
          <div className={classes.profilTitle}>Profile Settings</div>
          <form onSubmit={updateForm} encType="multipart/form" className="mt-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Firstname
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={handleFirstName}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="firstname"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Lastname
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={handleLastName}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="lastname"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Gender
              </label>
              <select
                defaultValue={gender}
                onChange={handleGender}
                className="form-select form-select-md mb-3"
                aria-label=".form-select-lg example"
              >
                <option> Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Address
              </label>
              <input
                value={address}
                onChange={handleAddress}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="address"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone number
              </label>
              <input
                value={phoneNumber}
                onChange={handlePhoneNumber}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="phone number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Photos
              </label>
              <input
                onChange={(e) => setAvatar(e.target.files[0])}
                type="file"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="phone number"
              />
            </div>
            <div className="text-center mt-3">
              <Button type="submit">Save changes</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
