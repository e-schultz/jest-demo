import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import WelcomeScreen from './components/WelcomeScreen'
import reducer from './store/reducer'
import PhonesList from './components/PhonesList'
import PhoneDetails from './components/PhoneDetails'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<WelcomeScreen />} />
                <Route path="/phones" exact element={<PhonesList />} />
                <Route path={'/phones/:id'} element={<PhoneDetails />} />
                <Route render={() => <h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
