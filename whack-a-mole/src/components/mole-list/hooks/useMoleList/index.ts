import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPoints } from "../../../../data/slices";
import { gameDefaults } from "../../../../constants";

export const useMoleList = () => {
    const dispatch = useDispatch();
    const [randomMoleValue, setRandomMoleValue] = useState(0)

    const randomMole = () =>
        Math.floor(Math.random() * 12)

    const moleHitHandler = useCallback(() => {
        const value = randomMole()
        setRandomMoleValue(value);
        dispatch(addPoints());
    }, [dispatch])

    useEffect(() => {
        const interval = setInterval(() => {
            setRandomMoleValue(randomMole())
        }, gameDefaults.moleTime);

        return () => clearInterval(interval);
    }, [randomMoleValue]);

    return { moleHitHandler, randomMoleValue }
}