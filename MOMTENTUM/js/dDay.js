const dDayDiv = document.querySelector(".dDay");
const dDayForm = document.querySelector(".dDay-form");
const dDayDateInput = document.querySelector('.dDay_Date');
const dDayTitleInput = document.querySelector('.dDay_Title');


const today = koreaDate(new Date());
const todayFormat = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;

dDayDateInput.value = todayFormat;


const DDAY_KEY = "dDay";
let dDays = [];

function saveDdays(){
    
    localStorage.setItem(DDAY_KEY, JSON.stringify(dDays));
}

function deleteDdayBox(event){
    const div = event.target.parentElement;
    div.remove();
    dDays = dDays.filter((day) => day.id != parseInt(div.id));
    saveDdays();
}


function paintDday(newDays){
    const div = document.createElement("div");
    const article =document.createComment("article");
    const btn = document.createElement("button");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");
    
    div.id = newDays.id;
    div.classList.add("newdDay");
    div.classList.add("newdDayBox");
    btn.classList.add("newdDayDelbtn");
    span1.classList.add("newdDayDate");
    span2.classList.add("newdDayCount");
    span3.classList.add("newdDayTtitle");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteDdayBox);
    
    span1.innerText = newDays.endday;
    span2.innerText = newDays.countday
    span3.innerText = newDays.title;

    div.appendChild(btn);
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);
    dDayDiv.appendChild(div);
    div.appendChild(article);
}


//pc설정 무관
function koreaDate(date){
    const utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000); // utc 표준시 도출
    const kstGap = 9 * 60 * 60 * 1000; // 한국 kst 기준시간 더하기
    let koreaDate = new Date(utc + kstGap); // 한국 시간으로 date 객체 만들기(오늘)
    koreaDate = new Date(koreaDate.setHours(0, 0, 0, 0)); // 당일
    return koreaDate
}

function addBtnSubmit(event){
    event.preventDefault();

    console.log(dDays);

    if(dDays.length >= 3){
        alert("디데이는 총 3개까지 가능합니다.");
        dDayTitleInput.value = "";
      

    }else{

    const endDate = koreaDate(new Date(dDayDateInput.value));
    const timedelta = endDate - today;

    let countday = Math.floor(timedelta / (1000 * 60 * 60 * 24));

    console.log(countday);

    if (countday > 0){
        countday = countday * -1;
    }
    else if (countday === 0){
        countday = "- Day"
    }
    else{
        countday = "+" + Math.abs(countday);
    }

    const newDays = {
        id : Date.now(),
        endday : dDayDateInput.value,
        countday : `✨D${countday} ✨`,
        title : dDayTitleInput.value,
    }
    dDays.push(newDays);
    paintDday(newDays);
    saveDdays();
    dDayDateInput.value = todayFormat;
    dDayTitleInput.value = "";
    }
}

dDayForm.addEventListener("submit", addBtnSubmit);

const savedDdays = localStorage.getItem(DDAY_KEY);

if (savedDdays !== null){
    const parsedDdays = JSON.parse(savedDdays);
    dDays = parsedDdays;
    parsedDdays.forEach(paintDday);
}

