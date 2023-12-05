//your JS code here. If required.
let de=document.querySelector("#form-info");

function deba(){
   let debasish={
    first:"First Name:"+document.getElementById("name1").value,
    last:"Lastst Name:"+document.getElementById("name2").value,
    phone:"PhoneNumber:"+document.getElementById("name3").value,
    Email:"Email ID:"+document.getElementById("name4").value,
   }
	let txt="";
   for(let x in debasish){
    txt+=debasish[x]+"\n";
   }
  alert(txt);
}