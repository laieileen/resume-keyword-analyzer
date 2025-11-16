# Resume Keyword Analyzer

**Resume Keyword Analyzer** is a web application that helps you compare your resume against a job description. It highlights matched keywords and calculates a match score so you can optimize your resume for applicant tracking systems (ATS).

---

## Features

- Upload a PDF resume or paste your resume text.
- Paste a job description.
- Highlight matched keywords in your resume.
- Display a **match score** based on keyword overlap.
- Works entirely in the browser with a Node.js backend.

---

## Technologies

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express, CommonJS
- **Libraries:** `express-fileupload`, `pdf-parse`, `cors`

---

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd resume-keyword-analyzer
Install dependencies:

bash
Copy code
npm install
Start the backend server:

bash
Copy code
node backend/server.js
The server runs on http://localhost:3000.

Open index.html in your browser.

Usage
Paste your resume in the left textarea or upload a PDF resume.

Paste the job description in the right textarea.

Click Analyze.

View your match score, matched keywords, and highlighted resume.

Project Structure
powershell
Copy code
resume-keyword-analyzer/
├─ backend/
│  └─ server.js       # Node.js backend server
├─ index.html         # Frontend
├─ style.css          # CSS for UI
└─ script.js          # Frontend JavaScript
Example
Job description keywords: JavaScript HTML CSS React Node

Resume includes: Proficient in HTML, CSS, and React.

Match score: 60%

Highlighted resume: HTML, CSS, and React highlighted.