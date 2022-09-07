import { useEffect } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { React } from 'react'


const _ToyApp = (props) => {

    useEffect(() => {
        console.log('toy app is up')
    }, [])

    return (
        <div className='toy-app'>
            Hello from toy app!
        </div>
    )
}


const mapStateToProps = state => {

    // return {
    // }
}

const mapDispatchToProps = {
}

export const ToyApp = connect(mapStateToProps, mapDispatchToProps)(_ToyApp)
