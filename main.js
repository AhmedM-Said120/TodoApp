let input = document.getElementById("input")
let add = document.getElementById("add")
let ul = document.getElementById("ul")
let myArrat = []
let remove;
let edit;
let save;
add.onclick = function () {
    x = input.value
    if (input.value == "") { } else {
        ul.innerHTML +=
            "<li>" + "<span>" + x + "</span>" +
            "<button id='save' style='display: none';>Save</button>" +
            "<button id='edit'>edit</button>" +
            "<button id='remove'>remove</button>" +
            "</li>";
        myArrat.push(x);
        input.value = "";
        remove = document.querySelectorAll("#remove");
        for (let i = 0; i <= myArrat.length - 1; i++) {
            remove[i].onclick = function (e) {
                remove[i].parentElement.style.display = "none"
            }
        }
        edit = document.querySelectorAll("#edit");
        for (let i = 0; i <= myArrat.length - 1; i++) {
            edit[i].onclick = function (e) {
                edit[i].classList.add("anotherclass")
                values = edit[i].parentElement.querySelector("span").innerText
                edit[i].style.display = "none"
                edit[i].parentElement.querySelector("span").style.display = "none"
                edit[i].parentElement.querySelector("#save").style.display = "inline-block"
                let createInput = document.createElement("input")
                edit[i].parentElement.prepend(createInput)
                createInput.value = values
            }
        }
        save = document.querySelectorAll("#save");
        for (let e = 0; e <= myArrat.length - 1; e++) {
            save[e].onclick = function () {
                save[e].parentElement.querySelector("input").style.display = "none"
                save[e].parentElement.querySelector("#edit").style.display = "inline-block"
                var inputEdit = save[e].parentElement.querySelector("input")
                var newValueInput = inputEdit.value
                let spanCreat = document.createElement("span")
                spanCreat.textContent += newValueInput
                save[e].parentElement.prepend(spanCreat)
                save[e].style.display = "none"
            }
        }

    }

}
