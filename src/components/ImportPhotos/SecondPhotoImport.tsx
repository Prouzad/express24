import first from '../../asstes/secondCarousel/1.jpg'
import second from '../../asstes/secondCarousel/2.jpg'
import th from '../../asstes/secondCarousel/3.jpg'
import four from '../../asstes/secondCarousel/4.jpg'
import five from '../../asstes/secondCarousel/5.jpg'
import six from '../../asstes/secondCarousel/6.jpg'
import seven from '../../asstes/secondCarousel/7.jpg'
import ei from '../../asstes/secondCarousel/8.jpg'


const images = [ 
	{img: first, title: 'The Loaf', category: 'Продукты'}, 
	{img: second, title: 'The Mart', category: 'Продукты'}, 
	{img: th, title: 'Аптека OXYmed ЦУМ', category: 'Здоровые'}, 
	{img: four, title: 'Touch Of Matcha', category: 'Здоровые'}, 
	{img: five, title: 'TESTO - полуфабрикаты', category: 'Продукты'}, 
	{img: six, title: 'Zooplaneta', category: 'Зоотовары'}, 
	{img: seven, title: 'Organic Food', category: 'Здоровые'}, 
	{img: ei, title: 'AROMA PARFUM', category: 'Красота'}, 
	]

// eslint-disable-next-line array-callback-return
const imgArray = images.map((item)=>{
	return (
		<div className='SecondItems' style={{height: '121px', width: '178px', marginLeft: '25px'}}>
			<img src={item.img} alt={item.title} style={{height: '110px', borderRadius: '10px'}} />
			<div className='titleItems'>{item.title}</div>
			<p>{item.category}</p>
		</div>
	)
})

export default imgArray
