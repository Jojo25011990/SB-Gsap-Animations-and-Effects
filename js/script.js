"use strict";
gsap.registerPlugin(TextPlugin);

const headingPrimary = document.getElementById("headingPrimary");
const sectionTitle = document.querySelector(".section__title");
const animateText = "Evanescence My Immortal - Full (!) Cover By Selena Belle";
const line = document.querySelector(".container__line");
const link = document.querySelector(".container__link");
const btn = document.querySelector(".container__btn");
const socialLinks = document.querySelectorAll(".nav__social-link");
const section = document.querySelector(".section");
const sectionBackground = document.querySelector(".section__background");
const tlOne = gsap.timeline().delay(1);
const tlTwo = gsap.timeline().delay(6);

tlOne
	.from(headingPrimary, { scale: 0, y: -150, duration: 0.8, delay: 0.5 })

	.to(line, { scale: 1, duration: 0.8, stagger: 0.2 }, "-=0.3")
	.from(link, { autoAlpha: 0, y: -50, duration: 0.8 }, "-=0.2")
	.from(btn, { autoAlpha: 0, y: -50, duration: 0.8 }, "-=.1");

tlTwo
	.to(section, { autoAlpha: 1, width: "100%", zIndex: 25 })
	.to(sectionBackground, { scale: 80, ease: "power2", duration: 0.6 })
	.to(sectionTitle, {
		autoAlpha: 1,
		duration: 5.5,
		text: animateText,
		ease: "none",
	})
	.from(
		socialLinks,
		{ autoAlpha: 0, x: -100, ease: "back.out(4)", stagger: 0.2 },
		"-=0.5"
	);
