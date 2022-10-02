import React from "react";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Datas from "./displayInfo";

const Register = () => {
  const [selectedFile, setSelectedFile] = useState(0);
  const [submitInfo, setSubmitInfo] = useState({
    Ename: "",
    Hname: "",
    Sdate: "",
    Edate: "",
    Ephoto: "",
  });
  const navigate = useNavigate();
  const HandleChange = (event) => {
    setSubmitInfo({ ...submitInfo, [event.target.name]: event.target.value });
    // console.log(submitInfo);
  };
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(submitInfo);
    // <Datas userValue={submitInfo} />;
    navigate("/data", { user: submitInfo });
  };
  return (
    <div className="">
      <div className="d-block mx-auto w-25 mt-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group my-4">
            <span for="exampleInputEmail1">Event Name</span>
            <input
              type="text"
              value={submitInfo.Ename}
              name="Ename"
              onChange={HandleChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Event Name"
            />
            <small id="emailHelp" className="form-text text-muted">
              Your Event Name is save with us
            </small>
          </div>
          <div className="form-group my-4">
            <label for="exampleInputPassword1">Host Name</label>
            <input
              type="text"
              value={submitInfo.Hname}
              name="Hname"
              onChange={HandleChange}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Insert your Host name"
            />
          </div>
          <div className="form-group my-4">
            <label for="exampleInputPassword1">Start Date</label>
            <input
              type="date"
              value={submitInfo.Sdate}
              onChange={HandleChange}
              name="Sdate"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group my-4">
            <label for="exampleInputPassword1">End Date</label>
            <input
              type="date"
              value={submitInfo.Edate}
              name="Edate"
              onChange={HandleChange}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group my-4">
            <label for="exampleInputPassword1">Location</label>
            <input
              type="text"
              value={submitInfo.Location}
              name="Location"
              className="form-control"
              onChange={HandleChange}
              id="exampleInputPassword1"
              placeholder="Insert your Location"
            />
          </div>
          <div className="form-group my-4">
            <label for="exampleInputPassword1">Event Photo</label>
            <input
              type="file"
              value={submitInfo.Ephoto}
              name="Ephoto"
              onChange={changeHandler}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Insert your Host name"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
