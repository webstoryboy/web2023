import React from 'react';
import Main from '../layout/Main';

import SliderSection from '../section/SliderSection';
import IntroSection from '../section/IntroSection';
import MemberSection from '../section/MemberSection';
import PortSection from '../section/PortSection';
import YoutubeSection from '../section/YoutubeSection';
import UnsplashSection from '../section/UnsplashSection';
import MovieSection from '../section/MovieSection';

function Home() {
  return (
    <>
      <Main>
        <SliderSection attr={'slider__wrap section gmarket5'} />
        <IntroSection attr={'intro__wrap section bg-blue gmarket5'} />
        <MemberSection attr={'members__wrap section center gmarket5'} />
        <PortSection attr={'ports__wrap section center bg-blue gmarket5'} />
        <YoutubeSection attr={'youtube__wrap section gmarket5'} />
        <UnsplashSection attr={'unsplash__wrap section bg-blue gmarket5'} />
        <MovieSection attr={'movie__wrap section gmarket5'} />
      </Main>
    </>
  );
}

export default Home;
