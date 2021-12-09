import React from 'react';
import './article.css';

const Article = ({ planet }) => {
	return (
		<div>
			<h4 className="article__role">{planet.role}</h4>
			<p className="article__subtitle">THE TERMINOLOGY…</p>
			<h2 className="article__title">{planet.name}</h2>
			<p className="article__description">{planet.description}</p>
			<div className="article__travel">
				<p>
					Avg. distance
					<br />
					<span className="distanceAvg">{planet.distance}</span>
				</p>
				<p>
					Est. travel time
					<br />
					<span className="travelTime">{planet.travel}</span>
				</p>
			</div>
		</div >
	);
};

export default Article;
