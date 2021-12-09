import React, { useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import Image from '../../components/image/Image';
import DestinationNavigation from '../../components/destinationNavigation/DestinationNavigation';
import Article from '../../components/article/Article';
import './crew.css';

const crew = [
	{
		"name": "Douglas Hurley",
		"role": "Commander",
		"description": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
	},
	{
		"name": "Mark Shuttleworth",
		"role": "Mission Specialist",
		"description": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
	},
	{
		"name": "Victor Glover",
		"role": "Pilot",
		"description": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
	},
	{
		"name": "Anousheh Ansari",
		"role": "Flight Engineer",
		"description": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
	}
];

const Crew = () => {

	const [activeContent, setActiveContent] = useState(crew[0]?.name);
	const addActiveContent = (active) => {
		setActiveContent(active);
	};

	return (
		<div className="crew__bg" style={{ backgroundImage: "url(/images/crew/background-crew-desktop.jpg)" }}>
			<Navigation />
			<main className="container-small">
				<header>
					<h3><span>02</span>Meet your crew</h3>
				</header>
				<div className="left__side">
					{crew.map((planet, i) => {
						if (planet.name === activeContent) {
							return <Article key={i} planet={planet} />;
						}
					}
					)}
					<DestinationNavigation onActiveAdd={addActiveContent} obj={crew} arr='crew' />
				</div>
				<div className="right__side">
					<Image imgUrl={`/images/crew/image-${activeContent.replace(/\s+/g, '-').toLowerCase()}.png`} />
				</div>

			</main>
		</div>
	);
};

export default Crew;
