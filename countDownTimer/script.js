const daysInner=document.getElementById("Days")
const HoursInner=document.getElementById("Hours")
const MinutesInner=document.getElementById("Minutes")
const SecondsInner=document.getElementById("Seconds")

//inital date
const newYear=new Date("Jan 1,2024");
function CountDown(){
   const date=new Date();
   const TotalSeconds=(newYear-date)/1000; //total seconds
   const Seconds=Math.floor(TotalSeconds)%60;
   const Minutes=Math.floor(TotalSeconds/60)%60;
   const Hours=Math.floor(TotalSeconds/60/60)%24;
   const Days=Math.floor(TotalSeconds/60/60/24);

   daysInner.innerHTML=formatTime(Days);
   HoursInner.innerHTML=formatTime(Hours);
   MinutesInner.innerHTML=formatTime(Minutes);
   SecondsInner.innerHTML=formatTime(Seconds);

}
function formatTime(time){
    return time<10?`0${time}`:time;
}
CountDown();
setInterval(CountDown,1000)

