//get values from the user. fizzValue and buzzValue
function getValues(){

    //get the user values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    //check to make sure they're numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    //check that the numbers are integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        
        //call fizzBuzz
        let fbArray = fizzBuzz(fizzValue,buzzValue);
        //call displayData and write the values to the screen
        displayData(fbArray);

    } else {
        alert("You must enter integers");
    }
     
}

function fizzBuzz(fizzValue,buzzValue){

    let returnArray = [];

    //iterate the returnArray
    //loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
        
    //check the current value in three steps
    //check to see if divisable by both (3 and 5)
    if (i % fizzValue ==0 && i % buzzValue ==0){

        //if so push FizzBuzz into an array
        returnArray.push("FizzBuzz");

    //else check to see if divisable by fizz value (3)
    } else if (i % fizzValue ==0){

    //if so push Fizz into an array
        returnArray.push("Fizz");

    //else check to see if divisable by buzz value (5)
    } else if (i % buzzValue ==0){

    //if so push Buzz into an array
        returnArray.push("Buzz");

    //else if none then push the number into the array 
    } else
    
        returnArray.push(i);
    }

    return returnArray;
}


//loop over the array and create a table row for each ite
function displayData(fbArray){

    //get the table body  element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index += 10) {
        let tableRow = document.importNode(templateRow.content,true);

        //grab just the "td" and put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = fbArray[index];
        rowCols[1].textContent = fbArray[index+1];
        rowCols[2].textContent = fbArray[index+2];
        rowCols[3].textContent = fbArray[index+3];
        rowCols[4].textContent = fbArray[index+4];
        rowCols[5].textContent = fbArray[index+5];
        rowCols[6].textContent = fbArray[index+6];
        rowCols[7].textContent = fbArray[index+7];
        rowCols[8].textContent = fbArray[index+8];
        rowCols[9].textContent = fbArray[index+9];

        tableBody.appendChild(tableRow);

        //add all the row to the table
    }    
}
