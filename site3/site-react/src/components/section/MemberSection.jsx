import React from 'react';

import { Link } from 'react-router-dom';

const memberTitle = {
  title: '멥버 소개',
  desc: '웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자 멤버를 소개합니다.',
};
const memberText = [
  {
    img: './assets/images/member/memberPic01.jpg',
    title: '웹쓰 24기',
    link: '포폴보기',
  },
  {
    img: './assets/images/member/memberPic02.jpg',
    title: '웹쓰 23기',
    link: '포폴보기',
  },
  {
    img: './assets/images/member/memberPic03.jpg',
    title: '웹쓰 22기',
    link: '포폴보기',
  },
];

function MemberDesc({ img, title, link }) {
  return (
    <div className="member">
      <figure className="member__header">
        <img src={img} alt={title} />
      </figure>
      <div className="member__body">
        <h4>{title}</h4>
        <Link to="/member" className="btn">
          {link}
        </Link>
      </div>
    </div>
  );
}

function MemberSection(props) {
  return (
    <section id="memberSection" className={props.attr}>
      <h3>{memberTitle.title}</h3>
      <p>{memberTitle.desc}</p>

      <div className="member__inner container">
        {memberText.map((text, index) => (
          <MemberDesc
            key={index}
            img={text.img}
            title={text.title}
            link={text.link}
          />
        ))}
      </div>
    </section>
  );
}

export default MemberSection;
