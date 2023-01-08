import style from './Button.module.css'

function MyButton(props: {title: string}) {
  return (
    <div className={style.btnBox}>
			{props.title}
    </div>
  );
}

export default MyButton;
