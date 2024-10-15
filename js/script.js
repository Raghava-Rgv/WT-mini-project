const trainers = [
    { name: "John Doe", specialty: "Strength Training", bio: "Experienced in powerlifting and hypertrophy training." },
    { name: "Jane Smith", specialty: "Yoga", bio: "Certified yoga instructor with 10 years of experience." },
    { name: "Alex Johnson", specialty: "HIIT", bio: "Specializes in high-intensity interval training and cardio." },
    { name: "Maria Garcia", specialty: "Pilates", bio: "Expert in Pilates and core strengthening." }
];

function renderTrainers(filter = "") {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
    const filteredTrainers = trainers.filter(trainer => 
        trainer.name.toLowerCase().includes(filter.toLowerCase())
    );
    filteredTrainers.forEach(trainer => {
        const trainerElement = document.createElement("div");
        trainerElement.classList.add("trainer");
        trainerElement.innerHTML = `
            <h1>${trainer.name}</h1>
            <p><strong>Specialty:</strong> ${trainer.specialty}</p>
            <p>${trainer.bio}</p>
        `;
        resultsContainer.appendChild(trainerElement);
    });
}

document.getElementById("search-bar").addEventListener("input", event => {
    renderTrainers(event.target.value);
});

// Initial render of all trainers
renderTrainers();
