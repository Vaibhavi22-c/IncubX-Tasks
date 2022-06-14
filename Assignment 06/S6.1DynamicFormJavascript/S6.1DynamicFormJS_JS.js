let rowcount=1;
let row=1;
function displayDetails(){
    let f_name = document.getElementById("fname").value;
    let l_name = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let city = document.getElementById("city").value;
    if(!f_name || !l_name || !email || !country || !state || !city)
    {
        alert("Please fill all information.");
        return;
    }
    let display = document.getElementById("display");
    let newRow = display.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);
    cell1.innerHTML = row;
    cell2.innerHTML = f_name;
    cell3.innerHTML = l_name;
    cell4.innerHTML = email;
    cell5.innerHTML = country;  
    cell6.innerHTML = state;  
    cell7.innerHTML = city;  
    row++;
    rowcount++;
}
function populateState(s1,s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";  
    if(s1.value == "india"){
        var optionArray = ['maharashtra|Maharashtra','gujrat|Gujrat','karnataka|Karnataka'];
    }
    else if(s1.value == 'usa'){
        var optionArray = ['alaska|Alaska','california|California','georgia|Georgia'];
    }
    for(var option in optionArray){
        var pair = optionArray[option].split("|");
        var newoption = document.createElement("option");
        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        s2.options.add(newoption);   
    }   
}
function populateCity(c1,c2){
    var c1 = document.getElementById(c1);
    var c2 = document.getElementById(c2);
    c2.innerHTML = "";  
    if(c1.value == "maharashtra"){
        var optionArray1 = ['pune|Pune','mumbai|Mumbai'];
    }
    else if(c1.value == 'gujrat'){
        var optionArray1 = ['surat|Surat','ahemdabad|Ahemdabad'];
    }
    else if(c1.value == 'karnataka'){
        var optionArray1 = ['bangalore|Bangalore','mysore|Mysore'];
    }
    else if(c1.value == 'alaska'){
        var optionArray1 = ['anchorage|Anchorage','fairbanks|Fairbanks'];
    }
    else if(c1.value == 'california'){
        var optionArray1 = ['los angeles|Los Angeles','san francisco|San Francisco'];
    }
    else if(c1.value == 'georgia'){
        var optionArray1 = ['atlanta|Atlanta','augusta|Augusta'];
    }
    for(var option in optionArray1){
        var pair = optionArray1[option].split("|");
        var newoption = document.createElement("option");
        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        c2.options.add(newoption);   
    }   
}