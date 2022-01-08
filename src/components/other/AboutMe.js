import { getAllByPlaceholderText } from '@testing-library/react'
import React from 'react'

function AboutMe() {

	const getDate = () => {
		const today = new Date(Date.now());
		const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(today);
		const year = today.getFullYear();
		return `${month} ${year}`;
	};

	return (
		<main>
			<section>
				<h1>About me</h1>
				<p>
					Hi, my name is Bartosz Art, and I'm 4th semester student of Computer Science on PJAIT in Warsaw.
				</p>
				<p>
					On my free time i'm developing my programming skills as well as playing golf and sailing.
				</p>
				<p>
					I am interested in database applications, and I
					also had 100% of all points I could get from this subject. I would like to gain experience and
					develop in this direction.
				</p>
				<hr />
			</section>
			<section>
				<h2>Skills</h2>
				<div className="skills">
					<div className="skills-box">
						<i className="skills-box-logo fab fa-react"></i>
						<p className="skills-box-text">React</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo fab fa-node-js"></i>
						<p className="skills-box-text">Node.js</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo devicon-express-original"></i>
						<p className="skills-box-text">Express</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo devicon-sequelize-plain"></i>
						<p className="skills-box-text">Sequelize</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo devicon-dot-net-plain"></i>
						<p className="skills-box-text">.NET</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo devicon-dotnetcore-plain"></i>
						<p className="skills-box-text">.NET Core</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo devicon-wordpress-plain"></i>
						<p className="skills-box-text">Wordpress</p>
					</div>


					<div className="skills-box">
						<i className="skills-box-logo devicon-csharp-plain"></i>
						<p className="skills-box-text">C#</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo fab fa-html5"></i>
						<p className="skills-box-text">HTML5</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo fab fa-css3-alt"></i>
						<p className="skills-box-text">CSS3</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo fab fa-js"></i>
						<p className="skills-box-text">JavaScript</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo fab fa-sass"></i>
						<p className="skills-box-text">SASS</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo devicon-java-plain"></i>
						<p className="skills-box-text">Java</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo devicon-microsoftsqlserver-plain"></i>
						<p className="skills-box-text">Transact-SQL</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo devicon-oracle-original"></i>
						<p className="skills-box-text">PL/SQL</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo devicon-php-plain"></i>
						<p className="skills-box-text">php</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo devicon-bash-plain"></i>
						<p className="skills-box-text">Bash</p>
					</div>


					<div className="skills-box">
						<i className="skills-box-logo devicon-azure-plain"></i>
						<p className="skills-box-text">Azure</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo devicon-heroku-original"></i>
						<p className="skills-box-text">Heroku</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo fab fa-stack-overflow"></i>
						<p className="skills-box-text">Stack Overflow</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo fab fa-github"></i>
						<p className="skills-box-text">GitHub</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo devicon-git-plain"></i>
						<p className="skills-box-text">Git</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo devicon-docker-plain"></i>
						<p className="skills-box-text">Docker</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo devicon-mysql-plain"></i>
						<p className="skills-box-text">MySQL</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo devicon-visualstudio-plain"></i>
						<p className="skills-box-text">Visual Studio</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo devicon-vscode-plain"></i>
						<p className="skills-box-text">Visual Studio Code</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo devicon-putty-plain"></i>
						<p className="skills-box-text">PuTTy</p>
					</div>
					<div className="skills-box">
						<i className="skills-box-logo devicon-windows8-original"></i>
						<p className="skills-box-text">Windows 10</p>
					</div>
				</div>
				<hr />
			</section>
			<section>
				<h2>My Experience</h2>
				<div className="timeline">
					<div className="timeline-item">
						<div className="timeline-marker"></div>
						<div className="timeline-item-content">
							<p className="timeline-item-content-date">June 2021 - {getDate()}</p>
							<p className="timeline-item-content-desc">Full-stack Web Developer at <a href="https://www.pja.edu.pl/en/" target="_blank">ModernCar</a></p>
						</div>
					</div>
					<div className="timeline-item">
						<div className="timeline-marker"></div>
						<div className="timeline-item-content">
							<p className="timeline-item-content-date">June 2020 - October 2020</p>
							<p className="timeline-item-content-desc">Full-stack Web Developer at DK Parkiet</p>
						</div>
					</div>
					<div className="timeline-item">
						<div className="timeline-marker"></div>
						<div className="timeline-item-content">
							<p className="timeline-item-content-date">July 2018 - December 2018</p>
							<p className="timeline-item-content-desc">Full-stack Web Developer at SKKS</p>
						</div>
					</div>
					<div className="timeline-item">
						<div className="timeline-marker with-icon">
							<i className="fas fa-flag"></i>
						</div>
						<div className="timeline-item-content">
							<p className="timeline-item-content-date">October 2017</p>
							<p className="timeline-item-content-desc">Started studying Computer Science at <a href="https://www.pja.edu.pl/en/" target="_blank">PJAIT</a></p>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default AboutMe