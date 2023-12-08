import React from "react";
import Header from '../../components/header/header';
import './styles.css';
import Video from '../../assets/video.mp4'
import Cards from "../../components/cards";
import Footer from "../../components/footer/footer";



function Home(){
    return(
        <>
            <Header />
            <div id="banner"></div>
            <div id="trailer-container">
                <div className="content">
                    <video controls className="trailer">
                        <source src={Video} />
                        Seu Navegador não possui suporte para vídeos
                    </video>
                    <div id="sinopse">
                        <p className="description">
                            
                    Em um mundo ciente da existência do Homem de Ferro, o inventor bilionário Tony Stark sofre pressão de todos os lados para compartilhar sua tecnologia com as forças armadas. Ele resiste para divulgar os segredos de sua inigualável armadura, com medo de que estas informações caiam nas mãos erradas. Com a bela Pepper Potts e o amigo "Rhodey" Rhodes ao seu lado, Tony precisa forjar novas alianças e confrontar um inimigo poderoso.
                        </p>
                        <button className="button1">Comprar Ingresso</button>
                    </div>
                </div>
            </div>
            <Cards />
            <Footer/>
        
        </>
    )
}

export default Home;