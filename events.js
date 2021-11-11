// const { connect } = require("http2");

// function onefun(i) {
//   if (i === 1) {
//     if (document.getElementById("ans1").style.display === "none") {
//       document.getElementById("ans1").style.display = "block";
//       document.getElementById("q1").style.fontWeight = "700";
//     } else {
//       document.getElementById("ans1").style.display = "none";
//       document.getElementById("q1").style.fontWeight = "initial";
//     }
//   } else if (i === 2) {
//     if (document.getElementById("ans2").style.display === "none") {
//       document.getElementById("ans2").style.display = "block";
//       document.getElementById("q2").style.fontWeight = "700";
//     } else {
//       document.getElementById("ans2").style.display = "none";
//       document.getElementById("q2").style.fontWeight = "initial";
//     }
//   } else if (i === 3) {
//     if (document.getElementById("ans3").style.display === "none") {
//       document.getElementById("ans3").style.display = "block";
//       document.getElementById("q3").style.fontWeight = "700";
//     } else {
//       document.getElementById("ans3").style.display = "none";
//       document.getElementById("q3").style.fontWeight = "initial";
//     }
//   } else if (i === 4) {
//     if (document.getElementById("ans4").style.display === "none") {
//       document.getElementById("ans4").style.display = "block";
//       document.getElementById("q4").style.fontWeight = "700";
//     } else {
//       document.getElementById("ans4").style.display = "none";
//       document.getElementById("q4").style.fontWeight = "initial";
//     }
//   } else if (i === 5) {
//     if (document.getElementById("ans5").style.display === "none") {
//       document.getElementById("ans5").style.display = "block";
//       document.getElementById("q5").style.fontWeight = "700";
//     } else {
//       document.getElementById("ans5").style.display = "none";
//       document.getElementById("q5").style.fontWeight = "initial";
//     }
//   }
// }

let questions = document.querySelectorAll(".questions")


questions.forEach((question) => {
  
  question.onclick = ()=>{

    question.nextElementSibling.classList.toggle("show")

    
    
  }

})