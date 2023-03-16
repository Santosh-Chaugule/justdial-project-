//1.import area

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Details from './pages/Details'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './Style.css'

//2.Defination Area
export default function App() {
    //2.1. Hooks area



    //2.2.Function defination area



    //2.3.Return statement
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path='details' element={<Details />}></Route>
                    <Route path='login' element={<Login />}></Route>
                    <Route path='register' element={<Register />}></Route>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

//3.Export area