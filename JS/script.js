let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	arr = ['456456', '495459', '789789', '456498', '456123', '456789', '35678945'],
	currData = new Date(), // Текущая дата
	currDay = currData.getDay();// Текущий день недели
	/*a// Техническая переменная для определения текущего дня недели

	if (currDay == 0 || currDay == 6) {
		a = true;
	} else {
		a = false;
	}*/
	console.log(currDay);

for (let i = 0; i < week.length; i++) {

	// Вывод будних дней недели построчно
	if (i < 5 && (i+1) != currDay) {
		document.write('<p>');
		document.write(week[i]);
		document.write('</p>');
		} else if (i < 5 && (i+1) == currDay) {
			document.write('<p><i>');
			document.write(week[i]);
			document.write('</i></p>');
		} else if (i == 5 && (currDay != 6)){
			document.write('<p><b>');
			document.write(week[i]);
			document.write('</b></p>');
		} else if (i == 5 && (currDay == 6) ) {
			document.write('<p><b><i>');
			document.write(week[i]);
			document.write('</i></b></p>');
		} else if (i == 6 && (currDay == 0) ) {
			document.write('<p><b><i>');
			document.write(week[i]);
			document.write('</i></b></p>');
		} else if (i == 6 && (currDay != 0) ) {
			document.write('<p><b>');
			document.write(week[i]);
			document.write('</b></p>');
		}
	
	}

	
for (let j = 0; j < arr.length; j++) {
	if (arr[j][0] == '7' || arr[j][0] == '3') {
		document.write('<p>');
		document.write(arr[j]);
		document.write('<p>');
	}
}
