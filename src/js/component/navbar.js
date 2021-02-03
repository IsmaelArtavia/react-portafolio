import React from "react";

export function Navbar() {
	return (
		//navbar navbar-expand-lg navbar-light bg-light
		<div>
			<nav className="navbar navbar-expand-lg fixed-top  bg-info">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li classNamE="nav-item">
								<a className="nav-link" href="#">
									Features
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Pricing
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link disabled"
									href="#"
									tabIndex="-1"
									aria-disabled="true">
									Disabled
								</a>
							</li>
						</ul>
						<div className="iconos">
							<i className="fab fa-linkedin-in" />
							<i className="fab fa-github" />
							<i className="fas fa-paper-plane" />
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
