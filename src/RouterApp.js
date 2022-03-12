import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import ContentLayout from './layouts/ContentLayout/ContentLayout'
import ProductPage from './pages/ProductsPage/ProductPage';

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ContentLayout/>}>
                    <Route index element={<ProductPage/>} />
                    <Route path="detail/:teamId" element={<h1>detalle del producto</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp