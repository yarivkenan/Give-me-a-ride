export const ADD_RIDE = 'ADD_RIDE'
export const ADD_PLACE = 'ADD_PLACE'

export function addRide(ride) {
	return { type: ADD_RIDE, ride }
}

export function addPlace(place) {
	return { type: ADD_PLACE, place }
}