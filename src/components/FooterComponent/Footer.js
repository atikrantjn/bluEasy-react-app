import React from 'react';
import './footer.css';
function Footer() {
	return (
		<div>
			<div className="footer_section">
				<div className="container">
					<div className="row">
						<div className="col-lg-11 col-md-9 mt-4">
							<div className="footer_list">
								<ul>
									<li>
										<a href="#" className="footer_links">
											Home
										</a>
									</li>
									<div className="vertical_line"></div>
									<li>
										<a href="#" className="footer_links">
											Services
										</a>
									</li>
									<div className="vertical_line"></div>
									<li>
										<a href="#" className="footer_links">
											Portfolio
										</a>
									</li>
									<div className="vertical_line"></div>
									<li>
										<a href="#" className="footer_links">
											Contact
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-1 col-md-3 mt-4">
							<div>@site</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
