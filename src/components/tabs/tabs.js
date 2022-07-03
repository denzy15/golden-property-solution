const labels = document.querySelectorAll(".tabs-item__label");
const tabs = document.querySelectorAll(".tabs-btn");

function toggleShow() {
	const target = this;
	const item = target.classList.contains("tabs-btn")
		? target
		: target.parentElement;
	const group = item.dataset.actabGroup;
	const id = item.dataset.actabId;

	tabs.forEach(function(tab) {
		if (tab.dataset.actabGroup === group) {
			if (tab.dataset.actabId === id) {
				tab.classList.add("tabs-active");
			} else {
				tab.classList.remove("tabs-active");
			}
		}
	});

	labels.forEach(function(label) {
		const tabItem = label.parentElement;

		if (tabItem.dataset.actabGroup === group) {
			if (tabItem.dataset.actabId === id) {
				tabItem.classList.add("tabs-active");
			} else {
				tabItem.classList.remove("tabs-active");
			}
		}
	});
}

labels.forEach(function(label) {
	label.addEventListener("click", toggleShow);
});

tabs.forEach(function(tab) {
	tab.addEventListener("click", toggleShow);
});
