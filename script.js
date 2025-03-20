const toggleout = document.getElementById("toggleout");
const togglein = document.getElementById("togglein");
const boxContainer = document.getElementById("box-container");
const moon = document.getElementById("moon");

togglein.addEventListener("click",()=>{
        boxContainer.classList.toggle("darkmode");
        togglein.classList.toggle("in");
})
//        if(isDark === false){
//     boxContainer.classList.add("darkmode");
// }
// else{
//     boxContainer.classList.remove("darkmode");
//     togglein.classList.remove("in");
//     isDark = false;
// }