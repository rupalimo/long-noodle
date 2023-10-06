function checkMe(selected) {
	if (selected) {
		document.getElementById('divcheck').style.display = '';
	} else {
		document.getElementById('divcheck').style.display = 'none';
	}
}

// function save() {
// 	var checkbox = document.getElementById('confirm');
// 	localStorage.setItem('confirm', checkbox.checked);
// }

// function load() {
// 	var checked = JSON.parse(localStorage.getItem('confirm'));
// 	document.getElementById('confirm').checked = checked;
// }

// function wis() {
// 	location.reload();
// 	localStorage.clear();
// }

// load();

// create rsvp-item variable for the inputed value, .toString()
// on submit, need to add rsvp-item var value to

// onclick 'submit'
// 01 set text input toString() as var
// 02 store new value of var in html <p> element under div.rsvp, local storage
// 03 refresh text input to original

const btnShowAddress = document.querySelector('.address');

btnShowAddress.addEventListener('click', btnHideAddress);

function btnHideAddress() {
	if (btnShowAddress.textContent === 'to my place') {
		// address.style.display = 'block';
		btnShowAddress.textContent = '7470 Rue Lajeunesse Apt 201';
		btnShowAddress.style.border = '2px inset rgb(169, 133, 88)';
		btnShowAddress.style.backgroundColor = 'rgb(222, 208, 200)';
	} else {
		btnShowAddress.textContent = 'to my place';
		// address.style.display = 'none';
		btnShowAddress.style.border = '2px outset rgb(222, 208, 200)';
		btnShowAddress.style.backgroundColor = 'rgb(169, 133, 88)';
	}
}

const btnShowDate = document.querySelector('.date');

btnShowDate.addEventListener('click', btnHideDate);

function btnHideDate() {
	if (btnShowDate.textContent === 'on october 15') {
		btnShowDate.textContent = 'next sunday';
		btnShowDate.style.border = '2px inset #17ca36';
		btnShowDate.style.backgroundColor = '#7bff91';
	} else {
		btnShowDate.textContent = 'on october 15';
		btnShowDate.style.border = '2px outset #7bff91';
		btnShowDate.style.backgroundColor = '#17ca36';
	}
}

const btnShowTime = document.querySelector('.time');

btnShowTime.addEventListener('click', btnHideTime);

function btnHideTime() {
	if (btnShowTime.textContent === '6pm to late') {
		btnShowTime.textContent = 'whenever u want';
		btnShowTime.style.border = '2px inset #c365ea';
		btnShowTime.style.backgroundColor = '#dab8e9';
	} else {
		btnShowTime.textContent = '6pm to late';

		btnShowTime.style.border = '2px outset #dab8e9';
		btnShowTime.style.backgroundColor = '#c365ea';
	}
}
