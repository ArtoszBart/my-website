import React, { useState } from 'react';
import { Link } from 'react-router-dom'

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
						<Link to="/" className="menu-nav-link" onClick={() => setOpen('')}>
							Home
						</Link>
					</li>
					<li className={'menu-nav-item' + open}>
						<Link to="!#" className="menu-nav-link" onClick={() => setOpen('')}>
							About Me
						</Link>
					</li>
					<li className={'menu-nav-item' + open}>
						<Link to="!#" className="menu-nav-link" onClick={() => setOpen('')}>
							My Projects
						</Link>
					</li>
					<li className={'menu-nav-item' + open}>
						<Link to="/contact" className="menu-nav-link" onClick={() => setOpen('')}>
							Contact Me
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navigation