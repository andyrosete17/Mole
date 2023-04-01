import { renderHook } from "@testing-library/react"
import { useMoleList } from "."
import { act } from "react-dom/test-utils";
import { useState as useStateMock } from 'react'
import * as redux from 'react-redux'

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}))

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe('useMoleList custom hook', () => {
    const dispatchFn = jest.fn();
    const useStateFn = jest.fn();
    beforeEach(() => {
        jest.useFakeTimers();
        (useStateMock as jest.Mock).mockImplementation(init => [init, useStateFn])
        jest.spyOn(redux, 'useDispatch').mockImplementation(() => dispatchFn);

    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    it('should return random number between 0-11 when calling randomMole generator', () => {
        const { result } = renderHook(() => useMoleList())

        const value = result.current.randomMoleValue;
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(11);
    })

    it('should change randomMoleValue after some time', async () => {
        renderHook(() => useMoleList())
        expect(useStateFn).toBeCalledTimes(0)

        jest.advanceTimersByTime(2000);
        expect(useStateFn).toBeCalledTimes(2)
    })

    it('should set a new randomMoleValue when triggering moleHitHandler', async () => {
        const { result } = renderHook(() => useMoleList())

        act(() => {
            result.current.moleHitHandler();
        })

        expect(useStateFn).toBeCalled()
    })

    it('should dispatch an action when hit mole', () => {
        const { result } = renderHook(() => useMoleList())

        act(() => {
            result.current.moleHitHandler();
        })

        expect(dispatchFn).toBeCalledWith({ "type": "game/addPoints" });
    })

})