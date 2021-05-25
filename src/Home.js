import React from 'react'
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img 
            className="home__img"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="" />
            </div>
        <div className="home__row">
            {/*product*/}
            <Product 
            id="121"
            title="Rich Dad Poor Dad"
            price={100}
            rating={5}
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBskXvZvdmJcCWTvE84JlzQgI6oxlbSzvSgg&usqp=CAU" />  
                
            {/*product*/}
            <Product 
            id="121"
            title="Rich Dad Poor Dad"
            price={100}
            rating={5}
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBskXvZvdmJcCWTvE84JlzQgI6oxlbSzvSgg&usqp=CAU" /> 
        </div>
        <div className="home__row">
            {/*product*/}
            <Product 
            id="121"
            title="Rich Dad Poor Dad"
            price={100}
            rating={5}
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBskXvZvdmJcCWTvE84JlzQgI6oxlbSzvSgg&usqp=CAU" /> 
            {/*product*/}
            <Product 
            id="121"
            title="Rich Dad Poor Dad"
            price={100}
            rating={5}
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBskXvZvdmJcCWTvE84JlzQgI6oxlbSzvSgg&usqp=CAU" /> 
             {/*product*/}
             <Product 
            id="121"
            title="Rich Dad Poor Dad"
            price={100}
            rating={5}
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBskXvZvdmJcCWTvE84JlzQgI6oxlbSzvSgg&usqp=CAU" /> 
        </div>
        <div className="home__row">
            {/*product*/}
             <Product 
            id="121"
            title="Rich Dad Poor Dad"
            price={100}
            rating={5}
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBskXvZvdmJcCWTvE84JlzQgI6oxlbSzvSgg&usqp=CAU" /> 
           
        </div>
            
        </div>
    );
}

export default Home
