import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

import Weapon from 'Scenarios/StartGame/components/SelectedType';

const Player = ({ label, weapon, loading, score }) => (
	<div styleName="Player">
		<div>
			<span className="label">{label}</span>
		</div>
		<Weapon
			icon={weapon}
			loading={loading}
		/>
		<div>
			<span className="score">{score} PT{score > 1 && 'S'}</span>
		</div>
	</div>
);

export default CSSModules(Player, styles);
