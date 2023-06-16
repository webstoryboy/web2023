import React from 'react';

const portTitle = {
  title: '포트폴리오 소개',
  desc: '웹디자이너, 웹 퍼블리셔, 프론트앤드 포트폴리오입니다',
};

const portText = [
  {
    portImg: './assets/images/portfolio/portfolio01.jpg',
    iconImg: './assets/images/portfolio/portfolioIcon01.png',
    title: '김현정 포트폴리오',
    desc: '프론트앤드 개발자 포트폴리오',
  },
  {
    portImg: './assets/images/portfolio/portfolio02.jpg',
    iconImg: './assets/images/portfolio/portfolioIcon02.png',
    title: '김현정 포트폴리오',
    desc: '프론트앤드 개발자 포트폴리오',
  },
  {
    portImg: './assets/images/portfolio/portfolio03.jpg',
    iconImg: './assets/images/portfolio/portfolioIcon03.png',
    title: '김현정 포트폴리오',
    desc: '프론트앤드 개발자 포트폴리오',
  },
  {
    portImg: './assets/images/portfolio/portfolio04.jpg',
    iconImg: './assets/images/portfolio/portfolioIcon04.png',
    title: '김현정 포트폴리오',
    desc: '프론트앤드 개발자 포트폴리오',
  },
  {
    portImg: './assets/images/portfolio/portfolio05.jpg',
    iconImg: './assets/images/portfolio/portfolioIcon05.png',
    title: '김현정 포트폴리오',
    desc: '프론트앤드 개발자 포트폴리오',
  },
  {
    portImg: './assets/images/portfolio/portfolio06.jpg',
    iconImg: './assets/images/portfolio/portfolioIcon06.png',
    title: '김현정 포트폴리오',
    desc: '프론트앤드 개발자 포트폴리오',
  },
];

function PortDesc({ portImg, iconImg, title, desc }) {
  return (
    <div className="port">
      <figure className="port__header">
        <img src={portImg} alt={title} />
      </figure>
      <div className="port__body">
        <div className="pic">
          <img src={iconImg} alt={title} />
        </div>
        <div className="title">
          <h4>{title}</h4>
          <span>{desc}</span>
        </div>
      </div>
    </div>
  );
}

function PortSection(props) {
  return (
    <section id="portSection" className={props.attr}>
      <h3>{portTitle.title}</h3>
      <p>{portTitle.desc}</p>
      <div className="port__inner container">
        <div className="port__btn">
          <ul>
            <li className="active">
              <a href="/">21기</a>
            </li>
            <li>
              <a href="/">22기</a>
            </li>
            <li>
              <a href="/">23기</a>
            </li>
            <li>
              <a href="/">24기</a>
            </li>
          </ul>
        </div>
        <div className="port__cont">
          {portText.map((text, index) => (
            <PortDesc
              key={index}
              portImg={text.portImg}
              iconImg={text.iconImg}
              title={text.title}
              desc={text.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortSection;
