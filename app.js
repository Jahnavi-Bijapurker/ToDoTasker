document.addEventListener('DOMContentLoaded', function () {
    let diaryForm = document.querySelector("#new-diary-form");
    let diaryInput = document.querySelector("#new-diary-form textarea");
    let entries = document.querySelector(".entries");

    diaryForm.addEventListener("submit", function Diary(e) {
        e.preventDefault();

        let userData = diaryInput.value.trim();

        if (!userData) {
            alert("Please enter the diary entry before submitting");
            return;
        }

        let entry = document.createElement('div');
        entry.classList.add("entry");
        entry.classList.add('mb-3');

        const diaryContent = document.createElement('div');
        diaryContent.classList.add("Diarycontent");

        let diaryText = document.createElement('textarea');
        diaryText.classList.add('text');
        diaryText.classList.add('form-control');
        diaryText.classList.add('mb-2');
        diaryText.textContent = userData;
        diaryText.setAttribute("readonly", "readonly");
        diaryText.setAttribute("rows", "10");
        diaryText.setAttribute("cols", "60");

        diaryContent.appendChild(diaryText);
        entry.appendChild(diaryContent);

        let diaryAction = document.createElement('div');
        diaryAction.classList.add('Diaryaction');

        let diaryEdit = document.createElement("button");
        diaryEdit.classList.add("edit");
        diaryEdit.classList.add("btn");
        diaryEdit.classList.add("btn-warning");
        diaryEdit.innerHTML = "Edit";

        let diaryDelete = document.createElement("button");
        diaryDelete.classList.add("delete");
        diaryDelete.classList.add("btn");
        diaryDelete.classList.add("mx-3");
        diaryDelete.classList.add("btn-danger");
        diaryDelete.innerHTML = "Delete";

        diaryAction.appendChild(diaryEdit);
        diaryAction.appendChild(diaryDelete);
        entry.appendChild(diaryAction);

        entries.appendChild(entry);

        diaryInput.value = "";

        // EDIT USER DATA
        diaryEdit.addEventListener('click', function () {
            if (diaryEdit.innerHTML === "Edit") {
                diaryText.removeAttribute('readonly');
                diaryEdit.innerHTML = "Save";
                diaryText.focus();
            } else {
                diaryText.setAttribute("readonly", "readonly");
                diaryEdit.innerHTML = "Edit";
            }
        });

        // DELETE USER DATA
        diaryDelete.addEventListener('click', function () {
            entries.removeChild(entry);
        });
    });

    // ... (the rest of your existing code)

    //////////////////////////////////////////////////////////////////////////

    // ////////todo part////////////
    let form = document.querySelector("#new-task-form");
    let input = document.querySelector("#new-task-input");
    let tasks = document.querySelector(".tasks");
    let container = document.querySelector('.container');
    let change = document.querySelector("#change");
    let customize = document.querySelector('#customize');
    let diaryContainer = document.querySelector('.diaryContainer');

    change.addEventListener('click', function () {
        if (container.style.display === 'block' || container.style.display === '') {
            container.style.display = 'none';
            customize.style.display = 'none';
            change.innerHTML = 'Turn on ToDo List Mode';
            diaryContainer.style.display = 'block';
        } else {
            container.style.display = 'block';
            customize.style.display = 'block';
            change.innerHTML = 'Turn on Diary Mode';
            diaryContainer.style.display = 'none';
        }
    });

    form.addEventListener("submit", function todo(a) {
        a.preventDefault();

        let userData = input.value;

        if (!userData) {
            alert("Please enter the task before submitting");
            return;
        }

        createTask(userData);
    });

    function createTask(userData) {
        let task = document.createElement('div');
        task.classList.add("task");
        task.classList.add('mb-3');

        const content = document.createElement('div');
        content.classList.add("content");

        let task_input = document.createElement('input');
        task_input.classList.add('text');
        task_input.classList.add('form-control');
        task_input.classList.add('mb-2');
        task_input.value = userData;
        task_input.setAttribute("readonly", "readonly");
        task_input.type = 'text';

        content.appendChild(task_input);
        task.appendChild(content);
        tasks.appendChild(task);

        let action = document.createElement('div');
        action.classList.add('action');

        let task_edit = document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.classList.add("btn");
        task_edit.classList.add("btn-warning");
        task_edit.innerHTML = "Edit";

        let task_delete = document.createElement("button");
        task_delete.classList.add("delete");
        task_delete.classList.add("btn");
        task_delete.classList.add("mx-3");
        task_delete.classList.add("btn-danger");
        task_delete.innerHTML = "Delete";

        action.appendChild(task_edit);
        action.appendChild(task_delete);
        task.appendChild(action);

        input.value = "";

        // EDIT USER DATA
        task_edit.addEventListener('click', function () {
            if (task_edit.innerHTML === "Edit") {
                task_input.removeAttribute('readonly');
                task_edit.innerHTML = "Save";
                task_input.focus();
            } else {
                task_input.setAttribute("readonly", "readonly");
                task_edit.innerHTML = "Edit";
            }
        });

        // DELETE USER DATA
        task_delete.addEventListener('click', function () {
            tasks.removeChild(task);
        });
    }
});
