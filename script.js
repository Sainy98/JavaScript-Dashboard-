
document.querySelectorAll('.circular-progress').forEach(progress => {
    const value = progress.getAttribute('data-value');
    const radius = 40; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference of the circle
    const offset = circumference - (value / 100 * circumference); // Calculate offset based on value

    const halfCircle = progress.querySelector('.half');
    halfCircle.style.transform = `rotate(${(value / 100) * 360}deg)`;
});

document.getElementById('add-task-btn').addEventListener('click', function () {
    const taskText = document.getElementById('new-task').value;

    if (taskText) {
        // Create a new list item with checkbox and delete button
        const newTask = document.createElement('li');
        newTask.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        const taskContent = `
            <div>
                <input type="checkbox" class="form-check-input me-2"> ${taskText}
            </div>
            <button class="btn btn-danger btn-sm delete-task">Delete</button>
        `;

        newTask.innerHTML = taskContent;

        // Append to task list
        document.getElementById('task-list').appendChild(newTask);

        // Clear the input field
        document.getElementById('new-task').value = '';

        // Add event listener to the new delete button
        newTask.querySelector('.delete-task').addEventListener('click', function () {
            newTask.remove();
        });
    }
});

// Add delete functionality to existing delete buttons
document.querySelectorAll('.delete-task').forEach(button => {
    button.addEventListener('click', function () {
        this.closest('li').remove();
    });
});




document.getElementById('add-contact-btn').addEventListener('click', function () {
    const contactText = document.getElementById('new-contact').value;
    if (contactText.length < 5) {
        alert("Add contact alteast 5 characters long")
        return
    }
    if (contactText) {

        const newContact = document.createElement('li');
        newContact.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        const contactContent = `
            ${contactText} <small class="text-muted">Just added</small>
        `;

        newContact.innerHTML = contactContent;
        const showAllBtn = document.getElementById('show-all-btn');
        document.getElementById('contact-list').insertBefore(newContact, showAllBtn);
        document.getElementById('new-contact').value = '';
        newContact.querySelector('.delete-contact').addEventListener('click', function () {
            newContact.remove();
        });
    }
});


// Show all extra contacts when "Show All" is clicked
document.getElementById('show-all-btn').addEventListener('click', function () {
    const extraContacts = document.getElementById('extra-contacts');
    extraContacts.classList.toggle('d-none');

    // Change the button text based on the visibility of extra contacts
    if (!extraContacts.classList.contains('d-none')) {
        this.innerHTML = 'Show Less';
    } else {
        this.innerHTML = 'Show All';
    }
});


// Add new project
document.getElementById('add-project-btn').addEventListener('click', function () {
    const projectText = document.getElementById('new-project').value;
    if (projectText.length < 5) {
        alert("Add project alteast 5 characters long")
        return
    }
    if (projectText) {
        // Create a new list item for the project
        const newProject = document.createElement('li');
        newProject.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        // Set project content with a delete button
        const projectContent = `
            ${projectText} 
           
        `;
        newProject.innerHTML = projectContent;

        // Insert the new project before the 'Show All' button
        const showAllBtn = document.getElementById('show-all-projects-btn');
        document.getElementById('project-list').insertBefore(newProject, showAllBtn);

        // Clear the input field
        document.getElementById('new-project').value = '';


    }
});

// Add delete functionality to existing projects
document.querySelectorAll('.delete-project').forEach(button => {
    button.addEventListener('click', function () {
        this.closest('li').remove();
    });
});

// Show/hide extra projects when "Show All" is clicked
document.getElementById('show-all-projects-btn').addEventListener('click', function () {
    const extraProjects = document.getElementById('extra-projects');
    extraProjects.classList.toggle('d-none');

    // Change the button text based on the visibility of extra projects
    if (!extraProjects.classList.contains('d-none')) {
        this.innerHTML = 'Show Less';
    } else {
        this.innerHTML = 'Show All';
    }
});
