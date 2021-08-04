let currDay = new Date()
let dayTime = currDay.getHours()
if (dayTime >= 17 && dayTime < 23) {
	message = "Доброго вечора!"
} else if (dayTime >= 5 && dayTime < 11) {
	message = "Доброго ранку!" 
} else if (dayTime >= 11 && dayTime < 17) {
	message = "Доброго дня!"
} else {
	message = "Доброї ночі!"
}
console.log(message)

let currDay = new Date()
let dayTime = currDay.getHours()
switch(dayTime) {
  case 17 :
  	message = "Доброго вечора!"
  	break
  case 18 :
    message = "Доброго вечора!"
    break
  case 19 :
    message = "Доброго вечора!"
    break
  case 20 :
      message = "Доброго вечора!"
    break
  case 21 :
      message = "Доброго вечора!"
    break
  case 22 :
      message = "Доброго вечора!"
    break
  case 23 :
    message = "Доброго вечора!"
    break
  case 5 :
      message = "Доброго ранку!"
    break
  case 6 :
      message = "Доброго ранку!"
    break
  case 7 :
      message = "Доброго ранку!"
    break
  case 8 :
      message = "Доброго ранку!"
    break
  case 9 :
      message = "Доброго ранку!"
    break
  case 10 :
      message = "Доброго ранку!"
    break
  case 11 :
  	message = "Доброго дня!"
	break
  case 12 :
  	message = "Доброго дня!"
	break
  case 13 :
  	message = "Доброго дня!"
	break
  case 14 :
  	message = "Доброго дня!"
	break
  case 15 :
  	message = "Доброго дня!"
	break
  case 16 :
	message = "Доброго дня!"
	break
  default:
    message = "Доброї ночі!"
    break
}
console.log(message)