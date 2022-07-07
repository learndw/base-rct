import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Header = React.lazy(() => import('../components/pages/Header'));
const Login = React.lazy(() => import('../components/auth/Login'));
const Home = React.lazy(() => import('../components/pages/Home'));
const About = React.lazy(() => import('../components/pages/About'));
const Service = React.lazy(() => import('../components/pages/Service'));
const ServiceRequest = React.lazy(() => import('../components/pages/ServiceRequest'));
const ShowArticles = React.lazy(() => import('../components/pages/articles/ShowArticles'));
const ShowArticle = React.lazy(() => import('../components/pages/articles/ShowArticle'));
const CreateArticle = React.lazy(() => import('../components/pages/articles/CreateArticle'));
const EditArticle = React.lazy(() => import('../components/pages/articles/EditArticle'));
const Contact = React.lazy(() => import('../components/pages/Contact'));
const Portfolio = React.lazy(() => import('../components/pages/Portfolio'));
//import Header from "../components/pages/Header";
export class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path='/login' element={<React.Suspense fallback="loading.."> <Login /> </React.Suspense>} />
                    <Route exact path='/' element={<React.Suspense fallback="loading.."> <Home /> </React.Suspense>} />
                    <Route exact path='/our-team' element={<React.Suspense fallback="loading.."> <About /> </React.Suspense>} />
                    <Route exact path='/service' element={<React.Suspense fallback="loading.."> <Service /> </React.Suspense>} />
                    <Route exact path='/request-new-service' element={<React.Suspense fallback="loading.."> <ServiceRequest /> </React.Suspense>} />
                    <Route exact path='/news-and-advices' element={<React.Suspense fallback="loading.."> <ShowArticles /> </React.Suspense>} />
                    <Route exact path='/article/:id' element={<React.Suspense fallback="loading.."> <ShowArticle /> </React.Suspense>} />
                    <Route exact path='/article/create' element={<React.Suspense fallback="loading.."> <CreateArticle /> </React.Suspense>} />
                    <Route exact path='/article/:id/edit' element={<React.Suspense fallback="loading.."> <EditArticle /> </React.Suspense>} />
                    <Route exact path='/contact-1' element={<React.Suspense fallback="loading.."> <Contact /> </React.Suspense>} />
                    <Route exact path='/portfolio' element={<React.Suspense fallback="loading.."> <Portfolio /> </React.Suspense>} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router