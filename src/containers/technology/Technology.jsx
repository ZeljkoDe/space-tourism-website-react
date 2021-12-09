import React, { useState } from 'react';
import { Navigation, Image, MiniNavigation, Article } from '../../components/index';
import './technology.css';

const technology = [
	{
		"name": "Launch vehicle",
		"description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
	},
	{
		"name": "Spaceport",
		"description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
	},
	{
		"name": "Space capsule",
		"description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
	}
];

const Technology = () => {

	const [activeContent, setActiveContent] = useState(technology[0]?.name);
	const addActiveContent = (active) => {
		setActiveContent(active);
	};

	return (
		<div className="technology__bg" style={{ backgroundImage: "url(/images/technology/background-technology-desktop.jpg)" }}>
			<Navigation />
			<main className="container-small">
				<header>
					<h3><span>03</span>SPACE LAUNCH 101</h3>
				</header>
				<div className="left__side">
					<MiniNavigation onActiveAdd={addActiveContent} obj={technology} arr='technology' />

					{technology.map((planet, i) => (planet.name === activeContent && <Article key={i} planet={planet} />))}

				</div>
				<div className="right__side">
					<Image imgUrl={`/images/technology/image-${activeContent.replace(/\s+/g, '-').toLowerCase()}-portrait.jpg`} />
				</div>

			</main>
		</div>
	);
};

export default Technology;
