import React from "react";

const About = () => {
	return (
		<div id="contenedorabout">
			<div>
				<img
					src="https://picsum.photos/seed/picsum/200/300"
					className="rounded2 float-left"
					alt="..."
				/>

				<p className="text-center">
					<p className="text-center">
						<h2>About me</h2>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industrys
						standard dummy text ever since the 1500s, when an
						unknown printer took a galley of type and scrambled it
						to make a type specimen book. It has survived not only
						five centuries, but also the leap into electronic
						typesetting, remaining essentially unchanged. It was
						popularised in the 1960s with the release of Letraset
						sheets containing Lorem Ipsum passages, and more
						recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
					<a
						className="btn btn-primary"
						data-toggle="collapse"
						href="#multiCollapseExample1"
						role="button"
						aria-expanded="false"
						aria-controls="multiCollapseExample1">
						Toggle first element
					</a>
					<button
						className="btn btn-primary"
						type="button"
						data-toggle="collapse"
						data-target="#multiCollapseExample2"
						aria-expanded="false"
						aria-controls="multiCollapseExample2">
						Toggle second element
					</button>
					<button
						className="btn btn-primary"
						type="button"
						data-toggle="collapse"
						data-target="#multiCollapseExample3"
						aria-expanded="false"
						aria-controls="multiCollapseExample3">
						Toggle third element
					</button>
				</p>
				<div className="row">
					<div className="col">
						<div
							className="collapse multi-collapse"
							id="multiCollapseExample1">
							<div className="card card-body">
								Anim pariatur cliche reprehenderit, enim eiusmod
								high life accusamus terry richardson ad squid.
								Nihil anim keffiyeh helvetica, craft beer labore
								wes anderson cred nesciunt sapiente ea proident.
							</div>
						</div>
					</div>
					<div className="col">
						<div
							className="collapse multi-collapse"
							id="multiCollapseExample2">
							<div className="card card-body">
								Anim pariatur cliche reprehenderit, enim eiusmod
								high life accusamus terry richardson ad squid.
								Nihil anim keffiyeh helvetica, craft beer labore
								wes anderson cred nesciunt sapiente ea proident.
							</div>
						</div>
					</div>
					<div className="col">
						<div
							className="collapse multi-collapse"
							id="multiCollapseExample3">
							<div className="card card-body">
								Anim pariatur cliche reprehenderit, enim eiusmod
								high life accusamus terry richardson ad squid.
								Nihil anim keffiyeh helvetica, craft beer labore
								wes anderson cred nesciunt sapiente ea proident.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
