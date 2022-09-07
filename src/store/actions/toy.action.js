import { toyService } from "../../services/toy.service";

export function loadToys() {
    return (dispatch, getState) => {
        toyService.query()
            .then(toys => {
                dispatch({ type: 'SET_TOYS', toys })
            })
            .catch(err => {
                console.log('error:', err)
            })
    }
}

export function removeToy(toyId) {
    return (dispatch, getState) => {
        toyService.remove(toyId)
            .then(() => {
                dispatch({ type: 'REMOVE_TOY', toyId })
            })
            .catch(err => {
                console.log('err:', err)
            })
    }
}

