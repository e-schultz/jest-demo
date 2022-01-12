import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Layout from './containers/Layout/Layout'
import reducer from './store/reducer'
import PhoneListContainer from './containers/PhoneListContainer/PhoneListContainer'
import PhoneDetailComponent from './components/PhoneDetailComponent/PhoneDetailComponent'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Layout />} />
                <Route path="/phones" exact element={<PhoneListContainer />} />
                <Route
                    path={'/phones/:id'}
                    element={<PhoneDetailComponent />}
                />
                <Route render={() => <h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
