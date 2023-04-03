import { render, screen } from "@testing-library/react"
import { LeaderBoard } from "."
import * as redux from 'react-redux'
import { usersResponseMock } from "../../mocks/leaderBoards";


jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe('LeaderBoard component', () => {
    describe('when no records stored', () => {
        it('should display a message', () => {
            const dispatchFn = jest.fn();
            jest.spyOn(redux, 'useDispatch').mockImplementation(() => dispatchFn);

            render(<LeaderBoard />)

            expect(screen.getByText(/Sorry we don't have any record yet. Would you like to be the first./i)).toBeDefined();
        })
    })

    describe('when records stored', () => {
        it('should display a list of records', () => {
            const dispatchFn = jest.fn();
            jest.spyOn(redux, 'useSelector').mockReturnValue(usersResponseMock)
            jest.spyOn(redux, 'useDispatch').mockImplementation(() => dispatchFn);

            render(<LeaderBoard />)

            const items = screen.getAllByRole('listitem');
            expect(items.length).toBeGreaterThan(10);
        })
    })
})

