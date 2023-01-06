import SearchIcon from '@mui/icons-material/Search';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import style from './Header.module.css';
import logo from '../../asstes/logo/Express24.png'
import { grey } from '@mui/material/colors';

function Header() {
  return (
    <div className={style.headerBox}>
			<div className={style.leftBox}>
				<div className={style.logo}>
					<a href='https://express24.uz/'>
						<img src={logo} alt="logo" />
					</a>
				</div>
				<div className={style.searchBox}>
					<form>
						<SearchIcon sx={{color: grey[500]}}/>
						<input type={'text'} placeholder='Заведение, блюдо, товар или кухня'/>
						<button>Найти</button>
					</form>
				</div>
				<div className={style.locationBox}>
					<div className={style.location}>
						<PlaceOutlinedIcon sx={{color: grey[700]}}/>
						Сергели район, Содикжон Толипов
					</div>
				</div>
			</div>
			<div className={style.rightBox}>
				<AccountBoxOutlinedIcon sx={{color: grey[500]}}/>
				Профиль
			</div>
    </div>
  );
}

export default Header;
