let dialog;
let dialogh2;
let dialogImg;

function init() {
	let images = document.querySelectorAll(".hero .img-container img");
	let body = document.querySelector("body");
	dialog = document.getElementById("dialog");
	dialogh2 = dialog.querySelector("h2");
	let dialogBtn = dialog.querySelector("button");
	dialogImg = dialog.querySelector("img");
	let dialogNavBtnLeft = dialog.querySelector(".left");
	let dialogNavBtnRight = dialog.querySelector(".right");

	body.addEventListener("click", function (event) {
		closeDialog();
	});

	dialogBtn.addEventListener("click", (event) => {
		closeDialog();
		swapImage({ src: "", alt: "" });
		event.stopPropagation();
	});

	for (let i = 0; i < images.length; i++) {
		images[i].addEventListener("click", function (event) {
			swapImage(event.target);
			openDialog();
			event.stopPropagation();
		});
	}

	dialogNavBtnLeft.addEventListener("click", function (event) {
		let index;
		for (let i = 0; i < images.length; i++) {
			if (images[i].src == dialogImg.src) {
				index = i;
				break;
			}
		}
		navigateDialog(images, index, -1);
		event.stopPropagation();
	});

	dialogNavBtnRight.addEventListener("click", function (event) {
		let index;
		for (let i = 0; i < images.length; i++) {
			if (images[i].src == dialogImg.src) {
				index = i;
				break;
			}
		}
		navigateDialog(images, index, 1);
		event.stopPropagation();
	});
}

function viewTemplate(image) {}

function navigateDialog(images, index, direction) {
	let newIndex = index + direction;
	if (newIndex < 0) {
		newIndex = images.length - 1;
	} else if (newIndex > images.length - 1) {
		newIndex = 0;
	}

	swapImage(images[newIndex]);
}

function swapImage(image) {
	dialogh2.innerText = image.alt;
	dialogImg.src = image.src;
	dialogImg.alt = image.alt;
}

function openDialog() {
	dialog.classList.remove("d_none");
}

function closeDialog() {
	dialog.classList.add("d_none");
}
