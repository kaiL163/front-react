import s from "./Card.module.scss";
import { NavLink } from "react-router-dom";

export const Card = ({ data }) => {

  

  return (
    <NavLink className={s.wrapper} to={'/character/' + data.id}>
      <div className={s.image}>
        <img src = {data.image} className={s.image}/>
      </div>
      <div className={s.textwrapper}>
        <span className = {s.head}>
            <h1 className={s.header}>{data.name}</h1>
            <p className={s.status}>● {data.status}-{data.species}</p>
        </span>
        <p className = {s.location}>
            <p className = {s.text}>Last known location:</p>
            <p>{data.location.name}</p>
        </p>
        <p className = {s.episode}>
            <p className = {s.text}>Fist seen in:</p>
            <p>{data.episode[0].split("/").pop()}</p>
        </p>
      </div>
    </NavLink>
  )
}
