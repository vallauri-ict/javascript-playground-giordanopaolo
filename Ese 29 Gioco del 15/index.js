"use strict";
function generaNumero(Min,Max){

    let n = Math.floor((Max-Min+1)*Math.random())+Min;
    /*formula per generare un numero tra mix e max estremi inclusi*/
    return n;
}
const DIM=4;
window.onload=function () {
	let vet=[];
	for(let i=0;i<15;i++)
		vet[i]=i+1;
	let _wrapper=document.getElementById("wrapper");
	for(let i=0;i<DIM;i++)
		for(let j=0;j<DIM;j++){
			let _div=this.document.createElement("div");
			_div.id="btn-"+i+"-"+j;
			_div.innerHTML="";
			_div.addEventListener("click",sposta);
			_wrapper.appendChild(_div);
			if(vet.length!=0){
				let pos=generaNumero(0,vet.length-1);
				_div.innerHTML=vet[pos];
				vet.splice(pos,1);
				_div.style.backgroundColor="blue";
			}
				

		}

	function sposta(){
		let id = this.id.split("-");
		let riga = parseInt(id[1]);
		let col = parseInt(id[2]);
		if(col>0 && document.getElementById("btn-"+riga+"-"+(col-1)).innerHTML=="")
			swap(this,document.getElementById("btn-"+riga+"-"+(col-1)))
		if(col<3 && document.getElementById("btn-"+riga+"-"+(col+1)).innerHTML=="")
			swap(this,document.getElementById("btn-"+riga+"-"+(col+1)))
		if(riga>0 && document.getElementById("btn-"+(riga-1)+"-"+col).innerHTML=="")
			swap(this,document.getElementById("btn-"+(riga-1)+"-"+col))
		if(riga<3 && document.getElementById("btn-"+(riga+1)+"-"+col).innerHTML=="")
			swap(this,document.getElementById("btn-"+(riga+1)+"-"+col))




	}



}
function swap(div1,div2){
	let aus=div1.innerHTML;
	div1.innerHTML=div2.innerHTML;
	div2.innerHTML=aus;

	aus=div1.style.backgroundColor;
	div1.style.backgroundColor=div2.style.backgroundColor;
	div2.style.backgroundColor=aus;

}