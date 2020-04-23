window.addEventListener('DOMContentLoaded', () => {
	// UI Vars
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navbarLinks = document.querySelectorAll('.nav-links li');

	const navSlide = () => {
		burger.addEventListener('click', () => {
			//Toggle Nav
			nav.classList.toggle('nav-active');

			//Animate Links
			navbarLinks.forEach((link, index) => {
				if (link.style.animation) {
					link.style.animation = '';
				} else {
					link.style.animation = `navLinkFade 0.7s ease forwards ${index / 7 + 0.7}s`;
				}
			});
			//Burger Animation
			burger.classList.toggle('toggle');
		});
		//nav closes when a link is clicked
		navbarLinks.forEach((elem) =>
			elem.addEventListener('click', () => {
				if (nav.classList.contains('nav-active')) {
					nav.classList.remove('nav-active');
					burger.classList.toggle('toggle');
				}
			})
		);
	};
	navSlide();

	// smooth scroll
	const scroll = new SmoothScroll('a[href*="#"]', {
		speed: 500,
	});

	// nav turns from transparent to solid on scroll
	const navToSolid = () => {
		const navSolid = document.getElementById('nav');
		window.onscroll = () => {
			if (window.pageYOffset > 200) {
				navSolid.style.background = '#333';
				navSolid.style.height = '50px';
			} else {
				navSolid.style.background = 'transparent';
				navSolid.style.height = '90px';
			}
		};
	};

	navToSolid();
	// skill bars

	const skillBars = () => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 1300) {
				let progressBars = document.querySelectorAll('.progress-bar');
				let values = ['90%', '90%', '70%', '20%', '30%'];

				progressBars.forEach((progress, index) => {
					progress.style.width = values[index];
				});
			}
		});
	};

	skillBars();
});
// Contact form
const validation = () => {
	const name = document.getElementById('name').value;
	const subject = document.getElementById('subject').value;
	const phone = document.getElementById('phone').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;
	const errorMessage = document.getElementById('error-message');
	let text;

	errorMessage.style.padding = '10px';

	if (name.length < 5) {
		text = 'Please Enter Valid Name';
		errorMessage.innerHTML = text;
		return false;
	}

	if (subject.length < 3) {
		text = 'Please Enter Valid Subject';
		errorMessage.innerHTML = text;
		return false;
	}

	if (isNaN(phone) || phone.length < 10) {
		text = 'Please Enter Valid Phone Number';
		errorMessage.innerHTML = text;
		return false;
	}

	if (email.indexOf('@') == -1 || email.length < 6) {
		text = 'Please Enter Valid Email';
		errorMessage.innerHTML = text;
		return false;
	}

	if (message.length <= 50) {
		text = 'Please Enter more than 50 Characters';
		errorMessage.innerHTML = text;
		return false;
	}

	alert('Form Successfully Submitted');

	return true;
};
