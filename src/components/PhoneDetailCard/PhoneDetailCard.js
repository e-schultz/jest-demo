import React from "react";

function PhoneDetailCard({ phone }) {
  return (
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
  );
}

export default PhoneDetailCard;
