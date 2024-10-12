const trainingCenters = [
    { centerName: "PowerZone Fitness", name: "Raghava", location: "Vishakapatnam", specialty: "Gym / Fitness Center", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "FitLab Training", name: "Gireesh", location: "Chittor", specialty: "Gym / Fitness Center", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "Peak Performance Gym", name: "Anu", location: "Anantapur", specialty: "Gym / Fitness Center", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "Zen Body Studio", name: "Priya", location: "Tirupathi", specialty: "Gym / Fitness Center", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "Vitality Hub", name: "Madhu", location: "Nellore", specialty: "Gym / Fitness Center", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },

    { centerName: "CodeCrafters Academy", name: "Chandhini", location: "Guntur", specialty: "Coding & Computer Training Center", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "TechNest Institute", name: "Amrutha", location: "Srikalahasthi", specialty: "Coding & Computer Training Center", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "ByteBuilders", name: "Raghava", location: "Vishakapatnam", specialty: "Coding & Computer Training Center", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "Digital Masters Training", name: "Amulya", location: "Chittor", specialty: "Coding & Computer Training Center", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "FutureCoders Hub", name: "Ram", location: "Anantapur", specialty: "Coding & Computer Training Center", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },

    { centerName: "FluentSpeak Academy", name: "Ravi", location: "Tirupathi", specialty: "Spoken English Center", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "Express English School", name: "Rajesh", location: "Nellore", specialty: "Spoken English Center", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "SpeakWise Institute", name: "Bhavitha", location: "Guntur", specialty: "Spoken English Center", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "AccentPro English", name: "Sneha", location: "Srikalahasthi", specialty: "Spoken English Center", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "GlobalTalk Center", name: "Vinay", location: "Vishakapatnam", specialty: "Spoken English Center", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },

    { centerName: "Artistry Hub", name: "Pavan", location: "Chittor", specialty: "Drawing & Art School", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "Creative Canvas Studio", name: "Sudheer", location: "Anantapur", specialty: "Drawing & Art School", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "ColorCraze Art School", name: "Sreeja", location: "Tirupathi", specialty: "Drawing & Art School", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "ArtMinds Academy", name: "Antony", location: "Nellore", specialty: "Drawing & Art School", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "Imagination Station", name: "Dinesh", location: "Guntur", specialty: "Drawing & Art School", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },

    { centerName: "Warrior’s Path Martial Arts", name: "Anjali", location: "Srikalahasthi", specialty: "Martial Arts & Self-Defense", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "IronFist Academy", name: "Brindha", location: "Vishakapatnam", specialty: "Martial Arts & Self-Defense", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "DefendFit Studio", name: "Vanitha", location: "Chittor", specialty: "Martial Arts & Self-Defense", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "Tiger Spirit Dojo", name: "Vasu", location: "Anantapur", specialty: "Martial Arts & Self-Defense", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },
    { centerName: "Elite Combat School", name: "Ramana", location: "Tirupathi", specialty: "Martial Arts & Self-Defense", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2000 INR" },

    { centerName: "SoulFlow Yoga Center", name: "Prabhu", location: "Vishakapatnam", specialty: "Yoga & Meditation", mobileNumber: "9876543210", availableTimings: "7:00 AM - 8:00 PM", trainingFee: "1500 INR" },
    { centerName: "Peaceful Path Wellness", name: "Nagarjuna", location: "Chittor", specialty: "Yoga & Meditation", mobileNumber: "9876543210", availableTimings: "6:00 AM - 6:00 PM", trainingFee: "1800 INR" },
    { centerName: "ZenGarden Yoga Studio", name: "Akhil", location: "Anantapur", specialty: "Yoga & Meditation", mobileNumber: "9876543210", availableTimings: "8:00 AM - 7:00 PM", trainingFee: "1600 INR" },
    { centerName: "Mindful Moves Institute", name: "Chaitanya", location: "Tirupathi", specialty: "Yoga & Meditation", mobileNumber: "9876543210", availableTimings: "5:00 AM - 9:00 PM", trainingFee: "1500 INR" },
    { centerName: "Harmony Breath Hub", name: "Gowthami", location: "Nellore", specialty: "Yoga & Meditation", mobileNumber: "9876543210", availableTimings: "7:30 AM - 5:30 PM", trainingFee: "1400 INR" },

    // Music & Dance Schools
    { centerName: "RhythmWorks Music Academy", name: "Seenu", location: "Guntur", specialty: "Music & Dance", mobileNumber: "9876543210", availableTimings: "9:00 AM - 8:00 PM", trainingFee: "2500 INR" },
    { centerName: "DanceFusion Studio", name: "Sri Leela", location: "Srikalahasthi", specialty: "Music & Dance", mobileNumber: "9876543210", availableTimings: "8:00 AM - 9:00 PM", trainingFee: "2700 INR" },
    { centerName: "Harmony Music Hub", name: "Lalitha", location: "Vishakapatnam", specialty: "Music & Dance", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "2600 INR" },
    { centerName: "Melody Masters Institute", name: "Padma", location: "Chittor", specialty: "Music & Dance", mobileNumber: "9876543210", availableTimings: "11:00 AM - 7:00 PM", trainingFee: "2500 INR" },
    { centerName: "StepSync Dance Academy", name: "Sekhar", location: "Anantapur", specialty: "Music & Dance", mobileNumber: "9876543210", availableTimings: "9:00 AM - 6:00 PM", trainingFee: "2800 INR" },

    // Photography & Film Schools
    { centerName: "LensMasters Institute", name: "Ranganath", location: "Tirupathi", specialty: "Photography & Film", mobileNumber: "9876543210", availableTimings: "10:00 AM - 5:00 PM", trainingFee: "3000 INR" },
    { centerName: "FocusPoint Photography School", name: "Siva", location: "Nellore", specialty: "Photography & Film", mobileNumber: "9876543210", availableTimings: "9:00 AM - 4:00 PM", trainingFee: "3200 INR" },
    { centerName: "FilmVerse Academy", name: "Farooq", location: "Guntur", specialty: "Photography & Film", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "3500 INR" },
    { centerName: "SnapCraft Studio", name: "Ganesh", location: "Srikalahasthi", specialty: "Photography & Film", mobileNumber: "9876543210", availableTimings: "8:00 AM - 5:00 PM", trainingFee: "3300 INR" },
    { centerName: "Creative Vision Film School", name: "Harihs", location: "Vishakapatnam", specialty: "Photography & Film", mobileNumber: "9876543210", availableTimings: "11:00 AM - 7:00 PM", trainingFee: "3100 INR" },

    // Cooking & Culinary Arts Schools
    { centerName: "Gourmet Kitchen Academy", name: "Hemesh", location: "Chittor", specialty: "Cooking & Culinary Arts", mobileNumber: "9876543210", availableTimings: "9:00 AM - 3:00 PM", trainingFee: "4000 INR" },
    { centerName: "Flavors Culinary School", name: "Jagadeesh", location: "Anantapur", specialty: "Cooking & Culinary Arts", mobileNumber: "9876543210", availableTimings: "10:00 AM - 4:00 PM", trainingFee: "4200 INR" },
    { centerName: "ChefCraft Institute", name: "Kalyan", location: "Tirupathi", specialty: "Cooking & Culinary Arts", mobileNumber: "9876543210", availableTimings: "11:00 AM - 5:00 PM", trainingFee: "4500 INR" },
    { centerName: "TasteLab Culinary Hub", name: "Sam", location: "Nellore", specialty: "Cooking & Culinary Arts", mobileNumber: "9876543210", availableTimings: "8:00 AM - 2:00 PM", trainingFee: "4300 INR" },
    { centerName: "Sizzle & Spice Cooking School", name: "Lateesh", location: "Guntur", specialty: "Cooking & Culinary Arts", mobileNumber: "9876543210", availableTimings: "9:00 AM - 3:00 PM", trainingFee: "4100 INR" },

    // Foreign Language Centers
    { centerName: "LinguaVerse Academy", name: "Mahesh", location: "Srikalahasthi", specialty: "Foreign Language Learning", mobileNumber: "9876543210", availableTimings: "8:00 AM - 4:00 PM", trainingFee: "3000 INR" },
    { centerName: "FluentWorld Language Center", name: "Naresh", location: "Vishakapatnam", specialty: "Foreign Language Learning", mobileNumber: "9876543210", availableTimings: "9:00 AM - 5:00 PM", trainingFee: "3200 INR" },
    { centerName: "Polyglot Hub", name: "Niranjan", location: "Chittor", specialty: "Foreign Language Learning", mobileNumber: "9876543210", availableTimings: "10:00 AM - 6:00 PM", trainingFee: "3100 INR" },
    { centerName: "LinguaLink Language School", name: "Anuprakash", location: "Anantapur", specialty: "Foreign Language Learning", mobileNumber: "9876543210", availableTimings: "8:00 AM - 2:00 PM", trainingFee: "3300 INR" },
    { centerName: "LanguageLab Institute", name: "Govardhan", location: "Tirupathi", specialty: "Foreign Language Learning", mobileNumber: "9876543210", availableTimings: "9:00 AM - 3:00 PM", trainingFee: "3400 INR" },
];



document.getElementById("findTrainers").addEventListener("click", function() {
    const locationInput = document.getElementById("location").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    // Fix: 'trainers' should be 'trainingCenters' to match the given array name.
    const filteredTrainers = trainingCenters.filter(trainer => trainer.location.toLowerCase().includes(locationInput));

    if (filteredTrainers.length > 0) {
        filteredTrainers.forEach(trainer => {
            const trainerDiv = document.createElement("div");
            trainerDiv.className = "trainer";
            trainerDiv.innerHTML = `
                <h1><strong>${trainer.centerName}</strong></h1> - ${trainer.specialty}<br>
                <strong>${trainer.name}</strong> - ${trainer.specialty} (${trainer.location})<br>
                <strong>Mobile:</strong> ${trainer.mobileNumber}<br>
                <strong>Timings:</strong> ${trainer.availableTimings}<br>
                <strong>Fee:</strong> ${trainer.trainingFee}
            `;
            resultsDiv.appendChild(trainerDiv);
        });
    } else {
        resultsDiv.innerHTML = "<p>No trainers found in your area.</p>";
    }
});
