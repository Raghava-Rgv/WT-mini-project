const trainingCenters = [
    // Add sample data here
];

document.getElementById("findTrainers").addEventListener("click", function() {
    const locationInput = document.getElementById("location").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    const filteredTrainers = trainingCenters.filter(trainer =>
        trainer.location.toLowerCase().includes(locationInput)
    );

    if (filteredTrainers.length > 0) {
        filteredTrainers.forEach(trainer => {
            const trainerDiv = document.createElement("div");
            trainerDiv.className = "trainer";
            trainerDiv.innerHTML = `
                <h1>${trainer.centerName}</h1>
                <p><strong>Specialty:</strong> ${trainer.specialty}</p>
                <p><strong>Location:</strong> ${trainer.location}</p>
                <p><strong>Contact:</strong> ${trainer.mobileNumber}</p>
                <p><strong>Available Timings:</strong> ${trainer.availableTimings}</p>
                <p><strong>Training Fee:</strong> ${trainer.trainingFee}</p>
            `;
            resultsDiv.appendChild(trainerDiv);
        });
    } else {
        resultsDiv.innerHTML = "<p>No trainers available in your location.</p>";
    }
});
