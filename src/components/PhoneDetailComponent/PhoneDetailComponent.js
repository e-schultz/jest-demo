import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";

const renderPhone = (phone, index) => (
  <div key={index}>
    <div className="jumbotron justify-content-center d-flex">
      <div className="col-md-6">
        <Link
          to="/phones"
          className="btn btn-succes d-flex justify-content-center"
        >
          Back to catalog
        </Link>
        <div className="img-thumbnail row" data-testid={`phone-id-${phone.id}`}>
          <div className="col-md-4">
            <img src={phone.image} alt={phone.name} className="img-thumbnail" />
          </div>
          <div className="col-md-8">
            <ul>
              <li>CPU:{phone.cpu}</li>
              <li>CAMERA:{phone.camera}</li>
              <li>SIZE:{phone.size}</li>
              <li>WEIGHT:{phone.weight}</li>
              <li>DISPLAY:{phone.display}</li>
              <li>BATTERY:{phone.battery}</li>
              <li>MEMORY:{phone.memory}</li>
            </ul>
          </div>
          <div className="caption col-md-12">
            <h4 className="justify-content-end d-flex">$ {phone.price}</h4>
            <h4>{phone.name}</h4>
          </div>
          <div>
            <p className="text-center">{phone.description}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PhoneDetailComponent = ({ phones }) => {
  const params = useParams();
  return (
    <div>
      <div className="row">
        {phones.map((phone, index) => {
          console.log("hi", typeof phone.id, typeof params.id);
          return Number(phone.id) === Number(params.id)
            ? renderPhone(phone, index)
            : "";
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("StateToProps", state);
  return { phones: state.phones };
};

export default connect(mapStateToProps)(PhoneDetailComponent);
