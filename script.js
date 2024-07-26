document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;

    if (title && date) {
        addEvent(title, date);
        document.getElementById('event-form').reset();
    }
});

function addEvent(title, date) {
    const eventList = document.getElementById('event-list');
    const li = document.createElement('li');
    
    li.innerHTML = `${title} - ${date} <button onclick="removeEvent(this)">Delete</button>`;
    eventList.appendChild(li);
}

function removeEvent(button) {
    const li = button.parentElement;
    li.remove();
}
