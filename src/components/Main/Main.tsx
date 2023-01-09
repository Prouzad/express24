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
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { grey } from '@mui/material/colors';

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
					<FormControl sx={{ m: 1, minWidth: 120, background: '#ebebf1', border: 'none', borderRadius: '14px' }} size="small">
						<InputLabel id="demo-simple-select-label" sx={{color: 'black' }}>Ещё</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label="Ещё"
							sx={{boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }}}
						>
						<div className={style.selec}>
							{category.map((item, idx)=>{
								return <MenuItem sx={{width: '256px', padding: '15px'}} value={item} key={idx}>{item}</MenuItem>
							})}
						 </div>
						</Select>
      </FormControl>
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
