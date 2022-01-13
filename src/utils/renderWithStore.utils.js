import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render as rtlRender } from '@testing-library/react'
import reducer from '../store/reducer'

// you can provide initialState or the entire store that the ui is rendered with
export const renderWithStore = (
    ui,
    {
        initialState,
        store = createStore(reducer, initialState),
        ...renderOptions
    } = {}
) => {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
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
