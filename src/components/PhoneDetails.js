import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const renderPhone = (phone, index) => (
    <div
        className="align-items-center justify-content-center d-flex"
        style={{ height: '100vh' }}
        key={index}
    >
        <div className="col-md-6">
            <Link
                to="/phones"
                className="btn btn-succes d-flex justify-content-center"
            >
                Back to catalog
            </Link>
            <div className="img-thumbnail row">
                <div className="col-md-4">
                    <img src={phone.image} alt={phone.name} />
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
                    <h4 className="justify-content-end d-flex">
                        $ {phone.price}
                    </h4>
                    <h4>{phone.name}</h4>
                </div>
                <div>
                    <p className="text-center">{phone.description}</p>
                </div>
            </div>
        </div>
    </div>
)

const PhoneDetails = () => {
    const params = useParams()
    const phones = useSelector(state => state.phones)
    return phones.map(
        (phone, index) =>
            index === Number(params.id) && renderPhone(phone, index)
    )
}

export default PhoneDetails
