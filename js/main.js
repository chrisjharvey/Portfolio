window.addEventListener('DOMContentLoaded', () => {
	

// UI Vars 
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

const navSlide = () => {
	burger.addEventListener('click', () => {
		//Toggle Nav
		nav.classList.toggle('nav-active');
		
		//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
        });
        //Burger Animation
        burger.classList.toggle('toggle');
	});
};
	navSlide();
	// smooth scroll 
	const scroll = new SmoothScroll('a[href*="#"]', {
		speed: 500

	});
		
	const navToSolid = () => {
		const navSolid = document.getElementById('nav');
		window.onscroll = () => {
			if(window.pageYOffset > 200) {
				navSolid.style.background = "#333";
			} else {
				navSolid.style.background = "transparent";
			}
		}
	}

	navToSolid();
	// Typewriter effect
		
	// Contact form

});
