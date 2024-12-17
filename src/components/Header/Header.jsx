import { NavLink } from "react-router-dom"
import s from "./Header.module.scss"

export const Header = ({}) => {
    return(
        <div className = {s.wrapper}>
            <img src = "./img/icons/icon.png" className = {s.icon} to="/"/>
            <NavLink className = {s.home}>
                Home
            </NavLink>
            <NavLink className = {s.about}>
                About
            </NavLink>
        </div>
    )
}