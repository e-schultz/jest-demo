import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PhoneDetailCard from "../PhoneDetailCard/PhoneDetailCard";
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
        <PhoneDetailCard phone={phone} />
      </div>
    </div>
  </div>
);

const PhoneDetailComponent = ({ phones }) => {
  const params = useParams();
  const phone = phones.find((phone) => Number(phone.id) === Number(params.id));
  return (
    <div>
      <div className="row">{phone ? renderPhone(phone) : null}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { phones: state.phones };
};

export default connect(mapStateToProps)(PhoneDetailComponent);
