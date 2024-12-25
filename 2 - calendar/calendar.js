function getMonthName(monthNumber){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthNumber];
}

function transformWeekday(weekday){
    if(weekday!=0) return weekday-1;
    else return 6;
}

const now = new Date();
const day = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();

let calendarMonth = month;
let calendarYear = year; 

const monthTitle = document.getElementById('month-title');
const calendarTable = document.querySelector('.days');

function generateCalendar(currentMonth,currentYear){
    /* actualizar titulo */
    monthTitle.innerHTML = `${getMonthName(currentMonth)} ${currentYear}`;

    // retorna valor númerico del día de la semana que corresponde al primer día del mes
    let firstDay = transformWeekday(new Date(currentYear, currentMonth, 1).getDay());
    // última día (fecha) del mes. corresponde al día 0 del mes siguiente
    let lastDate = new Date(currentYear,currentMonth+1,0).getDate();
    // día de la semana del último día del mes
    let lastDay = transformWeekday(new Date(currentYear,currentMonth,lastDate).getDay());
    
    //datos mes anterior
    let lastDatePrev = new Date(currentYear,currentMonth,0).getDate();
    let lastDayPrev = transformWeekday(new Date(currentYear,currentMonth-1,lastDatePrev).getDay());


    // variable auxiliar para almacenar el calendario que se generará
    let aux = "";

    // saltarse hasta donde empieza el mes
    for (let i = firstDay; i > 0; i--) {
        aux += `<li class="innactive-day">${lastDatePrev - i + 1}</li>`;
    }

    //agregar fechas
    for(let i=1;i<=lastDate;i++){
        if(i == day && currentMonth == month && currentYear == year){
            aux += `<li class="is-today">${i}</li>`;
        }
        else {
            aux += `<li class="not-today">${i}</li>`;
        }
    }

    if(lastDay!=6){
        for(let i=1;i<(7-lastDay);i++){
            aux += `<li class="innactive-day">${i}</li>`
        }
    }

    calendarTable.innerHTML = aux;


}

function nextMonth(){
    if(calendarMonth==11){
        calendarMonth=0;
        calendarYear++;
        generateCalendar(calendarMonth,calendarYear);
    }
    else {
        calendarMonth++;
        generateCalendar(calendarMonth,calendarYear);
    }
}

function prevMonth(){
    if(calendarMonth==0){
        calendarMonth=11;
        calendarYear--;
        generateCalendar(calendarMonth,calendarYear);
    }
    else {
        calendarMonth--;
        generateCalendar(calendarMonth,calendarYear);
    }
}

generateCalendar(calendarMonth,calendarYear);
