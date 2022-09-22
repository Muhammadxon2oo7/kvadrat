const screenEl = document.getElementById("screen")
const result = document.getElementById("result")
const btnEl = document.getElementById("btn")
let numEl=prompt("son kiriting")
function NumFun(numRes){
    return numRes**2
}
btnEl.addEventListener("click" , ()=>{
    result.innerHTML = NumFun(numEl)
})


