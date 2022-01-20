import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PhoneDetailCard from "../PhoneDetailCard/PhoneDetailCard";
const renderPhone = (phone, props) => (
  <div key={phone.id}>
    <div className="jumbotron justify-content-center d-flex">
      <div className="col-md-6">
        <Link
          to="/phones"
          className="btn btn-succes d-flex justify-content-center"
          data-testid="back-to-phones"
        >
          Back to catalog
        </Link>
        <PhoneDetailCard phone={phone} {...props} />
      </div>
    </div>
  </div>
);

const PhoneDetailComponent = ({ phones, ...props }) => {
  const params = useParams();
  console.log("parms", params);
  const phone = phones.find((phone) => Number(phone.id) === Number(params.id));
  return (
    <div>
      <div className="row">{phone ? renderPhone(phone, props) : null}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { phones: state.phones };
};

export default connect(mapStateToProps)(PhoneDetailComponent);
