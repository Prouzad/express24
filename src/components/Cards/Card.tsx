import ICards from '../../interfaces/interface';
import style from './Cards.module.css'
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';

function Cards(props: {item: ICards}) {
  return (
    <div className={style.cardBox}>
			<div className={style.imgBox}>
				<img src={props.item.img} alt={props.item.title} />
				<div className={style.logo}>
					<img src={props.item.logo} alt={props.item.title} />
				</div>
			</div>
			<div className={style.infoBox}>
				<div className={style.titleBox}>
					<div className={style.title}>
						{props.item.title}
					</div>
					<div className={style.category}>
						{props.item.category?.join(' · ')}
					</div>
				</div>
				<div className={style.bottomBox}>
					<div className={style.stars}>
						<StarBorderPurple500OutlinedIcon style={{fontSize: '14px'}}/>{ props!.item.stars!}
					</div>
					<div className={style.delivery}>
					<DirectionsCarFilledOutlinedIcon style={{fontSize: '16px'}}/> {props!.item.delivery! + ` сум`}
					</div>
				</div>
				<div className={style.wish}></div>
			</div>
    </div>
  );
}

export default Cards;
