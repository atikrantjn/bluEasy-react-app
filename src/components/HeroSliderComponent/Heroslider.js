import React from 'react';
import './heroSlider.css';
function Heroslider() {
	return (
		<div>
			<div className="first-div">
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container">
						<a className="navbar-brand brand_header" href="#">
							BLU
							<span className="E_span">E</span>
							ASY
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item active">
									<a className="nav-link" href="#">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Services
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Features
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Portfolio
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<div className="container">
					<div className="main-text">
						<h2 className="header_text1">I'm looking for the unexpected</h2>
						<h3 className="header_text2">I'm Looking for things I've never seen!!</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Heroslider;
