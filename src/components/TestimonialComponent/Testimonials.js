import React from 'react';
import './testimonials.css';
function Testimonials() {
	let url =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTV5XW_VN3jneJcNJwpRAt4Vmb6w9DWPl_X64vc1V7K-kUMknrT';
	return (
		<div>
			<div className="testimonials">
				<div className="container">
					<div className="row">
						<div className="col-9">
							<h2 className="testimonials_heading">Testimonials</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laboriosam vel repellendus
								quae obcaecati explicabo dolorem facilis est? Consequuntur, odit.
							</p>
							<small className="author_name">-&nbsp; Walter White</small>
						</div>
						<div className="col-3">
							<img className="testimonials_img" src={url} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
