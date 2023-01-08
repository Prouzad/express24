import style from './Main.module.css'
import Carousels from '../Carousel/Carousel';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ImageArray from '../ImportPhotos/FirstPhotoImport'
import SecondImageArray from '../ImportPhotos/SecondPhotoImport'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MyButton from '../Button/Button';
import Data from '../Data';
import Cards from '../Cards/Card';

const category = [
	'Избранные',
	'Uzcard',
	'Новинки',
	'Базары',
	'Fast Food',
	'Национальная',
	'Азиатская',
	'Кофейня'
]


function Main() {
  return (
    <div className={style.Main}>
			<div className={style.bodyBox}>
				<Carousels items={ImageArray}/>
				<div className={style.SecondBoxTitle}>
					<h2>Магазины</h2>
					<div className={style.shoAllBtn}>
						Показать все <NavigateNextIcon/>
					</div>
				</div>
				<Carousels items={SecondImageArray}/>
				<div className={style.title}>
					<h2>Рестораны</h2>
				</div>
				<div className={style.btnsBox}>
					<div className={style.btns}>
						{category.map((item, idx)=>{
							return(
								<>
									<MyButton title={item}/>
								</>
							)
						})}
					</div>
					<MyButton title={`Eщё ${"\u2304"}`}/>
				</div>
				<div className={style.cardsBox}>
					{Data.map((item, idx)=>{
						return <Cards item={item}/>
					})}
				</div>
			</div>
    </div>
  );
}

export default Main;
