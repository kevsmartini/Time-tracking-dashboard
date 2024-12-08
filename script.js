const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const workHours = document.querySelector(".work-hours");
const playHours = document.querySelector(".play-hours");
const studyHours = document.querySelector(".study-hours");
const exerciseHours = document.querySelector(".exercise-hours");
const socialHours = document.querySelector(".social-hours");
const selfCareHours = document.querySelector(".self-care-hours");
const workLastWeekHours = document.querySelector(".work-last-week-hours");
const playLastWeekHours = document.querySelector(".play-last-week-hours");
const studyLastWeekHours = document.querySelector(".study-last-week-hours");
const exerciseLastWeekHours = document.querySelector(".exercise-last-week-hours");
const socialLastWeekHours = document.querySelector(".social-last-week-hours");
const selfCareLastWeekHours = document.querySelector(".self-care-last-week-hours");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {

const globalData= (title)=>{

    for (const el of data) {
        if (el.title === "Work") {
          workHours.textContent = el.timeframes[title].current;
          workLastWeekHours.textContent = el.timeframes[title].previous;
        }
        if (el.title === "Play") {
          playHours.textContent = el.timeframes[title].current;
          playLastWeekHours.textContent = el.timeframes[title].previous;
        }
  
        if (el.title === "Study") {
            studyHours.textContent = el.timeframes[title].current;
            studyLastWeekHours.textContent = el.timeframes[title].previous;
          }
          if (el.title === "Exercise") {
            exerciseHours.textContent = el.timeframes[title].current;
            exerciseLastWeekHours.textContent = el.timeframes[title].previous;
          }
          if (el.title === "Social") {
            socialHours.textContent = el.timeframes[title].current;
            socialLastWeekHours.textContent = el.timeframes[title].previous;
          }
  
          if (el.title === "Self Care") {
            selfCareHours.textContent = el.timeframes[title].current;
            selfCareLastWeekHours.textContent = el.timeframes[title].previous;
          }
      }
       

}


    daily.addEventListener("click", (e) => {
        const eventTitle =e.target.textContent.toLowerCase()

      globalData(eventTitle)
    });
    
    weekly.addEventListener("click", (e) => {
        const eventTitle =e.target.textContent.toLowerCase()

      globalData(eventTitle)
    });

    monthly.addEventListener("click", (e) => {
        const eventTitle =e.target.textContent.toLowerCase()

      globalData(eventTitle)
    });
  });


