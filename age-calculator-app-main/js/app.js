let dayInput = document.querySelector('input[name=day]')
let monthInput = document.querySelector('input[name=month]')
let yearInput = document.querySelector('input[name=year]')

let dayDisplay = document.querySelector('#days-display')
let yearsDisplay = document.querySelector('#years-display')
let monthsDisplay = document.querySelector('#months-display')

let birthDay;
let birthMonth;
let birthYear;

let isValid;

let currDate = new Date()

dayInput.addEventListener('input', () => {
    birthDay = dayInput.value
    if(birthDay > 31 || birthDay < 1){
        isValid = false;
        document.querySelector('#day-error').style.display = "block"
        dayInput.style.borderColor = "#FF5959"
        document.querySelector('#day-label').style.color = "#FF5959"
    }

    else {
        document.querySelector('#day-error').style.display = "none"
        dayInput.style.borderColor = "#716F6F"
        document.querySelector('#day-label').style.color = "#716F6F"
        isValid = true;
    }
})

monthInput.addEventListener('input', () => {
    birthMonth = monthInput.value
    if(birthMonth > 12 || birthMonth < 1){
        isValid = false;
        document.querySelector('#month-error').style.display = "block"
        monthInput.style.borderColor = "#FF5959"
        document.querySelector('#month-label').style.color = "#FF5959"
        
    }

    else {
        document.querySelector('#month-error').style.display = "none"
        monthInput.style.borderColor = "#DCDCDC"
        document.querySelector('#month-label').style.color = "#DCDCDC"
        isValid = true;
    }
})

yearInput.addEventListener('input', () => {
    birthYear = yearInput.value
    if(birthYear > currDate.getFullYear()){
        isValid = false;
        document.querySelector('#year-error').style.display = "block"
        yearInput.style.borderColor = "#FF5959"
        document.querySelector('#year-label').style.color = "#FF5959"
    }

    else {
        document.querySelector('#year-error').style.display = "none"
        yearInput.style.borderColor = "#DCDCDC"
        document.querySelector('#year-label').style.color = "#DCDCDC"
        isValid = true;
    }
})

function validate(){
    
    if(isValid){
        calcAge()
    }
    
}

function calcAge() {
    let currYear = currDate.getFullYear();
    let currMonth = currDate.getMonth() + 1
    let currDay = currDate.getDate()
    let years;
    let day;
    let month;
    let prevMonthDays;
    let prevMonth;

    years = currYear - birthYear

    console.log("Curr Month: " + currMonth)
    console.log("Birth Month: " + birthMonth)

    if(currMonth <= birthMonth){
        years -= 1;
        month = (currMonth + 12) - birthMonth
        month <= 0 ? month = 12 : month = month;
        console.log("CalcMonth: " + month)
    }

    else{
        month = currMonth - birthMonth
        month <= 0 ? month = 12 : month = month;
    }

    console.log("Month after calc years " + month)


    if(currDay < birthDay){
        month--;
        
        if(currMonth - 1 == 0){
            prevMonth = 12
        }

        else{
            prevMonth = currMonth - 1
        }

        console.log("Prev Month: " + prevMonth)
        console.log("Month: " + month)
        switch(prevMonth){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 11:
            case 0: 
                prevMonthDays = 31
                break;
            case 4:
            case 6:
            case 9:
                prevMonthDays = 30
                break;
            case 2:
                currYear % 4 == 0 ? prevMonthDays = 29 : prevMonthDays = 28
                break;

            default:
                console.log("Error")
        }
        
        day = (currDay + prevMonthDays) - birthDay
    }

    else{
        day = currDay - birthDay
    }

    yearsDisplay.innerHTML = years
    monthsDisplay.innerHTML = month
    dayDisplay.innerHTML = day
    
}

