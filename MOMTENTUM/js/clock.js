
/* 시계 함수 만들기
    setInterval(실행 function,실행시간) : 함수를 특정시간마다 실행 시키기 5초 : 5000
    Date 함수 이용하여 년도, 날짜, 시간 가지고 오기  
 */

    const clockContainer = document.querySelector(".js-clock"),
    dayTitle = clockContainer.querySelector("h1"),
    clockTitle = clockContainer.querySelector("h2");

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
        amPm = 'am';

    } else{

        amPm = 'pm';
    } 

    dayTitle.innerText = `${year} - ${month < 10 ? `0${month}` : month} - ${day < 10 ? `0${day}` : day}`;
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} ${amPm} `;
}


//새로고침시 시계 다시 실행시 바로 실행 
function init(){
    getTime();
    setInterval(getTime, 1000); // ★ 1초 (1000ms) 마다 getTime 실행
}
 
init();