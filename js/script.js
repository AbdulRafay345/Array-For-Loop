let cities = ["Faisalbad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Multan"]

function simpleAlert() {
    document.getElementById("output").innerHTML = ""
    alert("A Simple Alert")
}

function printName() {
    document.getElementById("output").innerHTML = "";
    let myName = document.getElementById("input").value;
    let font = input.value.fontsize(9)
    if (myName === "") {
        alert("Please Enter Name")
        return;
    }
    document.getElementById("output").innerHTML = myName;
}

function printCities() {
    document.getElementById("output").innerHTML = ""
    console.log(cities)
    for (let i = 0; i < cities.length; i++) {
        document.getElementById("output").innerHTML += i + 1 + ') ' + cities[i] + '<br />'
    }

}

function addCities() {
    document.getElementById("output").innerHTML = ""
    let city = document.getElementById("input").value;
    if (city === "") {
        alert("Please Enter city")
        return;
    }
    let newCities = cities.push(city);
    document.getElementById("output").innerHTML = '<span class="fs-5 text-success">"'+ city +'"</span> has been successfully added into list.'; 
}

function clearOutput() {
    document.getElementById("output").innerHTML = ""
}

function generateTable () {
    let number = document.getElementById("input").value;
    
    if(number === "") {
        alert("Please a enter number");
        return;
    }
    
    let limit = +prompt('Table Upto?')
    document.getElementById("output").innerHTML = "";
    
    for(let i = 1;i <= limit; i++) {
        document.getElementById("output").innerHTML += number + " * " + i + " = " + number * i + '<br />' 
}

}