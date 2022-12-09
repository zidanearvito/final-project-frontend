import classes from "./css/Profile.module.css";
import userIcon from "./img/icon_user.png";
import Button from "../UI/Button";

const Profile = () => {
  return (
    <div className="wrapper d-flex justify-content-center position-relative bg-grey">
      <div className={classes.box}>
        <div className={classes.leftBox}>
          <div className={classes.icon}>
            <a href="/">
              <i className="fa fa-arrow-circle-left"></i>
            </a>
          </div>
          <img src={userIcon} alt="Icon" />
          <h5 className={classes.textName}>FULLNAME</h5>
          <p className={classes.textEmail}>Email</p>
        </div>
        <div className={classes.rightBox}>
          <div className={classes.profilTitle}>Profile Settings</div>
          <form className="mt-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Firstname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="firstname"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Lastname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="lastname"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="address"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Phone number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="phone number"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Photos
              </label>
              <input
                type="file"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="phone number"
              />
            </div>
            <div className="text-center mt-5">
              <Button>Save changes</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
