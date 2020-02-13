import React from 'react';
import './defaultSection.css';
import footer_video from '../../images/footer_video.png';
function DefaultSection() {
	return (
		<div>
			<div class="default_section">
				<div class="container">
					<div class="row default_section_row">
						<div class="col-lg-6 col-md-12 mt-5">
							<h2 class="default_section_header">Just Default section</h2>
							<div class="bottom_line"></div>

							<p class="default_section_para">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas culpa quibusdam suscipit
								cupiditate accusantium doloribus, rerum blanditiis odio nostrum iure labore nobis! Et,
								asperiores possimus quisquam ab sed distinctio incidunt?
							</p>
							<p class="default_section_para">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, facere quo. Accusamus
								exercitationem, eius reprehenderit deserunt distinctio quo itaque soluta nemo amet?
							</p>

							<button class="btn btn-outline-dark btn-lg">Visit Me</button>
						</div>
						<div class="col-lg-6 col-md-12 mt-5">
							<div>
								<img class="img-fluid" src={footer_video} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DefaultSection;
