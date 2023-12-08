import React from "react";
import './styles.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function Fotos() {
    return (
        <>
            <Header />
            <fieldset>
                <h1>Galeria de Imagens</h1>
            </fieldset>
            <div className="actor-cards-container">
                <div className="cards-content">
                    <div class="card banner-1"></div>
                    <div class="card banner-2"></div>
                    <div class="card banner-3"></div>
                    <div class="card banner-4"></div>
                    <div class="card banner-5"></div>
                    <div class="card banner-6"></div>
                </div>
            </div>
            <Footer/>


        </>
    )
}

export default Fotos;