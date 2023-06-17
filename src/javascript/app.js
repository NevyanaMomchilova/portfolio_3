// INITIAL LOADING OF WEBSITE
const logoLoading = document.querySelector(".logo-loading-container");
const bodyWrapper = document.querySelector(".body-wrapper");

function initialLoading() {
	setTimeout(() => {
		logoLoading.style.display = "none";

		bodyWrapper.style.display = "block";
	}, 3700);
}

initialLoading();

// HERO click more btn
const moreTextArray = [
	"thank you,<br>for browsing my website",
	"I currently specialize in front-end development",
	"and I love building beautiful websites",
	"I am looking forward of becoming full-stack developer",
	"I also enjoy coloring books, lifting heavy in the gym, and dancing",
	"I am friendly",
	"I am a mother to 2 year old girl",
	"and I have 1 dog and 2 cats",
];

const heroClickMoreBtn = document.querySelector(".hero-click-more-btn");
const heroClickMoreText = document.querySelector(".hero-click-more-text");

heroClickMoreText.innerHTML = moreTextArray[0];

heroClickMoreBtn.addEventListener("click", () => {
	currentText = heroClickMoreText.innerHTML;
	textToShow = moreTextArray.indexOf(currentText) + 1;
	if (textToShow === moreTextArray.length) {
		textToShow = 0;
	}
	heroClickMoreText.innerHTML = moreTextArray[textToShow];
});

// VIDEO play/pause on hover
const projectBodies = document.querySelectorAll(".project-body");
projectBodies.forEach((projectBody) => {
	projectBody.addEventListener("mouseenter", () => {
		projectBody.querySelector(".project-video").play();
	});
	projectBody.addEventListener("mouseout", () => {
		projectBody.querySelector(".project-video").pause();
	});
});

// NAVIGATION HAMBURGER MENU
const hamburgerLines = document.querySelector(".hamburger-lines");
const mainNav = document.querySelector(".main-nav");
const mainNavLinks = document.querySelectorAll(".main-nav li");

hamburgerLines.addEventListener("click", () => {
	mainNav.classList.toggle("open");
	mainNavLinks.forEach((link) => {
		link.classList.toggle("full-opacity");
	});
});

mainNavLinks.forEach((link) => {
	link.addEventListener("click", () => {
		mainNav.classList.toggle("open");
		mainNavLinks.forEach((link) => {
			link.classList.toggle("full-opacity");
		});
	});
});
