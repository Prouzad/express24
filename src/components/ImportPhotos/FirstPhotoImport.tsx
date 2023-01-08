import first from '../../asstes/firstCarousel/1.jpg'
import second from '../../asstes/firstCarousel/2.jpg'
import th from '../../asstes/firstCarousel/3.jpg'
import four from '../../asstes/firstCarousel/4.jpg'
import five from '../../asstes/firstCarousel/5.jpg'
import six from '../../asstes/firstCarousel/6.jpg'
import seven from '../../asstes/firstCarousel/7.jpg'
import ei from '../../asstes/firstCarousel/8.jpg'
import nine from '../../asstes/firstCarousel/9.jpg'
import ten from '../../asstes/firstCarousel/20.jpg'
import el from '../../asstes/firstCarousel/11.jpg'

const images = [ first, second, th, four, five, six, seven, ei, nine, ten, el]

// eslint-disable-next-line array-callback-return
const imgArray = images.map((item)=>{
	return (
		<div className='items' style={{height: '121px', width: '178px', marginLeft: '25px'}}>
			<img src={item} alt={item} style={{height: '121px', borderRadius: '10px'}} />
		</div>
	)
})

export default imgArray
