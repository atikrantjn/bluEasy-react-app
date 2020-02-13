import React from 'react';
import './contactComponent.css';
function ContactComponent() {
	return (
		<div>
			<div className="contact_us_section">
				<div className="container">
					<div className="row align-items-center">
						<div className="col  mt-5">
							<h2 className="contact_us_heading">Contact</h2>
							<div className="bottom_line_contact"></div>
						</div>
					</div>
					<form>
						<div className="row mt-5">
							<div className="col-lg-6">
								<div className="form-group">
									<label className="contact_us_label">Full name</label>
									<input
										type="text"
										className="form-control transparent-input"
										placeholder="Enter full name"
									/>
								</div>
							</div>
							<div className="col-lg-6">
								<p className="contact_para">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sequi quidem, eaque
									fuga expedita amet labore quasi doloremque cum deserunt rem corrupti vitae iure,
									recusandae est quibusdam praesentium? Praesentium, iste.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6">
								<div className="form-group">
									<label className="contact_us_label">Email</label>
									<input
										type="email"
										className="form-control transparent-input"
										placeholder="Enter Email"
									/>
								</div>
							</div>
							<div className="col-lg-6 mt-4">
								<p className="contact_para">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias at vitae ratione
									tenetur eaque ipsum architecto maiores aspernatur, dolor odio?
								</p>
							</div>
						</div>

						<div className="row">
							<div className="col-lg-12">
								<div className="form-group">
									<label className="contact_us_label">Message</label>
									<textarea className="form-control transparent-input" rows="4"></textarea>
								</div>
							</div>
						</div>

						<div className="row pb-5 mt-3">
							<div className="col-4">
								<button className="form-control message_btn">Message</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ContactComponent;
