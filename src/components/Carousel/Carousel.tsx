import style from './Carousel.module.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
	0: {
		items: 5,
	},
	1024: {
			items: 3,
			itemsFit: 'contain',
	}
}


function Carousel(props: {items: JSX.Element[]}) {
  return (
    <div className={style.carousel}>
			<AliceCarousel disableDotsControls items={props.items} />
    </div>
  );
}

export default Carousel;
