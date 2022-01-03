import React from "react"
import Navigation from './Navigation';

function Header() {
	return (
		<header>
			<div className="header-container">
				<div className="logo">
					<h1>Bartosz Art</h1>
				</div>
				<Navigation />
			</div>
		</header>
	)
}

export default Header