document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('attendance-form');
    const studentList = document.getElementById('student-list');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const studentName = document.getElementById('student-name').value;
        const attendanceStatus = document.getElementById('attendance-status').value;

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${studentName}</span>
            <span class="${attendanceStatus}">${attendanceStatus.charAt(0).toUpperCase() + attendanceStatus.slice(1)}</span>
        `;

        studentList.appendChild(listItem);

        // Clear the form
        document.getElementById('student-name').value = '';
    });
});
