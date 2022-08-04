'use strict';

const workspace = document.querySelector('.workspace');
const lastRowButton = document.getElementById('last-row-button');
let buttons = [];

/*
Works
function editRow(rowNumber) {
	if (buttons[rowNumber]) {
		for (let i = 0; i < daysInRow.length; i++) {
			daysInRow[i].classList.toggle('changable');
			daysInRow[i].removeEventListener('click', () => {
				daysInRow[i].classList.toggle('active_day');
				console.log('actday');
			});
		}
	} else {
		const daysInRow = document.querySelectorAll(`.row--${rowNumber}`);
		for (let i = 0; i < daysInRow.length; i++) {
			daysInRow[i].classList.toggle('changable');
			daysInRow[i].addEventListener('click', () => {
				daysInRow[i].classList.toggle('active_day');
				console.log('actday');
			});
		}
		console.log('Changed');
	}
}
*/

/*
Don't work
let daysInRow, biba;

function change() {
	console.log(biba, daysInRow[biba], day);
	daysInRow[biba].classList.toggle('active_day');
	console.log('actday');
}

function editRow(rowNumber) {
	if (buttons[rowNumber]) {
		daysInRow = document.querySelectorAll(`.row--${rowNumber}`);
		for (biba = 0; biba < daysInRow.length; biba++) {
			daysInRow[biba].classList.toggle('changable');
			daysInRow[biba].removeEventListener('click', change);
		}
	} else {
		daysInRow = document.querySelectorAll(`.row--${rowNumber}`);
		for (biba = 0; biba < daysInRow.length; biba++) {
			daysInRow[biba].classList.toggle('changable');
			daysInRow[biba].addEventListener('click', change);
		}
		buttons[rowNumber] = true;
		console.log('Changed');
	}
}
*/

/*
// WORKS
lastRowButton.addEventListener('click', () => {
	const rowPosition = document.querySelectorAll('.workspace__row').length - 1;
	document.getElementById('last-row').insertAdjacentHTML(
		'beforebegin',
		`<div class="workspace__row">
			<div class="day row--${rowPosition} day--0"></div>
			<div class="day row--${rowPosition} day--1"></div>
			<div class="day row--${rowPosition} day--2"></div>
			<div class="day row--${rowPosition} day--3"></div>
			<div class="day row--${rowPosition} day--4"></div>
			<div class="day row--${rowPosition} day--5"></div>
			<div class="day row--${rowPosition} day--6"></div>
			<div class="day day_gap"></div>
			<input class="day_input" type="text" readonly />
			<div class="day day_menu change--${rowPosition}" onclick="editRow(${rowPosition})">
				<div class="menu_line"></div>
			</div>
		</div>`
	);
	if (document.querySelectorAll('.workspace__row').length > 28) {
		lastRowButton.classList.add('hidden');
	}
});
*/
/*
let rowPosition = 0;
let buttonsClicked = [];
let days = {};
function change(row) {
	for (let day of document.querySelectorAll(`.row--${row}`)) {
		day.classList.toggle('changable');
	}
	document.getElementById(`input--${row}`).classList.toggle('changable');
	if (buttonsClicked[row]) {
		document.querySelector(`.delete--${row}`).style.width = '0px';
		document
			.getElementById(`input--${row}`)
			.setAttribute('readonly', 'readonly');
	} else {
		document.querySelector(`.delete--${row}`).style.width = '25px';
		document.getElementById(`input--${row}`).removeAttribute('readonly');
	}
	buttonsClicked[row] = buttonsClicked[row] ? false : true;
}

function day(row, day) {
	console.log(`in row ${row} day ${day}`);
	if (buttonsClicked[row]) {
		document.querySelectorAll(`.row--${row}`)[day].classList.remove('ha4');
		document
			.querySelectorAll(`.row--${row}`)
			[day].classList.toggle('active_day');
		days[row][day] = 1;
	} else if (!buttonsClicked[row] && days[row][day] === 1) {
		document
			.querySelectorAll(`.row--${row}`)
			[day].firstChild.setAttribute('src', 'images/half.svg');
		days[row][day]++;
	} else if (!buttonsClicked[row] && days[row][day] === 2) {
		document
			.querySelectorAll(`.row--${row}`)
			[day].firstChild.setAttribute('src', 'images/done.svg');
		days[row][day]++;
	} else if (!buttonsClicked[row] && days[row][day] === 3) {
		document
			.querySelectorAll(`.row--${row}`)
			[day].firstChild.setAttribute('src', 'images/go-next.svg');
		days[row][day]++;
	} else if (!buttonsClicked[row] && days[row][day] === 4) {
		document
			.querySelectorAll(`.row--${row}`)
			[day].firstChild.setAttribute('src', 'images/denied.svg');
		days[row][day]++;
	} else if (!buttonsClicked[row] && days[row][day] === 5) {
		document
			.querySelectorAll(`.row--${row}`)
			[day].firstChild.setAttribute('src', 'images/none.svg');
		days[row][day] = 1;
	}
}

// Adding new line
lastRowButton.addEventListener('click', () => {
	document.getElementById('last-row').insertAdjacentHTML(
		'beforebegin',
		`<div class="workspace__row">
			<div class="day row--${rowPosition} day--0" onClick="day(${rowPosition}, 0)"><img class="sd" src="images/none.svg" alt="" style="width:23px; height:23px;"></div>
			<div class="day row--${rowPosition} day--1" onClick="day(${rowPosition}, 1)"><img class="sd" src="images/none.svg" alt="" style="width:23px; height:23px;"></div>
			<div class="day row--${rowPosition} day--2" onClick="day(${rowPosition}, 2)"><img class="sd" src="images/none.svg" alt="" style="width:23px; height:23px;"></div>
			<div class="day row--${rowPosition} day--3" onClick="day(${rowPosition}, 3)"><img class="sd" src="images/none.svg" alt="" style="width:23px; height:23px;"></div>
			<div class="day row--${rowPosition} day--4" onClick="day(${rowPosition}, 4)"><img class="sd" src="images/none.svg" alt="" style="width:23px; height:23px;"></div>
			<div class="day row--${rowPosition} day--5" onClick="day(${rowPosition}, 5)"><img class="sd" src="images/none.svg" alt="" style="width:23px; height:23px;"></div>
			<div class="day row--${rowPosition} day--6" onClick="day(${rowPosition}, 6)"><img class="sd" src="images/none.svg" alt="" style="width:23px; height:23px;"></div>
			<div class="day day_gap"></div>
			<input class="day_input" id="input--${rowPosition}" type="text" readonly />
			<div class="day day_menu" id="change--${rowPosition}" onClick="change(${rowPosition})">
				<div class="menu_line"></div>
			</div>
			<div class="day delete delete--${rowPosition}"></div>
		</div>`
	);
	buttonsClicked[rowPosition] = false;
	days[rowPosition] = [0, 0, 0, 0, 0, 0, 0];

	rowPosition++;
	if (document.querySelectorAll('.workspace__row').length > 28) {
		lastRowButton.classList.add('hidden');
	}
});
*/

let rowPosition = 0;
let buttonsClicked = [];
let days = {};
function change(row) {
	for (let day of document.querySelectorAll(`.row--${row}`)) {
		day.classList.toggle('changable');
	}
	document.getElementById(`input--${row}`).classList.toggle('changable');
	if (buttonsClicked[row]) {
		document.querySelector(`.delete--${row}`).style.width = '0px';
		document
			.getElementById(`input--${row}`)
			.setAttribute('readonly', 'readonly');
	} else {
		document.querySelector(`.delete--${row}`).style.width = '25px';
		document.getElementById(`input--${row}`).removeAttribute('readonly');
	}
	buttonsClicked[row] = buttonsClicked[row] ? false : true;
}

function day(row, day) {
	console.log(`in row ${row} day ${day}`);
	if (buttonsClicked[row]) {
		document.querySelectorAll(`.row--${row}`)[day].classList.remove('ha4');
		document
			.querySelectorAll(`.row--${row}`)
			[day].classList.toggle('active_day');
		days[row][day] = 1;
	} else if (!buttonsClicked[row] && days[row][day] === 1) {
		document
			.querySelectorAll(`.row--${row}`)
			[day].firstChild.setAttribute('src', 'images/half.svg');
		days[row][day]++;
	} else if (!buttonsClicked[row] && days[row][day] === 2) {
		document
			.querySelectorAll(`.row--${row}`)
			[day].firstChild.setAttribute('src', 'images/done.svg');
		days[row][day]++;
	} else if (!buttonsClicked[row] && days[row][day] === 3) {
		document
			.querySelectorAll(`.row--${row}`)
			[day].firstChild.setAttribute('src', 'images/go-next.svg');
		days[row][day]++;
	} else if (!buttonsClicked[row] && days[row][day] === 4) {
		document
			.querySelectorAll(`.row--${row}`)
			[day].firstChild.setAttribute('src', 'images/denied.svg');
		days[row][day]++;
	} else if (!buttonsClicked[row] && days[row][day] === 5) {
		document
			.querySelectorAll(`.row--${row}`)
			[day].firstChild.setAttribute('src', 'images/none.svg');
		days[row][day] = 1;
	}
}

// Adding new line
lastRowButton.addEventListener('click', () => {
	document.getElementById('last-row').insertAdjacentHTML(
		'beforebegin',
		`<div class="workspace__row">
			<div class="day row--${rowPosition} day--0" onClick="day(${rowPosition}, 0)"><img class="sd" src="images/none.svg" alt="" style="width:23px; height:23px;"></div>
			<div class="day row--${rowPosition} day--1" onClick="day(${rowPosition}, 1)"><img class="sd" src="images/none.svg" alt="" style="width:23px; height:23px;"></div>
			<div class="day row--${rowPosition} day--2" onClick="day(${rowPosition}, 2)"><img class="sd" src="images/none.svg" alt="" style="width:23px; height:23px;"></div>
			<div class="day row--${rowPosition} day--3" onClick="day(${rowPosition}, 3)"><img class="sd" src="images/none.svg" alt="" style="width:23px; height:23px;"></div>
			<div class="day row--${rowPosition} day--4" onClick="day(${rowPosition}, 4)"><img class="sd" src="images/none.svg" alt="" style="width:23px; height:23px;"></div>
			<div class="day row--${rowPosition} day--5" onClick="day(${rowPosition}, 5)"><img class="sd" src="images/none.svg" alt="" style="width:23px; height:23px;"></div>
			<div class="day row--${rowPosition} day--6" onClick="day(${rowPosition}, 6)"><img class="sd" src="images/none.svg" alt="" style="width:23px; height:23px;"></div>
			<div class="day day_gap"></div>
			<input class="day_input" id="input--${rowPosition}" type="text" readonly />
			<div class="day day_menu" id="change--${rowPosition}" onClick="change(${rowPosition})">
				<div class="menu_line"></div>
			</div>
			<div class="day delete delete--${rowPosition}"></div>
		</div>`
	);
	buttonsClicked[rowPosition] = false;
	days[rowPosition] = [
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
	];

	rowPosition++;
	if (document.querySelectorAll('.workspace__row').length > 28) {
		lastRowButton.classList.add('hidden');
	}
});
