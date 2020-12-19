import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Card from './Card';
import Footer from './Footer';

function Home() {
    return (
        <section className="home_container">
            <div className="home_top">
                <div className="clip animate__animated animate__fadeInRight"></div>
                <h2 className="home_top_title animate__animated animate__fadeIn">Hello <span>i'm Eliott</span></h2>
            </div>
            <section className="card_container">
                <Card icon={<i className="fas fa-database"></i>} link="/api" title="API" text='He looked at the sand. Picking up a handful, he wondered how many grains were in his hand. Hundreds of thousands? "Not enough," the said under his breath. I need more.'></Card>
                <Card icon={<i className="fas fa-code"></i>} link="/code" title="Algo / Code" text='He looked at the sand. Picking up a handful, he wondered how many grains were in his hand. Hundreds of thousands? "Not enough," the said under his breath. I need more.'></Card>
                <Card icon={<i className="fas fa-user"></i>} link="/cv" title="Mon CV" text='He looked at the sand. Picking up a handful, he wondered how many grains were in his hand. Hundreds of thousands? "Not enough," the said under his breath. I need more.'></Card>
                <Card icon={<i className="fas fa-flag"></i>} link="/reporting" title="Reporting" text='He looked at the sand. Picking up a handful, he wondered how many grains were in his hand. Hundreds of thousands? "Not enough," the said under his breath. I need more.'></Card>
                <Card icon={<i className="fas fa-address-card"></i>} link="/contact" title="Contact" text='He looked at the sand. Picking up a handful, he wondered how many grains were in his hand. Hundreds of thousands? "Not enough," the said under his breath. I need more.'></Card>
            </section>
            <Footer></Footer>
        </section>
    )
}

export default Home