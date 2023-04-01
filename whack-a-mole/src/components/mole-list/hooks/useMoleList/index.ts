import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPoints } from "../../../../data/slices";

const timeToHide = process.env.REACT_APP_TIME_HIDE_MEDIUM as string;

export const useMoleList = () => {
    const dispatch = useDispatch();
    const [randomMoleValue, setRandomMoleValue] = useState(0)

    const randomMole = () =>
        Math.floor(Math.random() * 12)

    const moleHitHandler = useCallback(() => {
        const value = randomMole()
        setRandomMoleValue(value);
        dispatch(addPoints());
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setRandomMoleValue(randomMole())
        }, parseInt(timeToHide) ?? 2000);

        return () => clearInterval(interval);
    }, [randomMoleValue]);

    return { moleHitHandler, randomMoleValue }
}