import moleHide from '../../assets/WAM_Hole.png';
import moleShow from '../../assets/WAM_Mole.png';
import styles from './styles.module.css'

interface IMoleProps {
    isActive: boolean;
    handleClickMole?: () => void
}

export const Mole: React.FC<IMoleProps> = ({ isActive, handleClickMole }) => {

    return (<div className={styles.root}>
        {isActive ?
            <img src={moleShow} alt="mole-show" onClick={handleClickMole} /> :
            <img src={moleHide} alt="mole-hide" />
        }
    </div>)
}