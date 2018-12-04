import styles from 'styled-components';
import css from '../../constants-css';

export const Header = styles.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    background-color: ${css.mainColor};   
`;