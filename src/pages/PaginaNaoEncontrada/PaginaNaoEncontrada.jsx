import React from 'react';
import Button from '../../components/Button/Button.jsx';
import style from './PaginaNaoEncontrada.module.css';

const PaginaNaoEncontrada = () => {
  return (
    <main className="main">
      <section className={style.hero}>
        <div className="container">
          <h1 className="display display--medium">Página não encontrada</h1>
          <p className={style.hero__description}>A página que você está procurando não existe.</p>
          <Button variant="orange" href="/">Voltar para a página inicial</Button>
        </div>
      </section>
    </main>
  );
};

export default PaginaNaoEncontrada;
