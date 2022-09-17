
let arr = ["Lorem ipsum dolor sit amet", "consectetur adipisicing elit.", "Ducimus facere non nisi fugit quas.",
    "Eaque blanditiit aliquam", "iusto esse", "nihil praesentium nam voluptates quidem dolorenihil "
]


let sample = document.getElementById("sample")
let text = document.getElementById("text")
let btn2 = document.getElementById("btn2")

sample.innerText = arr[0]
btn2.addEventListener("click", ddd)
function ddd() {
    let mm = Math.floor(Math.random() * arr.length)
    sample.innerText = arr[mm]
}