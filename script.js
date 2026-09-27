

    <script>
        /* Activity 1 */
        document.getElementById("colorBtn").addEventListener("click", function() {
            document.body.style.backgroundColor =
                "rgb(" + 
                Math.floor(Math.random()*255) + "," +
                Math.floor(Math.random()*255) + "," +
                Math.floor(Math.random()*255) + ")";
        });

        /* Activity 2 */
        document.getElementById("darkBtn").addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
        });

        /* Activity 3 */
        document.getElementById("addItemBtn").addEventListener("click", function() {
            let li = document.createElement("li");
            li.textContent = "New Item";
            document.getElementById("itemList").appendChild(li);
        });

        /* Activity 4 */
        document.getElementById("removeBtn").addEventListener("click", function() {
            let p = document.getElementById("removeMe");
            if (p) p.remove();
        });

        /* Activity 5 */
        document.getElementById("textInput").addEventListener("input", function() {
            document.getElementById("charCount").textContent = this.value.length;
        });

        /* Activity 6 */
        document.getElementById("calcBtn").addEventListener("click", function() {
            let n1 = Number(document.getElementById("num1").value);
            let n2 = Number(document.getElementById("num2").value);
            document.getElementById("result").textContent = n1 + n2;
        });

        /* Activity 7 */
        document.getElementById("imgBtn").addEventListener("click", function() {
            let img = document.getElementById("myImage");
            img.src = "https://picsum.photos/150?random=" + Math.random();
        });

        /* Activity 8 */
        document.getElementById("todoBtn").addEventListener("click", function() {
            let input = document.getElementById("todoInput");
            if (input.value.trim() === "") return;

            let li = document.createElement("li");
            li.textContent = input.value;

            li.addEventListener("click", function() {
                li.remove(); // click to remove task
            });

            document.getElementById("todoList").appendChild(li);
            input.value = "";
        });
    </script>