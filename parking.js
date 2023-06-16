
    let button= document.getElementById('btn1')
    button.addEventListener('click', createTable)

    let names = document.getElementById('name');
     let plate = document.getElementById('plate');
     let model = document.getElementById('model');
     let phone = document.getElementById('phone');
     
let counter = 0;
function createTable(){
  let na = document.getElementById('name').value;
  if (na == "") {
    alert("Name must be filled out");
    return false;
  }
  let pla = document.getElementById('plate').value;
  if (pla == "") {
    alert("Plate must be filled out");
    return false;
  }
  let mod = document.getElementById('model').value;
  if (mod == "") {
    alert("Car Model  must be filled out");
    return false;
  }
  let pho = document.getElementById('phone').value;
  if (pho == "") {
    alert("Phone Number  must be filled out");
    return false;
  }
  
    let table = document.getElementById("parkingtable");
    let row = table.insertRow();
    let innerRow = document.getElementById('parkingtable').rows.length;
    row.id=innerRow
   
    let cell0 = row.insertCell(0)
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);
    let cell5 = row.insertCell(5);
    let cell6 = row.insertCell(6);
    counter++;
    cell0.innerHTML = counter;
    cell1.innerHTML = names.value;
    cell2.innerHTML = phone.value;
    cell3.innerHTML = plate.value;
    cell4.innerHTML = model.value;
    let date = new Date()
    let hours=date.getHours()
    let minutes=date.getMinutes()
    let seconds = date.getSeconds()
    let arrivalTimeinMinutes=(hours*60)+minutes+(seconds/60)
    cell5.innerHTML = date.toUTCString();
    
        

    let remover=document.createElement('input');
          remover.type = "button"; 
          remover.id="removebtn"
          remover.value = "Remove";
          remover.style = " background: red; border: 0; font-size: 16px; font-weight: 400; line-height: 2.5;  outline: transparent; padding: 0 1rem; text-align: center;color:black;border-radius:7px;"
          cell6.appendChild(remover); 

          
            
          function createReceiptTable(){        
    let Rtable = document.getElementById("receipttable");
    let rowr = Rtable.insertRow();
    
    let innerRowr = document.getElementById('receipttable').rows.length;
    rowr.id=innerRowr
    
    let Rcell0 = rowr.insertCell(0)
    let Rcell1 = rowr.insertCell(1);
    let Rcell2 = rowr.insertCell(2);
    let Rcell3 = rowr.insertCell(3);
    let Rcell4 = rowr.insertCell(4);
    let Rcell5 = rowr.insertCell(5);
    let currrentTime = new Date()
        let currenthours=currrentTime.getHours()
        let currentminutes=currrentTime.getMinutes()
        let currentSeconds=currrentTime.getSeconds()
    let currrentTimeinMinutes = (currenthours*60)+currentminutes+((currentSeconds)/60)
    let minutesLapsed=currrentTimeinMinutes- arrivalTimeinMinutes
              let totaldue = minutesLapsed*1
    
    Rcell0.innerHTML = names.value;
    Rcell1.innerHTML = phone.value;
    Rcell2.innerHTML = plate.value;
    Rcell3.innerHTML = model.value;
    Rcell4.innerHTML = minutesLapsed
    Rcell5.innerHTML = totaldue
    
  }
    remover.onclick = function removeRow(){
        const element = document.getElementById(innerRow);
        element.remove(innerRow);
        
              
        createReceiptTable()
        
    }
            
    }
