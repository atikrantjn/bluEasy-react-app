import React from 'react';
import coffee from '../../images/coffee.png';
import instant from '../../images/instant.png';
import serious from '../../images/serious.png';
import frame from '../../images/frame.png';
import './services.css';
function Services() {
	return (
		<div>
			<div className="container-fluid services_div">
				<div className="container">
					<div className="container">
						<p className="services under_line">Services</p>
					</div>

					<div className="row justify-content-center">
						<div className="col">
							<img src={coffee} alt="coffee" className="image-services" />
							<h3 className="services-heading">Coffee</h3>

							<p className="services_para">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla obcaecati fugit dolores
								beatae aliquam, vitae recusandae numquam iste? Blanditiis, quisquam.
							</p>
						</div>

						<div className="col">
							<img src={instant} alt="instant" className="image-services" />
							<h3 className="services-heading">Instant</h3>

							<p className="services_para">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla obcaecati fugit dolores
								beatae aliquam, vitae recusandae numquam iste? Blanditiis, quisquam.
							</p>
						</div>

						<div className="col">
							<img src={serious} alt="coffee" className="image-services" />
							<h3 className="services-heading">Serious</h3>

							<p className="services_para">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla obcaecati fugit dolores
								beatae aliquam, vitae recusandae numquam iste? Blanditiis, quisquam.
							</p>
						</div>

						<div className="col">
							<img src={frame} alt="coffee" className="image-services" />
							<h3 className="services-heading">Frame</h3>

							<p className="services_para">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla obcaecati fugit dolores
								beatae aliquam, vitae recusandae numquam iste? Blanditiis, quisquam.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
