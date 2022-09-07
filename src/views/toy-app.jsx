import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
import { React } from 'react'
import { useSelector } from 'react-redux'
import { loadToys, removeToy } from '../store/actions/toy.action'
import LoadingScreen from "react-loading-screen"
import { ToyList } from '../cmps/toy-list'


export const ToyApp = (props) => {

    const {toys} = useSelector(state => state.toyModule)
    const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch(loadToys())
    }, [])

    const onRemoveToy = (toyId) => {
        dispatch(removeToy(toyId))
    }

    if (!toys) return <LoadingScreen
        loading={true}
        bgColor="rgba(255,255,255,0.5)"
        spinnerColor="#4850b9"
        textColor="#676767"
        logoSrc=""
        text="Plenty of our toys will be ready in a moment!"
    >
        {" "}
    </LoadingScreen>
    return (
        <div className='toy-app'>
            <ToyList toys={toys} onRemoveToy={onRemoveToy}></ToyList>
        </div>
    )
}
