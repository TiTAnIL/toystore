import { Route, Routes } from 'react-router-dom';
import { React } from 'react'

import './assets/css/global.css'
import { AppHeader } from './cmps/app-header';
import { About } from './views/about';
import { ToyApp } from './views/toy-app';
import { Home } from './views/home';


function App() {


    return (
        <div className="main-app">
            <AppHeader />
            <main className='container'>
                <Routes>
                    <Route path='about' element={<About />} ></Route>
                    <Route path='toyapp' element={<ToyApp />} />
                    <Route path='' element={<Home />} />
                </Routes>
            </main>
            <footer>
                <section className='container'>
                    ToyStories 2022 &copy;
                </section>
            </footer>
        </div>
    );
}

export default App;
