const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

window.addEventListener("load", async function () {
	if (this.navigator.serviceWorker) {
		await this.navigator.serviceWorker.register("./sw.js");
		console.log("Service Worker Exist ");
	} else {
		console.log("Service Worker Not Exist ");
	}
});

navToggle.addEventListener("click", () => {
	document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		document.body.classList.remove("nav-open");
	});
});
