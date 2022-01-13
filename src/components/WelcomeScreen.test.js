import { render } from '@testing-library/react'
import WelcomeScreen from './WelcomeScreen'

describe('WelcomeScreen should render correctly', () => {
    it.skip('should match snapshot', () => {
        const { container } = render(<WelcomeScreen />)
        expect(container.firstChild).toMatchSnapshot()
    })
})
