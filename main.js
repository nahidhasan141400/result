let button = document.querySelector('#button2');
let show = document.querySelector('.show');
let rool = document.querySelector('#rool');
let roll = document.querySelector('#roll');
let bo = document.querySelector('#bo');


button.addEventListener('click', (e)=>{
    e.preventDefault()
     let v = roll.value;
     rool.innerHTML = v;
    //  bo.scrollTo(100,10)
     bo.style.overflowX = "hidden";
     show.style.display= "flex";
});