let btn = document.getElementById("button");
let text = document.getElementsByTagName("textarea")[0];
let color = document.getElementById("color");
let notes_conatiner = document.getElementById("notes_conatiner");
let message = document.getElementById("message");

function addNotes() {
    if (text.value === "") {
        alert("Please enter some text in the textbox");
        return;
    }
    message.innerText = "";
    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");

    div.appendChild(p);
    div.appendChild(cross_btn);

    cross_btn.innerText = "X";
    p.innerText = text.value;
    div.style.backgroundColor = color.value;

    div.style.width = "190px";
    div.style.height = "150px";
    div.style.padding = "10px";
    div.style.marginBottom = "10px";
    div.style.position = "relative";
    div.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    div.style.borderRadius = "5px";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    cross_btn.style.position = "absolute";
    cross_btn.style.top = "5px";
    cross_btn.style.right = "5px";
    cross_btn.style.backgroundColor = "#ff0000";
    cross_btn.style.color = "#ffffff";
    cross_btn.style.border = "none";
    cross_btn.style.borderRadius = "50%";
    cross_btn.style.width = "20px";
    cross_btn.style.height = "20px";
    cross_btn.style.cursor = "pointer";

    notes_conatiner.appendChild(div);

    text.value = "";

    cross_btn.addEventListener("click", function () {
        div.style.display = "none";
        if (notes_conatiner.children.length === 0) {
            message.innerText = "You have not added a note yet.";
        }
    });
}

btn.addEventListener("click", addNotes);
