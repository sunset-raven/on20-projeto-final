import styles from '../styles/components/header.module.css'
import Hamburger from './Menu'

export function Header() {

    return (
        <div className={styles.headerContainer}>
        <Hamburger />
        </div>
    )
}