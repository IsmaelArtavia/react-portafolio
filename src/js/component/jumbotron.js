import React from "react";

const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<div className="encima">
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<p>
					It uses utility classes for typography and spacing to space
					content out within the larger container.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Learn more
					</a>
				</p>
			</div>
			<div className="text-center">
				<img
					src="https://picsum.photos/id/237/200/300"
					className="rounded"
					alt="..."
				/>
			</div>
		</div>
	);
};

export default Jumbotron;
