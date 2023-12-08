import React from "react";
import './styles.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function Contato() {
  return (
    <>
      <Header />
      <div className="contato">
      <div className="descricao">
        <h1>Reserve Seu Ingresso</h1>
        <p>Complete as informações</p>
      </div>

      <form class="sec-form" action="./comentarios.html">
        <div class="informacoes">
          <label for="nome" id="nome">Nome:</label>
          <input style={{ display: 'block' }} id="nome" name="nome" placeholder="digite seu nome" />
          <label for="email" id="email">Email:</label>
          <input style={{ display: 'block' }} id="email" name="email" placeholder="coloque um email valido" />
          <label for="number" id="number">Quantidade de Ingressos</label>
          <input style={{ display: 'block' }} id="number" type="number" name="number" />
          <label for="date" id="date">Data</label>
          <input style={{ display: 'block;' }} id="date" type="date" name="date" />

          <label for="text" id="text">Observaçôes</label>
          <textarea style={{ display: 'block' }} name="mensagem" id="mensagem" rows="10"></textarea>

          <button class="button">Reservar Ingresso</button>
        </div>  
      </form>
      </div>
      <Footer/>

    </>
  )
}

export default Contato;