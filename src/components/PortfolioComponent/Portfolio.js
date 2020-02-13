import React from 'react';
import './portfolio.css';
import portfolio1 from '../../images/portfolio1.png';
import portfolio2 from '../../images/portfolio2.png';
import portfolio3 from '../../images/portfolio3.png';
import portfolio4 from '../../images/portfolio4.png';
import portfolio5 from '../../images/portfolio5.png';
import portfolio6 from '../../images/portfolio6.png';
import portfolio7 from '../../images/portfolio7.png';
import portfolio8 from '../../images/portfolio8.png';

function Portfolio() {
	return (
		<div>
			<div className="container-fluid mt-5 mb-5">
				<div className="container portfolio">
					<div className="portfolio_heading">
						PORTFOLIO
						<div className="bottom_line_portfolio"></div>
					</div>

					<div className="portfolio_list mt-2">
						<ul>
							<li className="portfolio_list_items ">
								<a href="#">All</a>
							</li>
							<li className="portfolio_list_items">
								<a href="#">Panoramas</a>
							</li>
							<li className="portfolio_list_items">
								<a href="#">Portraits</a>
							</li>
							<li className="portfolio_list_items">
								<a href="#">Macro</a>
							</li>
							<li className="portfolio_list_items">
								<a href="#">Journal</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="container portfolio_thumbs mt-5">
					<div className="row text-center">
						<div className="col-lg-3 col-md-6 col-sm-6 image_block ">
							<div className="d-block mb-4 h-100 ">
								<img className="img-fluid portimages" src={portfolio1} alt="" />
								<div className="middle">
									<div className="sign">
										<i className="fa fa-plus sign_icon" aria-hidden="true"></i>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 col-sm-6 image_block">
							<div className="d-block mb-4 h-100">
								<img className="img-fluid portimages" src={portfolio2} alt="" />
								<div className="middle">
									<div className="sign">
										<i className="fa fa-plus sign_icon" aria-hidden="true"></i>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 col-sm-6 image_block">
							<div className="d-block mb-4 h-100">
								<img className="img-fluid portimages" src={portfolio3} alt="" />
								<div className="middle">
									<div className="sign">
										<i className="fa fa-plus sign_icon" aria-hidden="true"></i>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 col-sm-6 image_block">
							<div className="d-block mb-4 h-100">
								<img className="img-fluid portimages" src={portfolio4} alt="" />
								<div className="middle">
									<div className="sign">
										<i className="fa fa-plus sign_icon" aria-hidden="true"></i>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row text-center">
						<div className="col-lg-3 col-md-6 col-sm-6 image_block">
							<div className="d-block mb-4 h-100">
								<img className="img-fluid portimages" src={portfolio5} alt="" />
								<div className="middle">
									<div className="sign">
										<i className="fa fa-plus sign_icon" aria-hidden="true"></i>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 col-sm-6 image_block">
							<div className="d-block mb-4 h-100">
								<img className="img-fluid portimages" src={portfolio6} alt="" />
								<div className="middle">
									<div className="sign">
										<i className="fa fa-plus sign_icon" aria-hidden="true"></i>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 col-sm-6 image_block">
							<div className="d-block mb-4 h-100">
								<img className="img-fluid portimages" src={portfolio7} alt="" />
								<div className="middle">
									<div className="sign">
										<i className="fa fa-plus sign_icon" aria-hidden="true"></i>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 col-sm-6 image_block">
							<div className="d-block mb-4 h-100">
								<img className="img-fluid portimages" src={portfolio8} alt="" />
								<div className="middle">
									<div className="sign">
										<i className="fa fa-plus sign_icon" aria-hidden="true"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
