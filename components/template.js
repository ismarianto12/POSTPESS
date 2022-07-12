import Head from "next/head"
import Sidebar from "./Sidebar"
import Router from 'next/router'
import style from '../styles/sidebar.module.css'
import * as Icon from 'react-feather'
const Template = ({ container }) => {
    const Logout = () => {
        localStorage.removeItem('session')
        localStorage.clear()
        Router.push('/')
    }
    return (<>

        <Head>
            <title>Admin Page</title>
           
        </Head>
        <div>
            <header className="navbar sticky-top  flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#"><Icon.FileMinus /> POint OF SALE</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <a className="nav-link px-3" href="#" onClick={
                            Logout
                        } style={{ 'color': '#fff' }}>Sign out</a>
                    </div>
                </div>
            </header>
            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className={`col-md-3 col-lg-2 d-md-block ${style.sidebar} collapse`}>
                        <Sidebar />
                    </nav>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {container}
                    </main>
                </div>
            </div>
        </div>
    </>)

}

export default Template
