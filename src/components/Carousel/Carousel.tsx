import style from './Carousel.module.css'
import Slider from "react-slick";


function Carousels(props: {items: JSX.Element[]}) {
  const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1
	};
	return (
		<div className={style.carouselBox}>
			<Slider {...settings}>
				{props.items}
			</Slider>
		</div>
	);
}

export default Carousels;
