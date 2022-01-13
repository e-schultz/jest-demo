import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const PhonesList = () => {
    const phones = useSelector(state => state.phones)
    return (
        <div className="container">
            <div className="row">
                {phones.map((phone, index) => {
                    return (
                        <div className="col-md-4" key={index}>
                            <div className="img-thumbnail" key={index}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <img
                                            src={phone.image}
                                            alt={phone.name}
                                        />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="justify-content-end d-flex">
                                        ${phone.price}
                                    </h4>
                                    <h4>{phone.name}</h4>
                                    <p className="text-left">
                                        {phone.description}
                                    </p>
                                    <Link
                                        to={`/phones/${index}`}
                                        className="btn btn-info"
                                    >
                                        More...
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PhonesList
