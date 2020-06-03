"use strict";
function generaNumero(Min,Max){

    let n = Math.floor((Max-Min+1)*Math.random())+Min;
    /*formula per generare un numero tra mix e max estremi inclusi*/
    return n;
}
let nSegreti=new Array(5);
const DIM=10;
window.onload=function () {
	let _body=document.getElementsByTagName("body")[0];
	let _Table=document.createElement("table");
	_body.appendChild(_Table);
	_Table.style.textAlign="center";
	_Table.style.margin = "0 auto";//centratura della tabella
	///creazioen celle
	for(let i=0;i<DIM;i++){
		let _tr = document.createElement("tr");
		_Table.appendChild(_tr);
		for(let j=0;j<DIM;j++){
			let _td = document.createElement("td");
			_tr.appendChild(_td);
			let _btn=document.createElement("button");
			_btn.classList.add("btnStyle");
			_btn.setAttribute("id","btn-" + i + "-" + j);
			_btn.addEventListener("click",Visualizza);
			_td.appendChild(_btn);
		}
	}
}
function Visualizza(){
	//lettura coordinate
	let id = this.getAttribute("id");
	id = id.split("-");
	let i = id[1];
	let j = id[2];
	this.innerHTML = i + " - " + j;
	this.style.backgroundColor = "red";
	this.disabled = true;
}