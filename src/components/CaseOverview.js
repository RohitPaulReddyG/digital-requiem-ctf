import React from 'react';
import '../styles/CaseOverview.css';

function CaseOverview() {
  return (
    <div className="case-overview">
      <h2>Case Overview: Digital Requiem Investigation</h2>
      
      <div className="overview-content">
        <section>
          <h3>Background</h3>
          <p>
            The Digital Requiem (DRK) case involves a sophisticated cyber operation that has been linked to multiple 
            high-profile data breaches. Our investigation centers around Damian Marsh, a computer science student 
            who was found deceased in his apartment on March 20, 2023. Evidence suggests Damian was recruited as an 
            "apprentice" for the DRK group shortly before his death.
          </p>
        </section>
        
        <section>
          <h3>Timeline of Events</h3>
          <ul>
            <li><strong>March 1, 2023:</strong> Initial contact between Damian and a DRK representative</li>
            <li><strong>March 5, 2023:</strong> Evidence of Damian's promotion to "Apprentice" status</li>
            <li><strong>March 8, 2023:</strong> Cryptocurrency transactions linked to dark web marketplaces</li>
            <li><strong>March 10, 2023:</strong> Hidden folder activity detected on Damian's system</li>
            <li><strong>March 14, 2023:</strong> Audio files with embedded messages discovered</li>
            <li><strong>March 18, 2023:</strong> Final communications and encrypted disk image created</li>
            <li><strong>March 20, 2023:</strong> Damian Marsh found deceased</li>
          </ul>
        </section>
        
        <section>
          <h3>Investigation Objectives</h3>
          <p>
            Your task is to analyze the forensic image of Damian's computer to:
          </p>
          <ol>
            <li>Identify the DRK contacts who recruited Damian</li>
            <li>Trace cryptocurrency transactions related to DRK activities</li>
            <li>Recover deleted files and hidden communications</li>
            <li>Decode encrypted messages and determine the nature of the "final orchestration"</li>
            <li>Establish a complete timeline of events leading to Damian's involvement with DRK</li>
          </ol>
        </section>
        
        <section>
          <h3>Available Evidence</h3>
          <p>
            The forensic image contains:
          </p>
          <ul>
            <li>Chat logs and communication records</li>
            <li>Registry artifacts</li>
            <li>Cryptocurrency transaction records</li>
            <li>Shellbag and file system artifacts</li>
            <li>Audio files with potential steganography</li>
            <li>Encrypted virtual disk images</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default CaseOverview;