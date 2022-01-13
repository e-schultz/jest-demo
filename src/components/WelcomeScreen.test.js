import WelcomeScreen from './WelcomeScreen'

import { renderWithStore } from '../utils/renderWithStore.utils'

const initialState = {
    phones: [],
}

describe('WelcomeScreen should render correctly', () => {
    it('should match snapshot', () => {
        const { container } = renderWithStore(<WelcomeScreen />, {
            initialState,
        })
        expect(container.firstChild).toMatchSnapshot()
    })
})
