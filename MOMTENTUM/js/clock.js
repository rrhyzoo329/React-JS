
/* 시계 함수 만들기
    setInterval(실행 function,실행시간) : 함수를 특정시간마다 실행 시키기 5초 : 5000
    Date 함수 이용하여 년도, 날짜, 시간 가지고 오기  
 */

    const clockContainer = document.querySelector(".clock");
    const mainClockContainer = document.querySelector(".mainClock");

    dayTitle = clockContainer.querySelector("span:last-child");
    clockTitle = clockContainer.querySelector("span:first-child");

    mDayTitle = mainClockContainer.querySelector("span:last-child");
    mClockTitle = mainClockContainer.querySelector("span:first-child");

//mainclock
const getTime = () => {
    const date = new Date();
    //"1" >> "01"로 변경하기 : padStart(원하는 글자수,falut일시 추가되는 문자)
    // 숫자인 date를 String으로 덮은 후 padStart 함수 이용
    //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    //const hours = String(date.getHours()).padStart(2,"0");
    //const minutes = String(date.getMinutes()).padStart(2,"0");
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    let amPm = 'ampm';

    if(hours<12){
        amPm = 'AM';

    } else{
        amPm = 'PM';
    } 



    dayTitle.innerText = `${year}년 ${month < 10 ? `0${month}` : month}월 ${day < 10 ? `0${day}` : day}일`;
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` 
    : minutes} ${amPm}`;

    mDayTitle.innerText = `${year}년 ${month < 10 ? `0${month}` : month}월 ${day < 10 ? `0${day}` : day}일`;
    mClockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` 
    : minutes} ${amPm}`;
}


//새로고침시 시계 다시 실행시 바로 실행 
function init(){
    getTime();
    setInterval(getTime, 1000); 
}
 
init();