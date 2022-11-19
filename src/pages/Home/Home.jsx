import React from 'react';
import style from './Home.module.css';
import SearchForm from '../../components/SearchForm/SearchForm';

const Home = () => {
  return (
    <main>
      <section className={style.hero}>
        <div className={`${style.heroContainer} container`}>
          <div className={style.heroContent}>
            <h1 className="visually-hidden">Descubra onde descatar lixos eletrônicos em Sorocaba</h1>
            <h2 className={`${style.heroTitle} display`}>
              Use e recicle, <br /> Não desperdice!
            </h2>
          </div>
          <div className={style.heroForm}>
            <SearchForm />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cupiditate, accusamus iusto voluptates ipsum accusantium animi, placeat dolorum sint officia odit excepturi commodi maxime velit, quisquam veniam sunt quo praesentium optio aliquid asperiores consequatur atque voluptatum
          deleniti. Molestiae omnis nulla mollitia maiores culpa voluptatem commodi ducimus in vero, dicta quibusdam explicabo, veniam officiis! Cumque assumenda placeat repellendus vitae aliquam in officiis consectetur vel perspiciatis sequi eaque error possimus, ducimus, rem fuga dolore, ab
          delectus incidunt. Eaque, labore ea! Ex amet vero quis est reprehenderit ratione minima unde ab voluptas blanditiis laborum, voluptatibus, excepturi atque facere dignissimos enim quae quasi similique.
        </div>
      </section>
    </main>
  );
};

export default Home;
