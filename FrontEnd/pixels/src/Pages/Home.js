import React from 'react';

// =============> Components <============
import Header from '../Components/Header/Header';
import Features from '../Components/HomePageComponents/Features/Features';
import Sponsors from '../Components/HomePageComponents/Sponsors/Sponsors';
import FeedBacks from '../Components/HomePageComponents/FeedBack/FeedBacks';
import FrequentlyAskedQuestions from '../Components/HomePageComponents/FAQ/FrequentlyAskedQuestions';
import Footer from '../Components/Footer/Footer';

// =============> Data <=============
import faq from '../Data/faq';
import features from '../Data/features';
import feedback from '../Data/feedback';
import sponsor from '../Data/sponsor';
import { homePageHeader } from '../Data/header';

function Home() {
	return (
		<div className='container container--home'>
			<Header {...homePageHeader} />
			<Features {...features} />
			<Sponsors {...sponsor} />
			<FrequentlyAskedQuestions {...faq} padding='8rem 0' />
			<FeedBacks {...feedback} />
			<Footer />
		</div>
	);
}

export default Home;
