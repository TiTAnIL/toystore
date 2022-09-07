import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { React } from 'react'

function _AppHeader({ loggedInUser }) {

return (
    <header className='app-header'>
        <section className='container'>
            <h1 className="logo">toyz!</h1>
            <nav>
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/toyapp' >Toys</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
        </section>
    </header>
)
}


const mapStateToProps = state => {
    return {
    }
}

export const AppHeader = connect(mapStateToProps)(_AppHeader)