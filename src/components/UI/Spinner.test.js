import { render } from '@testing-library/react'
import Spinner from './Spinner'

describe('Spinner should render correctly', () => {
    it('should match snapshot', () => {
        const { container } = render(<Spinner />)
        expect(container.firstChild).toMatchSnapshot()
    })
})
