const form = document.getElementById("analyzeForm");
const resumeFile = document.getElementById("resumeFile");
const resumeTextArea = document.getElementById("resumeText");
const jobTextArea = document.getElementById("jobText");
const resultsDiv = document.getElementById("results");
const highlightedDiv = document.getElementById("highlightedResume");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("resumeText", resumeTextArea.value);
    formData.append("jobText", jobTextArea.value);

    if (resumeFile.files.length > 0) {
        formData.append("resume", resumeFile.files[0]);
    }

    try {
        const res = await fetch("http://localhost:3000/analyze", {
            method: "POST",
            body: formData
        });

        if (!res.ok) {
            const errData = await res.json();
            throw new Error(errData.error || "Server error");
        }

        const data = await res.json();

        // Display results
        resultsDiv.innerHTML = `
            <strong>Match Score:</strong> ${data.score}%<br>
            <strong>Matched Keywords:</strong> ${data.matches.join(", ") || "None"}
        `;

        highlightedDiv.innerHTML = data.highlightedResume || "<em>No resume content available.</em>";

    } catch (err) {
        console.error("Frontend error:", err);
        resultsDiv.textContent = "Error analyzing resume. Check console.";
        highlightedDiv.innerHTML = "";
    }
});
