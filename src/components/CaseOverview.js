import React from 'react';
import '../styles/CaseOverview.css';

function CaseOverview() {
  return (
    <div className="case-overview">
      <h2>Case File: The Digital Requiem Killer</h2>
      
      <div className="overview-content">
        <section className="case-scenario">
          <h3>🔎 CASE SCENARIO</h3>
          <p>
            This is a serial homicide and psychological manipulation investigation. The primary subject of interest, 
            Damian Wells (32), a cybersecurity analyst, was found dead in his apartment under suspicious conditions. 
            Although initial evidence pointed to suicide by poisoning, forensic analysis of his laptop revealed an 
            elaborate trail of digital manipulation, encrypted communications, and pre-staged system artifacts linked 
            to an unidentified serial killer known only as the Digital Requiem Killer (DRK).
          </p>
          <p>
            Damian is no longer viewed solely as a victim—he was methodically groomed and manipulated into becoming 
            a willing or unwitting accomplice. His Windows 10 laptop serves as the sole digital evidence in the case, 
            housing all interactions, encrypted payloads, forensic anomalies, and communications with the killer. 
            The killer's influence appears woven through registry keys, batched scripts, audio messages with reversed 
            whispers, and dark web trails leading to onion links and bitcoin transactions.
          </p>
          <p>
            All forensic activity—time stamped files, log injections, audio payloads, shellbags, deleted volume 
            shadows—originates from this single device.
          </p>
        </section>
        
        <section className="evidence-items">
          <h3>💻 Evidence Items – Damian Wells (Only Evidence Source)</h3>
          <ul>
            <li><strong>01-01</strong> | Windows 10 Laptop (Damian Wells) – Physical Acquisition – 128GB SSD (Image `.E01`)</li>
            <li><strong>02-01</strong> | NTUSER.DAT hive for local registry modifications</li>
            <li><strong>03-01</strong> | Windows Event Logs – Application, System, Security</li>
            <li><strong>04-01</strong> | Browser cache and session restore files (Chrome)</li>
            <li><strong>05-01</strong> | Audio files (reversed, hidden taunts)</li>
            <li><strong>06-01</strong> | BAT scripts and system manipulation files</li>
            <li><strong>07-01</strong> | Registry keys and forensic value flags</li>
            <li><strong>08-01</strong> | Shellbag traces for hidden folders</li>
            <li><strong>09-01</strong> | Hidden VHD volume: `DeadChannel.vhd`</li>
            <li><strong>10-01</strong> | Cryptocurrency wallet export – `.csv`</li>
            <li><strong>11-01</strong> | Chat logs – `chat_export.json` referencing alias `RequiemMaster`</li>
            <li><strong>12-01</strong> | Final message file – `FinalApprentice.txt`</li>
            <li><strong>13-01</strong> | Auto-shutdown and `UserAssist` keys</li>
            <li><strong>14-01</strong> | Desktop note `BRAVO.txt` – final killer message</li>
            <li><strong>15-01</strong> | DRK startup audio execution log and execution trace</li>
          </ul>
        </section>
        
        <section className="personal-info">
          <h3>👤 General Information – Damian Wells</h3>
          <ul>
            <li><strong>Nationality:</strong> American</li>
            <li><strong>Address:</strong> 1614 Briarwood Lane, Indianapolis, IN 46202</li>
            <li><strong>DOB:</strong> 02/19/1991</li>
            <li><strong>Occupation:</strong> Cybersecurity Analyst</li>
            <li><strong>Blood Type:</strong> B+</li>
            <li><strong>Height:</strong> 5'10"</li>
            <li><strong>Weight:</strong> 189 lbs</li>
            <li><strong>Primary Device:</strong> Lenovo ThinkPad running Windows 10 Pro</li>
            <li><strong>Machine Name:</strong> DW-REQUIEM</li>
            <li><strong>Accounts:</strong> Username: DamianW</li>
            <li><strong>Email:</strong> damian.wells@protonmail.com</li>
            <li><strong>Local login password:</strong> D@rkSonata2024</li>
            <li><strong>Browser:</strong> Chrome 121.0 (Default)</li>
          </ul>
        </section>
        
        <section className="timeline">
          <h3>📆 Significant Events – Damian's Digital Descent</h3>
          <ul>
            <li><strong>March 1, 2023:</strong> First chat log with alias `RequiemMaster` found: "The second verse is yours."</li>
            <li><strong>March 3, 2023:</strong> `RequiemStart.mp3` appears in Music folder – reversed whisper instructs silence.</li>
            <li><strong>March 5, 2023:</strong> Registry key `HKLM\Software\DRK` written: "Role"="Apprentice"</li>
            <li><strong>March 8, 2023:</strong> `wallet_transactions.csv` logs a BTC transfer to DRK-linked wallet.</li>
            <li><strong>March 10, 2023:</strong> Shellbag shows hidden folder accessed: `C:\Hidden\DRK_Config\`</li>
            <li><strong>March 12, 2023:</strong> Final chat log from DRK: "You were the harmony. Play it well."</li>
            <li><strong>March 14, 2023:</strong> `whisper_final.wav` created with reversed DRK voice</li>
            <li><strong>March 16, 2023:</strong> `DRK_shutdown.bat` scheduled to execute via startup task</li>
            <li><strong>March 17, 2023:</strong> `BRAVO.txt` left on desktop – "You were listening all along."</li>
            <li><strong>March 18, 2023:</strong> `DeadChannel.vhd` discovered mounted; contains `FinalApprentice.txt`</li>
            <li><strong>March 19, 2023:</strong> Damian found dead. Machine powered off 4 hours before discovery.</li>
          </ul>
        </section>
        
        <section className="conclusion">
          <h3>🧠 Conclusion</h3>
          <p>
            This case revolves around a single digital evidence source—Damian Wells' laptop—which reveals the complete 
            unraveling of his mind through psychological and forensic manipulation. Every key artifact—metadata, chat, 
            audio payload, script, system behavior—is embedded here. Investigators believe the Digital Requiem Killer 
            used this device as a stage, not just a storage medium, to compose his symphony of silence. Damian's digital 
            footprint does not show a man resisting; it shows one drawn into the killer's rhythm.
          </p>
        </section>
      </div>
    </div>
  );
}

export default CaseOverview;