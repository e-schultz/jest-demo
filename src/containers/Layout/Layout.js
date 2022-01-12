import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from '@emotion/styled'

import * as actionTypes from '../../store/actions'
import Spinner from '../../components/UI/Spinner/Spinner'

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

class Layout extends Component {
    state = {
        disabled: false,
        fetchedPhones: [],
        loading: false,
    }

    componentDidMount() {
        this.setState({
            loading: true,
        })
        axios
            .get('//www.mocky.io/v2/5918bc6b120000701040dbec')
            .then(response => {
                this.setState({
                    fetchedPhones: response.data.phones,
                    loading: false,
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        console.log('this.state.fetchedPhones', this.state.fetchedPhones)
        console.log('this.props.phones', this.props.phones)
        return (
            <StyledApp className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <StyledHeader>
                            <StyledTitle>Welcome to Phone Catalog</StyledTitle>
                        </StyledHeader>
                    </div>
                    <div className="col-md-12 text-center">
                        <Link
                            onClick={() =>
                                this.props.onRenderPhones(
                                    this.state.fetchedPhones
                                )
                            }
                            to="/phones"
                            className="btn btn-primary"
                            style={
                                this.state.loading
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
                    {this.state.loading ? <Spinner /> : null}
                </div>
            </StyledApp>
        )
    }
}

const mapStateToProps = state => {
    return { phones: state }
}

const mapDispatchToProps = dispatch => {
    return {
        onRenderPhones: phones =>
            dispatch({
                type: actionTypes.ADD_PHONES,
                payload: phones,
            }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
