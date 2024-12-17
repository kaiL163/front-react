import s from './Button.module.scss'

export const Button = ({label, onClick}) => {

	return (
		<button className={s.wrapper} onClick={onClick}>
			{label}
		</button>
	)
}