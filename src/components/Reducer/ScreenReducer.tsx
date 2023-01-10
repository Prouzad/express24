import {createStore} from 'redux'

const defaultState = {
	width: window.innerWidth
}

const reducer  = (state: {width: number} = defaultState, action: {type: string, payload: number}) =>{
		switch(action.type){
			case "Change_width":
				return {...state, width: window.innerWidth}

			default: 
				return state
		}
}

const store = createStore(reducer)

export default store
