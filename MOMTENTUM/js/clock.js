
/* 시계 함수 만들기
    setInterval(실행 function,실행시간) : 함수를 특정시간마다 실행 시키기 5초 : 5000
    Date 함수 이용하여 년도, 날짜, 시간 가지고 오기  
 */

const clock = document.querySelector('h2#clock');

const getTime = () => {
    const date = new Date();

    //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    //"1" >> "01"로 변경하기 : padStart(원하는 글자수,falut일시 추가되는 문자)
    // 숫자인 date를 String으로 덮은 후 padStart 함수 이용

    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const senconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${senconds}`;

}

//새로고침시 시계 다시 실행시 바로 실행 
getTime();
setInterval(getTime,1000);