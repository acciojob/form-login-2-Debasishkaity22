//your JS code here. If required.
let de=document.querySelector("#form-info");

function deba(){
   let debasish={
    first:"Firs Name:"+de.firstname.value,
    last:"Lastst Name:"+de.lastname.value,
    phone:"PhoneNumber:"+de.phoneno.value,
    Email:"Email ID:"+de.emailid.value
   }
	let txt="";
   for(let x in debasish){
    txt+=debasish[x]+"\n";
   }
  alert(txt);
}