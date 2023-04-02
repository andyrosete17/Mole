import { render, screen } from "@testing-library/react";
import { MoleList } from ".";

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe('Mole list component', () => {

    it('should display 12 mole elements', () => {
        render(<MoleList />);
        const images = screen.getAllByRole('img');
        expect(images.length).toBe(12);
    })

    it('should display 11 moles hide and 1 mole active', () => {
        render(<MoleList />);
        const molesHidden = screen.getAllByAltText(/mole-hide/i)
        const moleShow = screen.getByAltText(/mole-show/i)

        expect(molesHidden.length).toBe(11)
        expect(moleShow).toBeDefined()
    })
}) 