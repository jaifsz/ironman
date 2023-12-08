import React from "react";
import './style.css'
import Header from "../../components/header/header";
import Chris from ".//..//../assets/chris.png";
import Ryan from ".//..//../assets/ryan.png";
import Tom from ".//..//../assets/Tom.png";
import Footer from "../../components/footer/footer";


function Comentarios() {
    return (
            <>
            <Header />
                <h1 class="title">Comentarios dos espectadores</h1>
                <div class="contain">
                    <div class="contain-coments">
                        <div class="pessoa">
                            <img id="Ryan" src={Ryan} alt="Ryan Reynolds"/>
                                <h5 class="name">Ryan Reynolds</h5>
                        </div>
                        <p class="date">4.9</p>
                        <p class="coments">Muito bom o filme, Amo a parte que o Elon musk aparece</p>
                    </div>

                    <div class="contain-coments">
                        <div class="pessoa">
                            <img id="Chris" src={Chris} alt="Chris" />
                                <h5 class="name">Chris Evans</h5>
                        </div>
                        
                        <p class="date">4.8</p>
                        <p class="coments">Baita filme, valeu cada centavo, destaque pra atuação do Robert, como sempre impecável</p>
                    </div>

                    <div class="contain-coments">
                        <div class="pessoa">
                            <img id="Tom" src={Tom} alt="Tom" />
                                <h5 class="name">Tom Holland</h5>
                        </div>
                        <p class="date">4.9</p>
                        <p class="coments">Amei o filme, Tony Stark tem um senso de humor muito grande,  gosto bastante disso, curioso pra saber mais sobre essa iniciativa vingadores</p>
                    </div>
                </div>
                <Footer/>
                </>
            )
}

export default Comentarios

