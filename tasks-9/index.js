const form = document.getElementById("myForm");
const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const firstName = form.querySelector("#firstName").value;
            const lastName = form.querySelector("#lastName").value;
            const address = form.querySelector("#address").value;
            const pincode = form.querySelector("#pincode").value;
            const gender = form.querySelector('input[name="gender"]:checked').value;
            const foodElements = form.querySelectorAll('input[name="food"]:checked');
            const state = form.querySelector("#state").value;
            const country = form.querySelector("#country").value;

            // Create a comma-separated list of selected foods
            const foods = [...foodElements].map(item => item.value).join(", ");

            // Create a new row for the table
            const newRow = table.insertRow(table.rows.length);
            const cells = [firstName, lastName, address, pincode, gender, foods, state, country];

            for (let i = 0; i < cells.length; i++) {
                const cell = newRow.insertCell(i);
                cell.innerHTML = cells[i];
            }

            // Clear the form fields
            form.reset();
        });