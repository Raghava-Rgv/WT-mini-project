
const trainingCenters = [
    // Same array as provided
];

document.getElementById("findTrainers").addEventListener("click", function() {
    const locationInput = document.getElementById("location").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    const filteredTrainers = trainingCenters.filter(trainer => trainer.location.toLowerCase().includes(locationInput));

    if (filteredTrainers.length > 0) {
        filteredTrainers.forEach(trainer => {
            const trainerDiv = document.createElement("div");
            trainerDiv.className = "trainer";
            trainerDiv.innerHTML = `
                <h2>${trainer.centerName}</h2>
                <p><strong>${trainer.name}</strong> - ${trainer.specialty} (${trainer.location})</p>
                <p><strong>Mobile:</strong> ${trainer.mobileNumber}</p>
                <p><strong>Timings:</strong> ${trainer.availableTimings}</p>
                <p><strong>Fee:</strong> ${trainer.trainingFee}</p>
            `;
            resultsDiv.appendChild(trainerDiv);
        });
    } else {
        resultsDiv.innerHTML = "<p>No trainers available in your location.</p>";
    }
});

