"use strict";
function generaNumero(Min,Max){

    let n = Math.floor((Max-Min+1)*Math.random())+Min;
    /*formula per generare un numero tra mix e max estremi inclusi*/
    return n;
}
let lev = 0;
const Dim=10;
window.onload=function () {
	let _wrapper=document.getElementById("wrapper")
	for(let i=0;i<Dim;i++)
		for(let j=0;j<Dim;j++)
		{
			let _div=document.createElement("div");
			_div.id = "Btn " + i +" " +j;
			_wrapper.appendChild(_div);
		}
	setInterval(visualizza, 500);
	function visualizza(){
		reset();
		disegnaConrnice();
		if(lev==4)
			lev=-1;
		lev++;

	}
	function disegnaConrnice(){
		let r1=lev;
		let r2=Dim-lev-1;
		for(let i=lev;i<Dim-lev;i++){
			let _btn1 = document.getElementById("Btn "+r1+" "+i);
			_btn1.style.backgroundColor="#f00";
			let _btn2 = document.getElementById("Btn "+r2+" "+i);
			_btn2.style.backgroundColor="#f00";
			let _btn3 = document.getElementById("Btn "+i+" "+r1);
			_btn3.style.backgroundColor="#f00";
			let _btn4 = document.getElementById("Btn "+i+" "+r2);
			_btn4.style.backgroundColor="#f00";
		}
			
	}
	function reset(){
		for(let i=0;i<Dim;i++)
			for(let j=0;j<Dim;j++){
				let _btn = document.getElementById("Btn "+i+" "+j);
				_btn.style.backgroundColor="#CCC";
			}
	}



}