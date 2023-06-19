
    let button= document.getElementById('btn1')
    button.addEventListener('click', createTable)

    let names = document.getElementById('name');
     let plate = document.getElementById('plate');
     let model = document.getElementById('model');
     let phone = document.getElementById('phone');
     let nameErrors=document.getElementById('nameError')
     let phoneErrors=document.getElementById('phoneError')
     let plateErrors=document.getElementById('plateError')
     let modelErrors=document.getElementById('modelError')
     let ModalFooter=document.getElementById("modalFooter")
     let ModalBody=document.getElementById("modalBody")
     let ModalHeader=document.getElementById("modalHeader")
     let Modaltitle=document.getElementById("receiptModalLabel")
     const myModal = document.getElementById('receiptModal')
     
     let print=document.createElement('input');
     print.type = "button"; 
     print.id="downloadBtn"
     print.value = "DOWNLOAD";
     print.style = " background: yellow; border: 0; font-size: 14px; font-weight: 600; line-height: 2.5;  outline: transparent; padding: 0 1rem; text-align: center;color:black;border-radius:7px;"


let counter = 0;
function createTable(){
  let na = document.getElementById('name').value;
  if (na == "") {
    nameErrors.innerHTML=`<i class="bi bi-exclamation-circle"></i> Name must be filled out`
    nameErrors.style=`color: red;font-size: 11px;margin-top:0.3em`
    return
    
  }
  if (na != "") {
    nameErrors.innerHTML= ``
  }
  let pho = document.getElementById('phone').value;
  if (pho == "") {
    phoneErrors.innerHTML=`<i class="bi bi-exclamation-circle"></i> Phone Number must be filled out`
    phoneErrors.style=`color: red;font-size: 11px;margin-top:0.3em`
    return
  }
  if (pho != "") {
    phoneErrors.innerHTML= ``
  }
  let pla = document.getElementById('plate').value;
  if (pla == "") {
    plateErrors.innerHTML=`<i class="bi bi-exclamation-circle"></i> License plate must be filled out`
    plateErrors.style=`color: red;font-size: 11px;margin-top:0.3em`
    return
  }
  if (pla != "") {
    plateErrors.innerHTML= ``
  }
  let mod = document.getElementById('model').value;
  if (mod == "") {
    modelErrors.innerHTML=`<i class="bi bi-exclamation-circle"></i> Car Mode; plate must be filled out`
    modelErrors.style=`color: red;font-size: 11px;margin-top:0.3em`
    return
  }
  if (mod != "") {
    modelErrors.innerHTML= ``
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
    let secondsinMinutes=seconds/60
    let arrivalTimeinMinutes=(hours*60)+minutes+(Math.floor(secondsinMinutes))
    cell5.innerHTML = date.toUTCString();
    
        

    let remover=document.createElement('input');
          remover.type = "button"; 
          remover.id="removebtn"
          remover.value = "REMOVE";
          remover.style = " background: red; border: 0; font-size: 12px; font-weight: 600; line-height: 2.5;  outline: transparent; padding: 0 .3rem;padding-left: .9rem;padding-right: .9rem; text-align: center;color:black;border-radius:7px;"
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
    let Rcell6 = rowr.insertCell(6);
    let currrentTime = new Date()
        let currenthours=currrentTime.getHours()
        let currentminutes=currrentTime.getMinutes()
        let currentSeconds=currrentTime.getSeconds()
        let currentSecondsinMinutes=(currentSeconds)/60
    let currrentTimeinMinutes = (currenthours*60)+currentminutes+(Math.floor(currentSecondsinMinutes))
    let minutesLapsed=currrentTimeinMinutes- arrivalTimeinMinutes
              let totaldue = Math.floor(minutesLapsed)*1
    
    Rcell0.innerHTML = names.value;
    Rcell1.innerHTML = phone.value;
    Rcell2.innerHTML = plate.value;
    Rcell3.innerHTML = model.value;
    Rcell4.innerHTML = minutesLapsed
    Rcell5.innerHTML = totaldue
    let view =document.createElement('input');
          view.type = "button"; 
          view.id="downloadBtn"
          view.value = "VIEW";
          view.style = " background: yellow; border: 0; font-size: 12px; font-weight: 600; line-height: 2.5;  outline: transparent; padding: 0 .3rem;padding-left: .8rem;padding-right: .8rem; text-align: center;color:black;border-radius:9px;margin-right:.2rem;"
          Rcell6.appendChild(view)
          view.setAttribute("data-bs-toggle", "modal");
          view.setAttribute("data-bs-target", "#receiptModal");
    
    let removerR=document.createElement('input');
          removerR.type = "button"; 
          removerR.id="removebtn"
          removerR.value = "REMOVE";
          removerR.style = " background: red; border: 0; font-size: 12px; font-weight: 600;padding-left: .9rem;padding-right: .9rem; line-height: 2.5;  outline: transparent; padding: 0 .3rem; text-align: center;color:black;border-radius:7px;"
          Rcell6.appendChild(removerR)
          removerR.onclick = function removeRows(){
            const element = document.getElementById(innerRowr);
            element.remove(innerRowr);
          }
    

          ModalFooter.appendChild(print)
          Modaltitle.innerHTML=``
          let receiptDateandTime= new Date()
          let receiptDate=receiptDateandTime.getDate()+"/"+receiptDateandTime.getMonth()+"/"+ receiptDateandTime.getFullYear()

  ModalBody.innerHTML=`
  <center><h3> Parking Details </h3></center>
  <br><br>
  <p style="text-align:right;position:relative;">Date: ${receiptDate}<p>
  <br>
  <p><i class="bi bi-person"></i> Name : &ensp;${names.value}</p>
  <p><i class="bi bi-telephone-forward"></i> Phone	: &ensp;${phone.value}</p>
  <p><i class="fa fa-list-alt" aria-hidden="true"></i> Plate	:  &ensp;${plate.value}<p>
  <p><i class="lni lni-car-alt"></i> Model	:  ${model.value}</p> 
  <p><i class="bi bi-clock"></i> Time Elasped In Minutes :  &ensp;${minutesLapsed}</p>	
  <p><i class="bi bi-cash"></i> Total Due In Birr :  &ensp;${totaldue}</p>
`

ModalHeader.style=`
background-color:black;
color:yellow;
border-color: black;
`
ModalBody.style=`
background-color:black;
color:yellow;
`
Modaltitle.style=`
background-color:black;
color:yellow;
text-align:center;
`
ModalFooter.style=`
background-color:black;
color:yellow;
border-color: black;
`


 
          print.onclick = function myfunc(){
            // if you are using a different 'id' in the div, make sure you replace it here.
            
            html2canvas(ModalBody).then(function(canvas) {
                canvas.toBlob(function(blob) {
                    window.saveAs(blob, "Receipt.png");
                });
            });
        };

        

      
      }
  
      remover.onclick =function removeRow(){
        const element = document.getElementById(innerRow);
        element.remove(innerRow);
        createReceiptTable();
    } 
    } 
        
    
            
    
  
