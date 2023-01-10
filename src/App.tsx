import './App.css';
import Header from './components/Header/Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useDispatch } from 'react-redux/es/exports';

function App() {
	const dispatch = useDispatch()

	window.addEventListener(`resize`, event => {
		dispatch({
			type: 'Change_width'
		})
	}, false);
	
  return (
    <div className="App">
     	<Header/>
			<Main/>
			<Footer/>
    </div>
  );
}

export default App;
