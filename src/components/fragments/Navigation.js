import React, { useState } from 'react';

function Navigation() {
	const [open, setOpen] = useState('');
	return (
		<div className="menu">
			<div className="menu-btn" onClick={() => {
				if (open === '') {
					setOpen(' open');
				} else {
					setOpen('');
				}
			}}>
				<span className={'menu-btn-burger' + open}></span>
			</div>

			<nav className={'nav' + open}>
				<ul className={'menu-nav' + open}>
					<li className={'menu-nav-item' + open}>
						<a href="!#" className="menu-nav-link">
							Home
						</a>
					</li>
					<li className={'menu-nav-item' + open}>
						<a href="!#" className="menu-nav-link">
							About Me
						</a>
					</li>
					<li className={'menu-nav-item' + open}>
						<a href="!#" className="menu-nav-link">
							My Projects
						</a>
					</li>
					<li className={'menu-nav-item' + open}>
						<a href="!#" className="menu-nav-link">
							Contact Me
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navigation