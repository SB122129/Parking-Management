    /** Author: Samson Berhanu
     * Email: samiberhanu12@gmail.com
     * A simple parking system that stores all the neccsary info of parked cars in a parking table and when a car ready
     * to check out it trnasfers all its info into a receipt table and calculates the total amount its due based on its time of arrival 
     * in the receipt table there is a view button that opens a modal with all the neccessary info of the cars stay in the parking lot, and provides
     * a download option which onclicked downloads a .png format of the modal
     */

    let button= document.getElementById('btn1');//an object to access the 'Register' button in the HTML form
    
    button.addEventListener('click', createTable);//an event listener that makes the 'Register' button excute the createTable() function defined below when clicked upon once

     let names = document.getElementById('name');
     let plate = document.getElementById('plate');
     let model = document.getElementById('model');
     let phone = document.getElementById('phone');
     let nameErrors=document.getElementById('nameError');
     let phoneErrors=document.getElementById('phoneError');
     let plateErrors=document.getElementById('plateError');
     let modelErrors=document.getElementById('modelError');
     let ModalFooter=document.getElementById("modalFooter");
     let ModalBody=document.getElementById("modalBody");
     let ModalHeader=document.getElementById("modalHeader");
     let Modaltitle=document.getElementById("receiptModalLabel");
     const myModal = document.getElementById('receiptModal');
     // above is the list objects created to access various HTML elements located in HTML part of the code i.e. index.html 
    
    let plateArray=[];//this array was created to plate values for later validation 

     let print=document.createElement('input');//a button located in a modal for downloading receipt of the car that is ready to check out
     print.type = "button"; 
     print.id="downloadBtn"
     print.value = "DOWNLOAD";
     print.style = " background: yellow; border: 0; font-size: 11px; font-weight: 600; line-height: 2.5;  outline: transparent; padding: 0 1rem; text-align: center;color:black;border-radius:7px;";


    //function to clear all form input values once all the details of the car have beeen submiited 
     function clear(){
      names.value=``;
      plate.value=``;
      model.value=``;
      phone.value='+251';
    }
    let counter = 0;//to count the number of cars inserted inside the parking table
    
    function createTable(){
    // below validation to make sure all inputs submitted are not empty 
    let na = document.getElementById('name').value;
    if (na == "") {
      nameErrors.innerHTML=`<i class="bi bi-exclamation-circle"></i> Name must be filled out`;
      nameErrors.style=`color: red;font-size: 11px;margin-top:0.3em`;
      return;
  }
    if (na != "") {
      nameErrors.innerHTML= ``;
  }
  
    let pho = document.getElementById('phone').value;
    if (pho == "") {
      phoneErrors.innerHTML=`<i class="bi bi-exclamation-circle"></i> Phone Number must be filled out`;
      phoneErrors.style=`color: red;font-size: 11px;margin-top:0.3em`;
      return;
  }
  if (pho.length !=10) {
    phoneErrors.innerHTML=`<i class="bi bi-exclamation-circle"></i> Phone Number must be 10 digits`;
    phoneErrors.style=`color: red;font-size: 11px;margin-top:0.3em`;
    return;
}
    if (pho != "") {
      phoneErrors.innerHTML= ``;
  }
  
    let pla = document.getElementById('plate').value;
    if (pla == "") {
      plateErrors.innerHTML=`<i class="bi bi-exclamation-circle"></i> License plate must be filled out`;
      plateErrors.style=`color: red;font-size: 11px;margin-top:0.3em`;
      return;
    }
    if (/\s/.test(pla)) {//to make sure the plate number inserted doesn't have spaces
      plateErrors.innerHTML=`<i class="bi bi-exclamation-circle"></i> No spaces allowed`;
      plateErrors.style=`color: red;font-size: 11px;margin-top:0.3em`;
      return;
  }
    if (pla != "") {
      plateErrors.innerHTML= ``;
    }
  
    let mod = document.getElementById('model').value;
    if (mod == "") {
      modelErrors.innerHTML=`<i class="bi bi-exclamation-circle"></i> Car Model must be filled out`;
      modelErrors.style=`color: red;font-size: 11px;margin-top:0.3em`;
      return;
    }
    if (mod != "") {
      modelErrors.innerHTML= ``;
    }
  
    let table = document.getElementById("parkingtable"); //object to access the parking table body
    //the parking table stores all the info of the cars that are currently parked
    let row = table.insertRow(); //object used to add rows to the parking table body
    let innerRow = document.getElementById('parkingtable').rows.length;
    //The rows property of a table returns an array of all the tr elements in the table, so the length property of the array will return the number of rows in the table.
    row.id=innerRow;
    
    //below is group of objects used to insert individual cells into the row we created above   
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);
    let cell5 = row.insertCell(5);
    let cell6 = row.insertCell(6);
    counter++;//to increment the id no value by one each time a row is added
    
    //below i have assigned each input value to its corresponding cell in the table
    cell0.innerHTML = counter;
    cell1.innerHTML = names.value;
    cell2.innerHTML = phone.value;
    cell4.innerHTML = model.value;
    plateArray[counter]=plate.value;
    cell3.innerHTML =plateArray[counter];
    
    for (var i = 0; i < plateArray.length-1; i++) {//this for loop checks if the plate number inputed already exists and deletes the whole row if it does
      if (plateArray.length  > 2 && plateArray[i]==plateArray[counter]) {
        plateErrors.innerHTML=`<i class="bi bi-exclamation-circle"></i> License plate number already exists`;
        plateErrors.style=`color: red;font-size: 11px;margin-top:0.3em`;
        const element = document.getElementById(innerRow);
        element.remove(innerRow);
        return;
      }
      else  if (plateArray.length  > 2 && plateArray[i]!=plateArray[counter]){
        plateErrors.innerHTML=``;
      }
    }
    
    clear();//Clears the form input boxes after successfull submission

    let date = new Date(); // new Date() is a builtin JS date object  that automatically gets the current date and time
    cell5.innerHTML = date.toUTCString();//toUTCString()  automatically converts the ouput of new Date() into UTC string format


    //below is a group of objects to access each individual hour,minutes and seconds 
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds = date.getSeconds();
    let secondsinMinutes=seconds/60; //to converts the seconds we got above into minutes
    let arrivalTimeinMinutes=(hours*60)+minutes+(Math.floor(secondsinMinutes)); 
    //to convert the exact time the new Date() object returns into minutes 
    //and used the maths.floor built in method to round the result we got downwards 
    
    let remover=document.createElement('input'); //to a create a button that removes the row it resides in
          remover.type = "button"; 
          remover.id="removebtn"
          remover.value = "REMOVE";
          remover.style = " background: red; border: 0; font-size: 11px; font-weight: 600; line-height: 2.5;  outline: transparent; padding: 0 .3rem;padding-left: .9rem;padding-right: .9rem; text-align: center;color:black;border-radius:7px;";
          //code above assign varies attributes to the new button we created
        cell6.appendChild(remover); //to append it to the Action column in parking table

        //a function that is called by an onclick event that removes a row using innerRow(id I assigned to each row above) and calls createReceiptTable() function    
        remover.onclick =function removeRow(){
          const element = document.getElementById(innerRow);
          element.remove(innerRow);
          createReceiptTable();
        }
        //once a row has been removed from the parking table that row is moved to the receipt table , this transfer is done using createReceiptTable()
        function createReceiptTable(){        
          let Rtable = document.getElementById("receipttable");//receipttable stores all the info of the cars that are ready to check out
          let rowr = Rtable.insertRow();
          rowr.id='receiptTableRow';//assign id to rows in thr table
          
          let Rcell0 = rowr.insertCell(0);
          let Rcell1 = rowr.insertCell(1);
          let Rcell2 = rowr.insertCell(2);
          let Rcell3 = rowr.insertCell(3);
          let Rcell4 = rowr.insertCell(4);
          let Rcell5 = rowr.insertCell(5);
          let Rcell6 = rowr.insertCell(6);
          let currrentTime = new Date();
          let currenthours=currrentTime.getHours();
          let currentminutes=currrentTime.getMinutes();
          let currentSeconds=currrentTime.getSeconds();
          let currentSecondsinMinutes=(currentSeconds)/60;
          let currrentTimeinMinutes = (currenthours*60)+currentminutes+(Math.floor(currentSecondsinMinutes));
          //all the steps above are exactly the same to the ones I used to create the body of the parking table, but this time I did it for the receipt table
    
          let minutesLapsed=currrentTimeinMinutes- arrivalTimeinMinutes;
          //currentTimeinminutes stores the exact time the a row is removed from the parking table
          //arrivalTimeminutes stores the exact time the a row is inserted into the parking table 
          //subtracting the two I can get the amount of time a car is parked
    
          let totaldue = Math.floor(minutesLapsed)*1; //I multiply the total amount of minutes the car has been in the parking table with the rate which in this case is 1

          //below I have assigned each parking table  value to its corresponding cell in the  receipt table 
          //and also added the new values calculated above (minutesLapsed and totaldue)
  
          Rcell0.innerHTML = cell1.innerHTML;
          Rcell1.innerHTML = cell2.innerHTML;
          Rcell2.innerHTML = cell3.innerHTML;
          Rcell3.innerHTML = cell4.innerHTML;
          Rcell4.innerHTML = minutesLapsed;
          Rcell5.innerHTML = totaldue;
          
          let view =document.createElement('input');//a button that opens a modal which contains the final details of the parked car that is ready to checkout 
          view.type = "button"; 
          view.id="downloadBtn"
          view.value = "VIEW";
          view.style = " background: royalblue; border: 0; font-size: 11px; font-weight: 600; line-height: 2.5;  outline: transparent; padding: 0 .3rem;padding-left: .8rem;padding-right: .8rem; text-align: center;color:black;border-radius:7px;margin-right:.2rem;";
          Rcell6.appendChild(view);
          view.setAttribute("data-bs-toggle", "modal");
          view.setAttribute("data-bs-target", "#receiptModal");//the button when clicked opens the modal  using this attribute
          
          let removerR=document.createElement('input');//a button  to remove the row it resides in 
          removerR.type = "button"; 
          removerR.id="removebtn2";
          removerR.value = "REMOVE";
          removerR.style = " background: red; border: 0; font-size: 11px; font-weight: 600;padding-left: .9rem;padding-right: .9rem; line-height: 2.5;  outline: transparent; padding: 0 .3rem; text-align: center;color:black;border-radius:7px;margin-top:0.3em;";
          Rcell6.appendChild(removerR); 
          function removeRows(){
            for (var i = 0; i < plateArray.length; i++) {
              //this for loop checks deletes the previously registered plate value from plateArray 
              //this is needed because after checking out, in order for the same car to check back in its registered liscense plate must be removed
              if (plateArray[i]==plate.value) {
                delete plateArray[i];
              }
            }
            const elements = document.getElementById('receiptTableRow');
            elements.remove('receiptTableRow');
            return
          }
          removerR.addEventListener('click', removeRows);
          // an event that removes a row using id (id we assigned to each row above) but this time in the receipt table
    

          ModalFooter.appendChild(print);//appends the print button we created a the top of the code to the modal that is opened by the view button
          // NOTE: when the print button definition was located inside the createreceipttable() function it  kept being created multiple times in the modal footer, everytime the createreceipttable() was called 
          // to fix this I defined it above outside this function
        
          let receiptDateandTime= new Date()//to get the date of parking receipt being issued
          let receiptDate=receiptDateandTime.getDate()+"/"+receiptDateandTime.getMonth()+"/"+ receiptDateandTime.getFullYear()//to convert the the date of parking receipt being issued into dd/mm/yyyy format
          
          ModalBody.innerHTML=`
          <center><h3><i class="fa fa-info-circle" aria-hidden="true"></i> Parking Details </h3></center>
          <br>
          <p style="text-align:right;position:relative;">Date: ${receiptDate}<p>
          <br>
          <p><i class="bi bi-person"></i> Name : &ensp;${Rcell0.innerHTML}</p>
          <p><i class="bi bi-telephone-forward"></i> Phone	: &ensp;${Rcell1.innerHTML}</p>
          <p><i class="fa fa-list-alt" aria-hidden="true"></i> Plate	:  &ensp;${Rcell2.innerHTML}<p>
          <p><i class="lni lni-car-alt"></i> Model	:  ${Rcell3.innerHTML}</p> 
          <p><i class="bi bi-clock"></i> Time Elasped In Minutes :  &ensp;${minutesLapsed}</p>	
          <p><i class="bi bi-cash"></i> Total Due In Birr :  &ensp;${totaldue}</p>
          <br>
          <center><p><i class="bi bi-emoji-smile"></i> Thank you, come again</p></center>
          `;// above is code to fill all the modal body that pops out with all necessary info of the parking receipt
          
          
          ModalHeader.style=`
          background-color:black;
          color:yellow;
          border-color: black;
          width: 22rem;
          `;
          ModalBody.style=`
          background-color:black;
          color:yellow;
          border-color: black;
          width: 22rem;
          `;
          Modaltitle.style=`
          background-color:black;
          color:yellow;
          text-align:center;
          border-color: black;
          width: 22rem;
          `;
          ModalFooter.style=`
          background-color:black;
          color:yellow;
          border-color: black;
          width: 22rem;
          `;//to style elements of the modal
          
          //a user defined function that uses html2canvas to print all the contents of an HTML element once the id of the element is passed to it
          print.onclick = function myfunc(){
            html2canvas(ModalBody).then(function(canvas) {
              canvas.toBlob(function(blob) {
                window.saveAs(blob, "Screenshot.png");
              });
            });
          };
        
        }
      } 
        
    
            
    
  
