let input=document.querySelector(".inputBox");
let searchBtn=document.querySelector("#searchBtn");
let cases=document.querySelector("#case");
let recover=document.querySelector("#recover");
let death=document.querySelector("#death");
let negative=document.querySelector("#negative");
let select=document.querySelector("#sel");


async function data(){
	
   let urls=await fetch('https://api.covidtracking.com/v1/states/current.json').then(response=>response.json());

   
   for(let index=0;index<urls.length;index++){
	let states = urls[index].state;
		let option=document.createElement("option");
	option.innerText= states;
	option.value=states;
	select.append(option);
   }
    let values;
	async function newData(){
		values=sel.value.toLowerCase();
			
		let url=await fetch(`https://api.covidtracking.com/v1/states/${values}/current.json`).then(response=>response.json())
		  
		 
		
		death.innerHTML=`${url.death}`;
		cases.innerHTML=`${url.positive}`;
		negative.innerHTML= `${url.negative}`;
		recover.innerHTML=`${url.recovered}`;
	
	}
	select.addEventListener("change",()=>{
	
     newData();
	
	})


}

data();

