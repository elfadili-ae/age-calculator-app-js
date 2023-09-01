const calcForm = document.getElementById("form");
const details = document.getElementById("details");

calcForm.addEventListener("submit", (event)=> {
    event.preventDefault();

    calculateAge();
});

function calculateAge() {
    const currentDate = new Date();
    const userDate = document.getElementById("date").value;
    
    if ((ud = isValidDate(userDate)) != null) {
        const diff = currentDate - ud;
        if (diff < 0)
        {
            alert("Your birthdate can't be in the future!");
        }
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24)
        const weeks = Math.floor(days / 7)
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);
        const age = years.toString() + " years" + months.toString() + " months" + days.toString() + " days";

        /**dislay values**/ 
        details.innerHTML = `
        <div class="detail-section">
            <h3>Age</h3><span>${years} years ${months % 12} months ${days % 30} days</span>
        </div>
        <div class="detail-section">
            <h3>Seconds passed</h3><span>${seconds} seconds</span>
        </div>
        <div class="detail-section">
            <h3>Minutes passed</h3><span>${minutes} minutes</span>
        </div>
        <div class="detail-section">
            <h3>Hours passed</h3><span>${hours} hours</span>
        </div>
        <div class="detail-section">
            <h3>Days passed</h3><span>${days} days</span>
        </div>
        <div class="detail-section">
            <h3>Weeks passed</h3><span>${weeks} weeks</span>
        </div>
        <div class="detail-section">
            <h3>Months passed</h3><span>${months} months</span>
        </div>
        <div class="detail-section">
            <h3>Years passed</h3><span>${years} years</span>
        </div>`;
    }
    else {
        alert("Please enter a valid birthdate format DD-MM-YYYY");
    }
}

function isValidDate(dateString) {

    const dateParts = dateString.split("-");

    if (dateParts.length !== 3) {
        return null;
    }

    const year = parseInt(dateParts[2], 10);
    const month = parseInt(dateParts[1], 10);
    const days = parseInt(dateParts[0], 10);

    if (month < 1 || month > 12 || days < 1 || days > new Date(year, month, 0).getDate()) {
        return null;
    }

    const date = new Date(year, month - 1, days);
    return date;
}