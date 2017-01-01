import {ADD_RIDE, ADD_PLACE} from './actions'

const initialState = {
    rides : [
      {
        name: "Yosrie",
        from: "Tira",
        at: "9:30AM"
      },
      {
        name: "Ram",
        from: "Tel-Aviv",
        at: "9:00AM"
      },
      {
        name: "Galz",
        from: "Ramat Ha'Shron",
        at: "8:30AM"
      },
    ],
    places: [
    {
    	lat: 32.1294723,
    	lng: 34.8354542,
    	text: 'Galz'
    },
    {
    	lat: 32.0733063,
    	lng: 34.7852014,
    	text: 'Ram'
    },
    {
    	lat: 32.219627, 
    	lng: 34.9615163,
    	text: 'Yosrie'
    }]
}

export default function ridesApp(state = initialState, action) {
	switch(action.type) { 
		case ADD_RIDE:
			return {
				rides :[...state.rides, action.ride],
				places: state.places
			}
		case ADD_PLACE:
			return {
				rides : state.rides,
				places: [...state.places, action.place]
			}
		default:
			return state
	}
}