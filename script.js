function current_time(City,ofst){
    d=new Date();
    utc=d.getTime()+(d.getTimezoneOffset()*60000)
    nd=new Date(utc+(3600000*ofst));
    dss=document.getElementById("ds_time").innerText
    dss=nd.toLocaleString();
    
    l=dss.length
    i=0;
    for(i=0;i<=l;i++){
        if(dss[i]==","){
            k=i;
        }
    }
    document.getElementById("ds_time").innerText=dss.slice(k+1,l)
    document.getElementById("d_para").innerText='('+dss.slice(0,k)+')'
    setInterval(time_zone, 1000);
}
// document.getElementById("d_para").innerText=dss.slice(0,k)

city='Bombay'
offstt='+5.5'
function time_zone(){
    current_time(city,offstt)
}
current_time(city,offstt)

function INDIA(){
  city='Bombay'
  offstt='+5.5'
}
function SINGAPORE(){
  city='Singapore'
  offstt='+8'
}
function LONDON(){
  city='Londom'
  offstt='+1'
}
function USA(){
  city='USA'
  offstt='-4'
}
var x = document.getElementsByTagName("nav")[0];
function toggleNav() {
   if (x.className === "") {
      x.className = " openNav";
   } else {
      x.className = "";
   }
}
document.querySelector(".hamburger").addEventListener("click", toggleNav);