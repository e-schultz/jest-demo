import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from '@emotion/styled'

import * as actionTypes from '../store/actions'
import Spinner from './Spinner'

const StyledApp = styled.div`
    text-align: center;
`

const StyledHeader = styled.div`
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
`

const StyledTitle = styled.h1`
    font-size: 1.5em;
`

const WelcomeScreen = () => {
    const [fetchedPhones, setFetchedPhones] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        setLoading(true)
        axios
            .get('//www.mocky.io/v2/5918bc6b120000701040dbec')
            .then(response => {
                setFetchedPhones(response.data.phones)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <StyledApp
            className="container d-flex align-items-center justify-content-center"
            style={{ height: '100vh' }}
        >
            <div className="row">
                <div className="col-md-12 text-center">
                    <StyledHeader>
                        <StyledTitle>Welcome to Phone Catalog</StyledTitle>
                    </StyledHeader>
                </div>
                <div className="col-md-12 text-center">
                    <Link
                        onClick={() =>
                            dispatch({
                                type: actionTypes.ADD_PHONES,
                                payload: fetchedPhones,
                            })
                        }
                        to="/phones"
                        className="btn btn-primary"
                        style={
                            loading
                                ? {
                                      pointerEvents: 'none',
                                      cursor: 'not-allowed',
                                      opacity: '0.2',
                                  }
                                : {
                                      pointerEvents: 'all',
                                      cursor: 'pointer',
                                      opacity: '1',
                                  }
                        }
                    >
                        Go to catalog
                    </Link>
                </div>
                {loading && <Spinner />}
            </div>
        </StyledApp>
    )
}

export default WelcomeScreen
