"use strict";
function generaNumero(Min,Max){

    let n = Math.floor((Max-Min+1)*Math.random())+Min;
    /*formula per generare un numero tra mix e max estremi inclusi*/
    return n;
}

window.onload=function () {
	let _wrapper=document.getElementById("wrapper")
	let _txtPwd=document.getElementById("txtPwd");
	let _txtCaptcha=document.getElementById("txtCaptcha");
	setInterval(crea,200);
	function crea(){
		let div=document.createElement("div");
		let r=generaNumero(0,255);
		let g=generaNumero(0,255);
		let b=generaNumero(0,255);
		let a=generaNumero(0,(600-r));
		let c=generaNumero(0,(400-g));
		div.style.width=r+"px";
		div.style.height=g+"px";
		div.style.backgroundColor="rgb("+r+","+g+","+b+")";
		div.style.position="absolute";
		div.style.top=c+"px";
		div.style.left=a+"px";
		_wrapper.appendChild(div);
		
	}
	



}