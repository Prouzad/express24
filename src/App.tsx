import './App.css';
import Carousels from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import ImageArray from './components/PhotoImport'


function App() {
	console.log(ImageArray)
  return (
    <div className="App">
     	<Header/>
			<div className='bodyBox'>
				<Carousels items={ImageArray}/>
			</div>
    </div>
  );
}

export default App;
