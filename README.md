# 🕵️ Digital Requiem CTF – Narrative Forensic Challenge

Welcome to **Digital Requiem CTF**, an interactive forensic investigation experience. This platform immerses you in a fictional digital crime scene where you play the role of a forensic analyst, uncovering clues and solving puzzles using real-world forensic tools.

---

## 🌐 Website Overview

The platform uses a clean tabbed interface, organized into three core sections:

### 🔐 CTF Questions
- A set of forensic Capture The Flag (CTF) questions tied directly to digital evidence.
- Questions are grouped by major case events.
- Includes hints and optional answer reveal.
- Evidence downloads provided for hands-on practice.

### 📁 Case Overview
- Storyline following the suspicious death of Damian Wells, a cybersecurity analyst.
- Details on psychological manipulation, registry modifications, audio payloads, and hidden evidence.
- A complete timeline, character background, and high-level investigative summary.

### 📊 Forensic Report
- Open a detailed forensic report generated using Autopsy.
- Includes findings from disk images, hidden volumes, audio analysis, browser activity, and registry artifacts.

---

## 🎯 Purpose and Audience

This challenge is built for:
- **Cybersecurity Enthusiasts & Students**  
  Learn hands-on digital forensics through realistic cases.
- **Forensic Investigators**  
  Test your skills in evidence collection and behavioral profiling.
- **Educators & Trainers**  
  Use it as a classroom challenge to teach forensic workflows.

---

## 🧩 How to Play

1. **Read the Case Summary**  
   Start with the full narrative and background on Damian Wells.

2. **Download the Evidence**  
   Available forensic images (.E01, .VHD, logs, etc.) are downloadable via the site.

3. **Analyze Artifacts**  
   Use tools like Autopsy or The Sleuth Kit to explore:
   - NTUSER.DAT
   - Shellbags
   - Encrypted chats
   - Audio payloads
   - Hidden volumes

4. **Answer Questions**  
   Submit your findings for each event section to test your deductions.

5. **Solve the Case**  
   Piece together the timeline and uncover the true identity and methods of the **Digital Requiem Killer (DRK)**.

---

## 🚀 Live Demo

A live version of the challenge is available at:  
👉 [Digital Requiem CTF Live Demo](https://digital-requiem-ctf.vercel.app/)

It includes the full interactive interface, downloadable forensic files, and live validation.

---

## 🛠 Tech Stack

| Layer       | Stack                                      |
|-------------|--------------------------------------------|
| Frontend    | HTML5, CSS3, JavaScript (React)            |
| Styling     | Tailwind CSS / Bootstrap                   |
| Backend     | Static site hosted via Vercel              |
| Evidence    | Forensic images and files (static assets)  |
| Tools Used  | Autopsy, Sleuth Kit, Plaso, Volatility     |

---

## 🧪 Local Development

Clone and run the project locally:

```bash
git clone https://github.com/yourusername/digital-requiem.git
cd digital-requiem
npm install
npm start
