const Message = document.getElementById("message")
const Button1 = document.getElementById("loadBtn")

const profile = document.getElementById("profile")
const grades = document.getElementById("grades")
const schedule = document.getElementById("schedule")

Button1.addEventListener("click", function(){
    Message.innerHTML = "Loading dashboard..."

    profile.innerHTML = "Profile: waiting..."
    grades.innerHTML = "Grades: waiting..."
    schedule.innerHTML = "Schedule: waiting..."

    const profilePromise = new Promise(function(resolve){
        setTimeout(function(){
            profile.innerHTML = "Profile: Loaded"
            resolve()
        }, 1000)

    })

    const gradesPromise = new Promise(function(resolve){
        setTimeout(function(){
            grades.innerHTML = "Grades: Loaded"
            resolve()
        }, 2000)

    })
    const schedulePromise = new Promise(function(resolve){
        setTimeout(function(){
            schedule.innerHTML = "Schedule: Loaded"
            resolve()
        }, 3000)

    })
    .then(function(){
         setTimeout(function(){
         Message.innerHTML = "Dashboard Ready"
        }, 6000)

})
})