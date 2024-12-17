import s from "./Paginator.module.scss"

export const Paginator = ({onClick}) => {
    return(
        <div className = {s.wrapper}>
            <button className={s.wrapper} onClick={onClick}></button>
            <button className={s.wrapper} onClick={setPage(prev => prev - 1)}></button>
        </div>
    )
}