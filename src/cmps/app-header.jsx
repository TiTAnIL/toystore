import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { React } from 'react'

function _AppHeader({ loggedInUser }) {

return (
    <header className='app-header'>
            <h1 className='logo'>toyz!</h1>
        <section className='container'>
            <nav className='nav-container'>
                <NavLink to='/' ><button className="button-73" >Home</button></NavLink>
                <NavLink to='/toyapp' ><button className="button-73" >Toys</button></NavLink>
                <NavLink to='/about'><button className="button-73" >About</button></NavLink>
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
