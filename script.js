let inputBox = document.getElementById("input-box");
        let listContainer = document.getElementById("list-container");

        function addTask() {
            if (inputBox.value === '') {
                alert("You must write something");
            } else {
                let li = document.createElement("li");
                li.textContent = inputBox.value;
                listContainer.appendChild(li);
                inputBox.value = "";
            }
        }

        listContainer.addEventListener("click", function(e) {
            if (e.target.tagName === "LI") {
                e.target.classList.toggle("checked");
            }
        });