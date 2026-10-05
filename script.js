function generateRoadmap() {

    const goal = document.getElementById("goal").value.trim();

    const level = document.getElementById("level").value;

    const time = document.getElementById("time").value;

    const roadmapSection =
        document.getElementById("roadmap-section");

    const roadmap =
        document.getElementById("roadmap");


    // Check goal

    if (goal === "") {

        alert("Please enter your learning goal!");

        return;
    }


    // Roadmap data

    const roadmapData = [

        {
            week: "Week 1",
            topic: "Introduction & Basics",
            task: `Understand the basics of ${goal}. Learn important terms, concepts and fundamentals.`,
            project: "Create a simple beginner project."
        },

        {
            week: "Week 2",
            topic: "Core Concepts",
            task: `Learn the main concepts and important skills required for ${goal}.`,
            project: "Practice small exercises."
        },

        {
            week: "Week 3",
            topic: "Practical Learning",
            task: `Start working with practical examples related to ${goal}.`,
            project: "Build a small practical project."
        },

        {
            week: "Week 4",
            topic: "Advanced Skills",
            task: `Learn more advanced topics and improve your problem-solving skills.`,
            project: "Build an intermediate-level project."
        },

        {
            week: "Week 5",
            topic: "Real-World Project",
            task: `Apply everything you have learned to a real-world ${goal} project.`,
            project: "Build a complete project."
        },

        {
            week: "Week 6",
            topic: "Revision & Portfolio",
            task: `Revise important concepts and improve your project.`,
            project: "Add the project to your portfolio."
        }

    ];


    // Create heading

    let output = `

        <div class="roadmap-card">

            <h3>🎯 Your Goal</h3>

            <p><strong>Goal:</strong> ${goal}</p>

            <p><strong>Level:</strong> ${level}</p>

            <p><strong>Daily Study:</strong> ${time}</p>

        </div>

    `;


    // Create roadmap cards

    roadmapData.forEach(item => {

        output += `

            <div class="roadmap-card">

                <h3>📅 ${item.week}</h3>

                <p>
                    <strong>📖 Topic:</strong>
                    ${item.topic}
                </p>

                <p>
                    <strong>📝 Learn:</strong>
                    ${item.task}
                </p>

                <p>
                    <strong>💻 Project:</strong>
                    ${item.project}
                </p>

            </div>

        `;

    });


    // Show roadmap

    roadmap.innerHTML = output;

    roadmapSection.style.display = "block";


    // Scroll to roadmap

    roadmapSection.scrollIntoView({
        behavior: "smooth"
    });

}