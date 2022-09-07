
// import { React } from 'react'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

const initialState = {
    ideas: null,
}

function myReducer(state = initialState, action) {
    var ideas;
    switch (action.type) {
        case 'ADD_IDEA':
            ideas = [...state.ideas, action.idea]
            return { ...state, ideas }
        case 'REMOVE_IDEA':
            ideas = state.ideas.filter(idea => idea._id !== action.ideaId)
            return { ...state, ideas }
        case 'SET_IDEAS':
            return { ...state, ideas: action.ideas }
        case 'UPDATE_IDEA':
            ideas = state.ideas.map(currIdea => (currIdea._id === action.idea._id) ? action.idea : currIdea)
            return {...state, ideas}
        case 'MARK':
            ideas = state.ideas.map(currIdea => (currIdea._id === action.idea._id) ? action.idea : currIdea)
            return {...state, ideas}
        default:
            return state
    }
}

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    
export const store = createStore(myReducer,
    composeEnhancers(applyMiddleware(thunk)))

// For debug only!
store.subscribe(() => {
    console.log('Store state is:', store.getState())
})
