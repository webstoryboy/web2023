import React from 'react';

const introTitle = {
  sub: 'frontend',
  title: (
    <h3>
      프론트앤드
      <br />
      전문과정
    </h3>
  ),
  desc: (
    <p>
      프론트앤드 개발자로 취업하기
      <br /> 위한 전문 과정입니다.
      <br /> 여러분들도 도전해보세요!
    </p>
  ),
};

const introText = [
  {
    iconClass: 'icon-bg1',
    title: 'React.js',
    desc: '리액트는 Facebook에서 개발한 오픈 소스 자바스크립트 라이브러리입니다. 리액트를 사용하면 컴포넌트 기반의 UI 개발을 간편하게 할 수 있습니다. 리액트의 주요 특징은 가상 DOM(Virtual DOM)을 사용하여 성능을 최적화하고, 컴포넌트의 재사용성을 높이는 것입니다',
  },
  {
    iconClass: 'icon-bg2',
    title: 'Vue.js',
    desc: '뷰는 Evan You에 의해 개발된 오픈 소스 자바스크립트 프론트엔드 프레임워크입니다. 리액트와 마찬가지로 컴포넌트 기반의 UI 개발을 지원하며, 가상 DOM을 사용하여 성능을 향상시킵니다',
  },
  {
    iconClass: 'icon-bg3',
    title: 'Next.js',
    desc: '넥스트.js는 리액트 기반의 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(Static Site Generation)을 지원하는 프레임워크입니다. 넥스트.js를 사용하면 서버 측에서 초기 렌더링을 수행하여 초기 로딩 속도를 개선하고, 검색 엔진 최적화(SEO)를 향상시킬 수 있습니다',
  },
  {
    iconClass: 'icon-bg4',
    title: 'Webstandard',
    desc: '웹 표준 코딩은 웹 개발에서 일관된 기술 표준을 준수하여 웹 페이지를 개발하는 것을 말합니다. 이는 웹 페이지의 구조, 디자인 및 기능을 구현하는 데 사용되는 HTML, CSS, JavaScript 등의 웹 기술에 적용됩니다',
  },
];

function IntroDesc({ iconClass, title, desc }) {
  return (
    <div>
      <h4 className={iconClass}>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function IntroSection(props) {
  return (
    <section id="introSection" className={props.attr}>
      <h3 className="blind">프론트앤드 커리큘럼 과정 소개</h3>
      <div className="intro__inner container">
        <div className="intro__title">
          <span>{introTitle.sub}</span>
          <>{introTitle.title}</>
          <>{introTitle.desc}</>
        </div>
        <div className="intro__desc">
          {introText.map((text, index) => (
            <IntroDesc
              key={index}
              iconClass={text.iconClass}
              title={text.title}
              desc={text.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
