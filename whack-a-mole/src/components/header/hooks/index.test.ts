import { act, renderHook } from "@testing-library/react";
import { useHeader } from ".";
import * as redux from 'react-redux'

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe('useHeader hook', () => {

    const dispatchFn = jest.fn();
    beforeEach(() => {
        jest.spyOn(redux, 'useSelector').mockReturnValue(
            true)
        jest.spyOn(redux, 'useDispatch').mockImplementation(() => dispatchFn);
    });

    it('should return true is the game has started', () => {
        const { result } = renderHook(useHeader);

        expect(result.current.isGameActive).toBeTruthy();
    })

    it('should dispatch an action when handleStartGame is triggered', async () => {
        const { result } = renderHook(useHeader);

        act(() => result.current.handleStartGame());

        expect(dispatchFn).toBeCalledWith({ "payload": true, "type": "game/setIsGameActive" });
    })
    it('should dispatch an action when handleResetGame is triggered', async () => {
        const { result } = renderHook(useHeader);

        act(() => result.current.handleResetGame());

        expect(dispatchFn).toBeCalledWith({ "payload": false, "type": "game/setIsGameActive" });
    })
})