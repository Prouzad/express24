import style from './Footer.module.css'
import facebook from '../../asstes/logo/facebook.png'
import telegram from '../../asstes/logo/telegram.png'
import instagram from '../../asstes/logo/instagram.png'
function Footer() {
  return (
    <div className={style.footer}>
			<div className={style.footerContainer}>
				<div className={style.navBox}>
					<div className={style.navs}>О нас</div>
					<div className={style.navs}>Контакты</div>
					<div className={style.navs}>Пользовательское соглашение</div>
				</div>
				<div className={style.bottomBox}>
					<div className={style.contacts}>
						Служба поддержки: +998 71 200 40 01
					</div>
					<div className={style.social}>
						<div className={style.socials}>
							<img src={instagram} alt='instagram' />
						</div>
						<div className={style.socials}>
							<img src={facebook} alt="facebook" />
						</div>
						<div className={style.socials}>
							<img src={telegram} alt="telegram" />
						</div>
						<div className={style.text}>
						&copy; 2023 Express24
						</div>
					</div>
				</div>
			</div>
    </div>
  );
}

export default Footer;
