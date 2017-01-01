import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import rideApp from './reducers'
import { Provider } from 'react-redux'
import reactCSS from 'reactcss'
import { createEpicMiddleware } from 'redux-observable';
import {ADD_RIDE, addPlace} from './actions'
import 'rxjs'
import { Observable } from 'rxjs/Observable';
import geolocator from 'geolocator'


const styles = reactCSS({
  'default': {
    container: {
      display: 'flex',
      height: '100%',
      background: 'linear-gradient(to left, #A1FFCE , #FAFFD1)'

    },
    sideBar: {
      alignContent: 'space-around',
      flexDirection: 'column',
      justifyContent: 'space-around',
      flexShrink: 0,
      margin: '20px',
      flexBasis: '300px'
    },
  },
})

geolocator.config({
        language: "en",
        google: {
            version: "3",
            key: "GoogleApiKey"
        }
    });

const epicMiddleware = createEpicMiddleware(
		action$ =>
		  action$.ofType(ADD_RIDE)
		    .mergeMap(
		    	action =>  	Observable.create(function (observer) {
		    					geolocator.geocode(action.ride.from, function (err, location) {
							      	if(!err) observer.next({
							      		lat: location.coords.latitude,
							      		lng: location.coords.longitude,
							      		text: action.ride.name
							      	});
							      	else observer.error(err);
								})}).map((place) => addPlace(place)))
	)


const rootReducer = combineReducers({ rideApp });

const store = createStore(rideApp, applyMiddleware(epicMiddleware))

ReactDOM.render(
	<Provider store={store}>
	  <App  containerStyle={styles.container} sideBarStyle={styles.sideBar}/>
	</Provider>,
  document.getElementById('root')
);
