const dayNameEt= ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
const monthNameEt = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

const dateFormattedEt = function(){
	//function dateFormatted(){
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();
	let dayNow = timeNow.getDay();
	return dateNow + ". " + monthNameEt[monthNow] + ", " + dayNameEt[dayNow] + ", " + yearNow;
}

const timeFormattedEt = function(){
	let timeNow = new Date();
	let hourNow = timeNow.getHours();
	let minuteNow = timeNow.getMinutes();
	let secondNow = timeNow.getSeconds();
	let clockTime = (hourNow + ":" + minuteNow + ":" + secondNow);
	return clockTime;
}

const partOfDay = function(){
	let dPart = "suvaline aeg";
	let hourNow = new Date().getHours();
	//OR		AND &&
	//<	> 	<=	>=	!=	==	(=== sama tüüpi ka)
	if(hourNow > 8 && hourNow <= 16){
		dPart = "kooliaeg";
	}
	return dPart
}

//eksport
module.exports = {dateFormattedEt: dateFormattedEt, timeFormattedEt: timeFormattedEt, dayNameEt: dayNameEt, monthNameEt: monthNameEt, dayPart: partOfDay};

//if(tingimus){
//	if(kellatingimus){
//		
//	}
//}