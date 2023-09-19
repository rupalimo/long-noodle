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
