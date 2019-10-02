//Her skal du skrive din typescriptkode
let element0:HTMLElement=<HTMLElement>document.getElementById("0");
element0.innerText="Sukkerfri yoghurt";
if (element0.hasAttribute("class"))

{
console.log("element has class");
(element0.setAttribute("class","sundt"));


}

let elementList1:HTMLCollectionOf<HTMLElement>=<HTMLCollectionOf<HTMLElement>>document.getElementsByClassName("sundt");
for (let i =0; i<elementList1.length;i++){
elementList1[i].style.backgroundColor="lightblue";
elementList1[i].style.color="black";
if (i%2==0)
elementList1[i].style.borderRadius="";
if (i%2==1)
elementList1[i].style.borderRadius="132px";
}


//let elementList2:HTMLCollectionOf

