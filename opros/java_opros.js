let box =document.getElementById('true')
let butcolor = document.querySelector('#true')
butcolor.addEventListener("click", color_change)
function color_change(){
    box.classList.add("variant_true")
}
let box1 =document.getElementById('true')
let butcolor1 = document.querySelector('#false1')
butcolor1.addEventListener("click", color_change)
function color_change(){
    box1.classList.add("variant_true")
}
let box2 =document.getElementById('true')
let butcolor2 = document.querySelector('#false2')
butcolor2.addEventListener("click", color_change)
function color_change(){
    box2.classList.add("variant_true")
}