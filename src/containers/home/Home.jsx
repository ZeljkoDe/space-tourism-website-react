import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import './home.css';

const Home = () => (
	<>
		<div className="home__bg" style={{ backgroundImage: "url(/images/home/background-home-desktop.jpg)" }}>
			<Navigation />
			<main className="home container">
				<div className="left__side">
					<h3 className="home__subtitle">So, you want to travel to</h3>
					<h1 className="home__title">Space</h1>
					<p className="home__description">
						Let’s face it; if you want to go to space, you might as well genuinely go to
						outer space and not hover kind of on the edge of it. Well sit back, and relax
						because we’ll give you a truly out of this world experience!
					</p>
				</div>

				<div className="right__side">
					<button className="home__btn">Explore</button>
				</div>
			</main>
		</div>
	</>
);

export default Home;
