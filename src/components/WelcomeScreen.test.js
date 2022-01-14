import WelcomeScreen from './WelcomeScreen'

import { renderHelper } from '../utils/renderHelper.utils'

const initialState = {
    phones: [],
}

describe('WelcomeScreen should render correctly', () => {
    it('should match snapshot', () => {
        const { container } = renderHelper(<WelcomeScreen />, {
            initialState,
        })
        expect(container.firstChild).toMatchSnapshot()
    })
})
