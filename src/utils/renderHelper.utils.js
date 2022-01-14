import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { render as rtlRender } from '@testing-library/react'
import reducer from '../store/reducer'

// you can provide initialState or the entire store that the ui is rendered with
export const renderHelper = (
    ui,
    {
        initialState,
        store = createStore(reducer, initialState),
        ...renderOptions
    } = {}
) => {
    function Wrapper({ children }) {
        return (
            // MemoryRouter enables us to test Routes
            <MemoryRouter>
                <Provider store={store}>{children}</Provider>
            </MemoryRouter>
        )
    }
    return {
        ...rtlRender(ui, {
            wrapper: Wrapper,
            ...renderOptions,
        }),
        // adding `store` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        store,
    }
}
