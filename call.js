let dial = document.getElementById('dial')
let audi = document.getElementById('audi')
let play = new Audio('Iphone.mp3')
let input1;
let sec = document.getElementById('all')

function numbers(param) {
input1 = document.getElementById('input1')
    input1.value += param
}

function diall() {
input1 = document.getElementById('input1')

    if (input1.value == "") {
        alert('Fil in digits First Then Call')
    } else {
        play.play()
        sec.innerHTML = "Set this page yourself"
    }
}

function clr() {
    var output = document.getElementById('input1').value
    document.getElementById('input1').value = output.substr(0, (output.length - 1))
}



let input5 =document.getElementById('input5')
let result = document.getElementById('result')
let arry = []
let mon = " "
function addem(){
    if(input5.value === ""){
            return
    }else{
        result.innerHTML = ""
        console.log(input5.value);
        arry.push(input5.value)
        arry.forEach(function (items,index){
        result.innerHTML+=`<div class="gued"><h1 class="bub"> ${items} </h1>${"&nbsp;"}${"&nbsp;"}${"&nbsp;"}<button onclick="remove(${index})"><i class="fas fa-trash-alt"></i></button></div>`
        })
        input5.value = ""
    }
}
function remove(index){
    result.textContent=""
    arry.splice(index, 1)
    arry.forEach(function (items,index){
        result.innerHTML+=`<div class="gued"><h1> ${items} </h1>${"&nbsp;"}${"&nbsp;"}${"&nbsp;"}<button class="btun" onclick="remove(${index})"><i class="fas fa-trash-alt"></i></button></div>`
    })
}
function hey(){
     
    console.log(arry);
    arry = []
    console.log(arry);
    result.innerHTML = ""

    

}








