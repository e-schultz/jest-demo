import WelcomeScreen from './WelcomeScreen'
import { renderHelper } from '../utils/renderHelper.utils'

const initialState = {
    phones: [],
}

jest.mock('axios', () => ({
    get: () => Promise.reject(),
}))

describe('WelcomeScreen should render correctly', () => {
    it('should match snapshot', () => {
        const { container } = renderHelper(<WelcomeScreen />, {
            initialState,
        })
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render Spinner if data is not fetch yet', () => {
        const { getByText } = renderHelper(<WelcomeScreen />, {
            initialState,
        })
        expect(getByText(/loading.../i)).toBeTruthy()
    })
})
