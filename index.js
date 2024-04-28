const btn = document.getElementById("read-button");
const unreads = document.querySelectorAll("main .unread");
const counter = document.getElementById("unread-num");
const redDots = document.querySelectorAll("main .unread p .red-dot");
btn.addEventListener("click", function (e) {
	unreads.forEach((item) => {
		item.style.backgroundColor = "white";
	});
	counter.textContent = 0;
	redDots.forEach((item) => {
		item.style.display = "none";
	});
});
