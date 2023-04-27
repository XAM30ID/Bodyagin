let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textClolor = "#FFFFFF";
tg.MainButton.color = "#000000";

let item = "";

//let btn1 = document.getElementById("btn1");
//let btn2 = document.getElementById("btn2");
//let btn3 = document.getElementById("btn3");
//let btn4 = document.getElementById("btn4");
//let btn5 = document.getElementById("btn5");
//let btn6 = document.getElementById("btn6");
//let btn7 = document.getElementById("btn7");

const cols = [
	"yellow",
	"green",
	"red",
	"blue",
	"pink",
	"violet",
	"black"
]

const Rcols = {
	"yellow": "Жёлтый",
	"green": "Зелёный",
	"red": "Красный",
	"blue": "Синий",
	"pink": "Розовый",
	"violet": "Фиолетовый",
	"black": "Жёлтый"
}

const sizes = [
	"S", "M", "L", "XL", "2XL"
]

var btns = []


for (let i = 0; i < cols.length; i++) {
	for (let j = 0; j < sizes.length; j++) {
		let btn = document.getElementById(cols[i] + "_" + sizes[j]);
		btns.push(btn)
	}	
}

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		tg.MainButton.show();
		item = btns[i].id.split("_");
		tg.MainButton.setText("Вы выбрали цвет: " + Rcols[item[0]] + " и размер: " + item[1]);
	});
}

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	console.log(item);
	tg.sendData(item);
});

//btn1.addEventListener("click", function() {
//	if (tg.MainButton.isVisible) {
//		tg.MainButton.hide();
//	}
//	else {
//		tg.MainButton.setText("Вы выбрали товар 1!");
//		item = "1";
//		tg.MainButton.show();
//	}
//});
//
//btn2.addEventListener("click", function() {
//	if (tg.MainButton.isVisible && item == "2") {
//		tg.MainButton.hide();
//	}
//	else {
//		tg.MainButton.setText("Вы выбрали товар 2!");
//		item = "2";
//		tg.MainButton.show();
//	}
//});
//
//btn3.addEventListener("click", function() {
//	if (tg.MainButton.isVisible && item == "3") {
//		tg.MainButton.hide();
//	}
//	else {
//		tg.MainButton.setText("Вы выбрали товар 3!");
//		item = "3";
//		tg.MainButton.show();
//	}
//});
//
//btn4.addEventListener("click", function() {
//	if (tg.MainButton.isVisible && item == "4") {
//		tg.MainButton.hide();
//	}
//	else {
//		tg.MainButton.setText("Вы выбрали товар 4!");
//		item = "4";
//		tg.MainButton.show();
//	}
//});
//
//btn5.addEventListener("click", function() {
//	if (tg.MainButton.isVisible && item == "5") {
//		tg.MainButton.hide();
//	}
//	else {
//		tg.MainButton.setText("Вы выбрали товар 5!");
//		item = "5";
//		tg.MainButton.show();
//	}
//});
//
//btn6.addEventListener("click", function() {
//	if (tg.MainButton.isVisible && item == "6") {
//		tg.MainButton.hide();
//	}
//	else {
//		tg.MainButton.setText("Вы выбрали товар 6!");
//		item = "6";
//		tg.MainButton.show();
//	}
//});
//
//btn7.addEventListener("click", function() {
//	if (tg.MainButton.isVisible && item == "7") {
//		tg.MainButton.hide();
//	}
//	else {
//		tg.MainButton.setText("Вы выбрали товар 7!");
//		item = "7";
//		tg.MainButton.show();
//	}
//});


