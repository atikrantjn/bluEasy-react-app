import React, { Component } from 'react';
import './App.css';
import Heroslider from './components/HeroSliderComponent/Heroslider';
import Services from './components/ServicesComponent/Services';
import Portfolio from './components/PortfolioComponent/Portfolio';
import DefaultSection from './components/DefaultSectionComponent/DefaultSection';
import TwitterComponent from './components/TwiterComponent/TwitterComponent';
import JohnDoeComponent from './components/johnDoeComponent/JohnDoeComponent';
import Testimonials from './components/TestimonialComponent/Testimonials';
import ContactComponent from './components/ContactComponent/ContactComponent';
import FooterComponent from './components/FooterComponent/Footer';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Heroslider />
				<Services />
				<Portfolio />
				<DefaultSection />
				<TwitterComponent />
				<JohnDoeComponent />
				<Testimonials />
				<ContactComponent />
				<FooterComponent />
			</div>
		);
	}
}

export default App;
