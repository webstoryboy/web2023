import React from 'react';

import { Link } from 'react-router-dom';

const movieTitle = {
  title: '코딩 영화 추천',
  desc: (
    <p>
      더 다양한 강의는 유튜브를 통해 제공하고 있습니다.
      <br />
      구독과 좋아요! 부탁드립니다.
    </p>
  ),
};

const movieSrc = [
  {
    img: './assets/images/movie/movie01.jpg',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/movie/movie02.jpg',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/movie/movie03.jpg',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/movie/movie04.jpg',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/movie/movie05.jpg',
    title: '코딩 애플',
    num: 'dkelkt442',
  },
];

function MovieItem({ img, title }) {
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  );
}

function MovieSection(props) {
  return (
    <section id="movieSection" className={props.attr}>
      <div className="movie__inner container">
        <div className="movie__text">
          <h3>{movieTitle.title}</h3>
          <>{movieTitle.desc}</>
          <Link to="/" className="button-green">
            자세히 보기
          </Link>
        </div>
        <div className="movie__item">
          {movieSrc.map((src, index) => (
            <MovieItem key={index} img={src.img} title={src.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovieSection;
