import React from 'react';
import './twitterComponent.css';
import twitter_logo from '../../images/twitter-xxl.png';
function TwitterComponent() {
	return (
		<div>
			<div className="twitter_section">
				<div className="container">
					<div className="row">
						<div className="col-9 mt-5 ">
							<h2 className="twitter_heading">TWITTER</h2>
							<p>
								Underwear cookie liquorice. Cake Donut cupcake lollipop souffle candy. Chocolate oat
								cake <span classNameName="cheeseCake">@cheesecake</span>tootsie roll.
							</p>
						</div>

						<div className="col-3 mt-5">
							<img src={twitter_logo} className="twitter_logo " alt="twitter" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TwitterComponent;
