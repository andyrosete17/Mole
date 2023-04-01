import styles from './styles.module.css'
import { Mole } from "../mole";
import { useMoleList } from './hooks/useMoleList';

export const MoleList: React.FC = () => {
    const { moleHitHandler, randomMoleValue } = useMoleList();

    return (
        <div className={styles.root}>
            {Array(12).fill('').map((_, i) =>
                <Mole isActive={i === randomMoleValue}
                    key={i}
                    handleClickMole={moleHitHandler} />)}
        </div>
    )
}