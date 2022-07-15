import React from 'react';
import IMG1 from '../../assets/koku.png';
import IMG2 from '../../assets/snakexenzia.png';
import IMG3 from '../../assets/stopwatch.png';
import IMG4 from '../../assets/ngetik.png';
import IMG5 from '../../assets/wikipedia.png';
import IMG6 from '../../assets/math.png';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Ko.Ku',
      img: IMG1,
      github: 'https://github.com/LaodeGhazy/Ko.Ku.ResponsiveWeb',
    },
    {
      id: 2,
      title: 'GameNgetik',
      img: IMG4,
      github: 'https://github.com/LaodeGhazy/GameNgetik',
    },
    {
      id: 3,
      title: 'SnakeXenzia',
      img: IMG2,
      link: 'https://meri-mg.github.io/To-Do-List/dist/',
      github: 'https://github.com/LaodeGhazy/SnakeXenziaKW',
    },
    {
      id: 4,
      title: 'Stopwatch',
      img: IMG3,
      link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
      github: 'https://github.com/LaodeGhazy/Stopwatch',
    },
    {
      id: 5,
      title: 'Wikipedia (Javascript)',
      img: IMG5,
      link: 'https://meri-mg.github.io/Unilab-world-news/',
      github: 'https://github.com/LaodeGhazy/HTML-JavaScriptWikipedia',
    },
    {
      id: 6,
      title: 'Big Project From College',
      img: IMG6,
      link: 'https://lukinoo.github.io/math-resource/',
      github: 'https://github.com/LaodeGhazy/CPMKPABW2',
    },
  ];
  

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          <h3>{pro.title}</h3>
          <div className="portfolio__item-cta">
            <a href={pro.github} className="btn">GitHub</a>
          </div>
        </article>
        ))}   
      </div>
    </section>
  )
}

export default Portfolio