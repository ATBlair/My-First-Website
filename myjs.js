const compSkills = [ 
    { name:"HTML",        experience:"3 months" }, 
    { name:"CSS",         experience:"3 months" },
    { name:"JS",          experience:"3 weeks" },
    { name:"PHP",         experience:"None" },
    { name:"SQL",         experience:"None" },
    { name:"WORDPRESS",   experience:"None" },
    { name:"REACT",       experience:"None" },
    { name:"SASS",        experience:"None" },
    { name:"TypeScript",  experience:"None" },
    { name:"GIT",         experience:"2 months" }
  ];

let text = "";
for (let i = 0; i < compSkills.length; i++) {
  text += "<li>" + compSkills[i].name + " - " + compSkills[i].experience + "</li>";
}
document.getElementById("compSkills").innerHTML = text;


//This is a differ JS declaration from the one above.
function hello() {
    let person = prompt("What is your name?");

    let time = new Date().getHours();
    

    let greeting = "";

    if (time <12){
        greeting = "Good Morning,";
    }
    else if (time < 17){
        greeting = "Good Afternoon,";
    }
    else {
        greeting = "Good Night,";
    }

    alert(greeting + person + "!" + "\nThank you for reviewing my resume site.");
}










    
    
    