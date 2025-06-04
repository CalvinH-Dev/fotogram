let dialog;
let dialogh2;
let dialogImg;
let dialogSourceText;
let imgIndex;
let images;

let imageSources = [
	"img/gallery/webp/adrianna-geo-1rBg5YSi00c-unsplash.webp",
	"img/gallery/webp/birmingham-museums-trust-8wcoY3wcbL0-unsplash.webp",
	"img/gallery/webp/birmingham-museums-trust-G1Z0cIMYHVM-unsplash.webp",
	"img/gallery/webp/birmingham-museums-trust-HEEvYhNzpEo-unsplash.webp",
	"img/gallery/webp/birmingham-museums-trust-sJr8LDyEf7k-unsplash.webp",
	"img/gallery/webp/birmingham-museums-trust-wKlHsooRVbg-unsplash.webp",
	"img/gallery/webp/boston-public-library-YoK5pBcSY8s-unsplash.webp",
	"img/gallery/webp/europeana-5TK1F5VfdIk-unsplash.webp",
	"img/gallery/webp/europeana-TjegK_z-0j8-unsplash.webp",
	"img/gallery/webp/jene-stephaniuk--MCrF6hnojU-unsplash.webp",
	"img/gallery/webp/rhondak-native-florida-folk-artist-_Yc7OtfFn-0-unsplash.webp",
	"img/gallery/webp/tamara-menzi-n-vnWQmmVoY-unsplash.webp",
];

let imageAlts = [
	"Ein Gemälde an der Decke eines Gebäudes",
	"Schafherde auf Straßenmalerei",
	"Ein Gemälde eines Mannes und einer Frau, die nebeneinander sitzen",
	"Ein Gemälde von Menschen in einem Boot auf einem Fluss",
	"Ein Gemälde einer Burg auf einem Hügel",
	"Braune und graue Bäume und Felsformationen",
	"Brauner und schwarzer Vogel auf grüner Pflanze",
	"Blumen mit roten, blauen und weißen Blüten",
	"Braunes und weißes Segelschiff auf Seemalerei",
	"rote, blaue und gelbe abstrakte Malerei",
	"Pinsel in verschiedenen Farben",
	"Grün belaubte Bäume",
];

let originalSources = [
	"https://unsplash.com/de/fotos/ein-gemalde-an-der-decke-eines-gebaudes-1rBg5YSi00c",
	"https://unsplash.com/de/fotos/schafherde-auf-strassenmalerei-8wcoY3wcbL0",
	"https://unsplash.com/de/fotos/ein-gemalde-eines-mannes-und-einer-frau-die-nebeneinander-sitzen-G1Z0cIMYHVM",
	"https://unsplash.com/de/fotos/ein-gemalde-von-menschen-in-einem-boot-auf-einem-fluss-HEEvYhNzpEo",
	"https://unsplash.com/de/fotos/ein-gemalde-einer-burg-auf-einem-hugel-sJr8LDyEf7k",
	"https://unsplash.com/de/fotos/braune-und-graue-baume-und-felsformationen-wKlHsooRVbg",
	"https://unsplash.com/de/fotos/brauner-und-schwarzer-vogel-auf-gruner-pflanze-YoK5pBcSY8s",
	"https://unsplash.com/de/fotos/rote-blaue-und-weisse-bluten-5TK1F5VfdIk",
	"https://unsplash.com/de/fotos/braunes-und-weisses-segelschiff-auf-seemalerei-TjegK_z-0j8",
	"https://unsplash.com/de/fotos/rote-blaue-und-gelbe-abstrakte-malerei--MCrF6hnojU",
	"https://unsplash.com/de/fotos/assorted-color-paintbrushes-_Yc7OtfFn-0",
	"https://unsplash.com/de/fotos/grun-belaubte-baume-n-vnWQmmVoY",
];

function init() {
	dialog = document.getElementById("dialog");
	dialogh2 = dialog.querySelector("h2");
	dialogImg = dialog.querySelector("#dialog > img");
	dialogSourceText = dialog.querySelector("p .text");

	initializeImages();
}

function initializeImages() {
	let imageDiv = document.querySelector(".images");
	let str = "";
	for (let i = 0; i < imageSources.length; i++) {
		str += imgTemplate(imageSources[i], imageAlts[i], i);
	}

	imageDiv.innerHTML = str;
	images = document.querySelectorAll(".hero .img-container img");
}

function onClickCloseDialogBtn() {
	closeDialog();
}

function onClickCloseDialogBody() {
	closeDialog();
}

function onclickDialog(event) {
	event.stopPropagation();
}

function onClickLeftNav() {
	navigateDialog(images, -1);
}

function onClickLRightNav() {
	navigateDialog(images, 1);
}

function onClickBackToStart() {
	imgIndex = 0;
	swapDialogImage(images[0], originalSources[0]);
}

function onClickImg(event, index) {
	if (dialog.classList.contains("d_none")) {
		swapDialogImage(images[index], originalSources[index]);
		imgIndex = index;
		openDialog();
		event.stopPropagation();
	}
}

function imgTemplate(src, alt, index) {
	return `<div class="img-container">
						<img src="${src}" alt="${alt}" onclick="onClickImg(event, ${index})" />
					</div>`;
}

function navigateDialog(images, direction) {
	imgIndex += direction;
	if (imgIndex < 0) {
		imgIndex = images.length - 1;
	} else if (imgIndex > images.length - 1) {
		imgIndex = 0;
	}

	swapDialogImage(images[imgIndex], originalSources[imgIndex]);
}

function swapDialogImage(image, source) {
	dialogh2.innerText = image.alt;
	dialogImg.src = image.src;
	dialogImg.alt = image.alt;
	dialogSourceText.innerText = source;
}

function openDialog() {
	dialog.classList.remove("d_none");
}

function closeDialog() {
	dialog.classList.add("d_none");
}

function isDialogOpen() {
	return !dialog.classList.contains("d_none");
}
