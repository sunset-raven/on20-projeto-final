import styles from '../styles/components/header.module.css'
import { ApplicationRoutes } from "../ApplicationRoutes"
import App from '../App'
import Hamburger from './Menu'
// import Hamburger from "./Menu"


export function Header() {

    return (
        <div className={styles.headerContainer}>
        <Hamburger />
        </div>
    )
}