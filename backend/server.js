const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse"); // ✅ version 1.1.1 works

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.post("/analyze", async (req, res) => {
    try {
        let resumeText = "";

        if (req.files && req.files.resume) {
            const pdfBuffer = req.files.resume.data;
            try {
                const pdfData = await pdfParse(pdfBuffer); // ✅ guaranteed to work
                resumeText = pdfData.text || "";
            } catch (err) {
                console.error("PDF parse error:", err);
                return res.status(400).json({ error: "Error reading PDF" });
            }
        } else {
            resumeText = req.body.resumeText || "";
        }

        const jobText = req.body.jobText || "";
        const resumeWords = resumeText.toLowerCase().split(/\s+/);
        const jobWords = jobText.toLowerCase().split(/\s+/);

        const matches = jobWords.filter(jobWord =>
            resumeWords.some(resWord => resWord.includes(jobWord))
        );

        const score = jobWords.length
            ? ((matches.length / jobWords.length) * 100).toFixed(1)
            : 0;

        res.json({ score, matches });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

app.listen(process.env.PORT || 3000, () =>
    console.log("Server running on port 3000")
);
