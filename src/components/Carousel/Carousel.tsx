import { useSelector } from 'react-redux';
import style from './Carousel.module.css'
import Slider from "react-slick";
import { useEffect, useState } from 'react';


function Carousels(props: {items: JSX.Element[]}) {
	const state = useSelector((state: {width: number}) => state.width)
	const [sliderState, setState] = useState(6)

	useEffect(()=>{
		console.log(sliderState, state)
		const width = Number(state)
		if(width < 600) return setState(2)
		if(width < 800) return setState(3)
		if(width < 1100) return setState(4)
		setState(6)
	}, [state])

	

  const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: sliderState,
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
