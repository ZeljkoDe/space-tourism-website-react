import React, { useState } from 'react';
import './miniNavigation.css';

const MiniNavigation = (props) => {
	const { arr, obj } = props;
	const [isActive, setIsActive] = useState(obj[0].name);
	const addActiveClass = (nav) => {
		setIsActive(nav);
		props.onActiveAdd(nav);
	};
	return (
		<ul className="mini-navigation">
			{props.obj.map(
				(item, index) =>
					<li key={index}
						onClick={() => addActiveClass(item.name)}
						className={`${item.name === isActive && 'active'}`}
					>
						{arr === 'destination' ? item.name : arr === 'crew' ? "" : index + 1}
					</li>
			)
			};
		</ul >


	);
};

export default MiniNavigation;
