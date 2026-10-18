console.log("submit")
const form = document.getElementById("studentForm")
const studentlist = document.getElementById("studentList")
const message = document.getElementById("message")

form.addEventListener("submit", function(event){



    const number = document.getElementById("studentNumber").value

    const first = document.getElementById("firstName").value

    const last = document.getElementById("lastName").value

    const course = document.getElementById("course").value

    //step 3

    const row = document.createElement("tr")

    //step 4
    const numberCell = document.createElement("td")
    const firstCell = document.createElement("td")
    const lastCell = document.createElement("td")
    const courseCell = document.createElement("td")

    //step 5
    numberCell.textContent = number
    firstCell.textContent = first
    lastCell.textContent = last
    courseCell.textContent = course

    //step 6
    row.appendChild(numberCell)
    row.appendChild(firstCell)
    row.appendChild(lastCell)
    row.appendChild(courseCell)

//step 7
    studentlist.appendChild(row)

//step 8
    message.textContent = "Student added successfully!"
    form.reset()
    })

        //dark mode script
$(document).ready(function(){


    //dark button
    $("#dark").click(function(){
        $("body").addClass("dark-mode")
    })

     //light button
    $("#light").click(function(){
        $("body").removeClass("dark-mode")
    })
 })