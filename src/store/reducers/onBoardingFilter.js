import types from '../types';
import map1 from '../../assets/map1.png';
import map2 from '../../assets/map2.png';
import map3 from '../../assets/map3.png';


const intialState = {
        yourLocation: {
            image: map1,
            yourLocation: [],
            description: 'Enter location to know Time Air Quality Index (AQI)',
            counters: []
        },
        jobLocations: {
            image: map2,
            jobLocation: [],
            description: 'Enter location to know Time Air Quality Index (AQI)',
            counters: []
        },
        skills: {
            image: map3,
            skills: [],
            description: 'Enter your skills to know how many jobs are in this location',
            counters: []
        }
}

const onBoardingFilter = ( state = intialState, action ) => {

    switch(action.type) {
        case types.ADD_YOUR_LOCATION: return {
            ...state,
            yourLocation: action.payload
        }

        case types.ADD_JOB_LOCATIONS: return {
            ...state,
            jobLocations: action.payload
        }

        case types.ADD_SKILLS: return {
            ...state,
            skills: action.payload
        }

        default: return state;
    }
}

export default onBoardingFilter;