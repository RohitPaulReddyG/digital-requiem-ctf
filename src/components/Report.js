import React from 'react';
import '../styles/Report.css';

function Report() {
  return (
    <div className="report-container">
      <h2>Autopsy Forensic Report for case D.R.K</h2>
      
      <div className="report-content">
        <div className="report-nav">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#summary">Case Summary</a></li>
            <li><a href="#keyword-hits">Keyword Hits</a></li>
            <li><a href="#notable-items">Notable Items</a></li>
            <li><a href="#tagged-files">Tagged Files</a></li>
            <li><a href="#tagged-images">Tagged Images</a></li>
            <li><a href="#tagged-results">Tagged Results</a></li>
          </ul>
        </div>
        
        <div className="report-details">
          <section id="summary">
            <h3>Case Summary</h3>
            <p>
              This report contains the forensic analysis of Damian Wells' laptop, which serves as the primary 
              evidence in the Digital Requiem Killer investigation. The analysis reveals a pattern of 
              psychological manipulation and digital artifacts that suggest Damian was groomed by the killer.
            </p>
            <p>
              Key findings include encrypted communications, modified registry entries, hidden audio files with 
              reversed messages, and evidence of dark web transactions. The timeline of events shows a 
              progressive descent from initial contact to Damian's eventual death.
            </p>
          </section>
          
          <section id="keyword-hits">
            <h3>Keyword Hits</h3>
            <ul>
              <li>"RequiemMaster" - Found in chat logs and browser history</li>
              <li>"Apprentice" - Found in registry keys and configuration files</li>
              <li>"DRK" - Found across multiple file types and system locations</li>
              <li>"harmony" - Found in audio transcripts and text files</li>
              <li>"silence" - Recurring theme in communications</li>
            </ul>
          </section>
          
          <section id="notable-items">
            <h3>Notable Items</h3>
            <ul>
              <li>
                <strong>DeadChannel.vhd</strong> - Hidden virtual hard disk containing final messages
              </li>
              <li>
                <strong>whisper_final.wav</strong> - Audio file with reversed voice message
              </li>
              <li>
                <strong>ApprenticeFlag.reg</strong> - Registry modification showing Damian's role
              </li>
              <li>
                <strong>wallet_transactions.csv</strong> - Bitcoin transaction records
              </li>
              <li>
                <strong>DRK_shutdown.bat</strong> - Scheduled task for system shutdown
              </li>
            </ul>
          </section>
          
          <section id="tagged-files">
            <h3>Tagged Files</h3>
            <table>
              <thead>
                <tr>
                  <th>Filename</th>
                  <th>Location</th>
                  <th>Created</th>
                  <th>Modified</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>chat_export.json</td>
                  <td>C:\Users\Damian\Documents\Communications</td>
                  <td>Mar 1, 2023</td>
                  <td>Mar 12, 2023</td>
                </tr>
                <tr>
                  <td>RequiemStart.mp3</td>
                  <td>C:\Users\Damian\Music</td>
                  <td>Mar 3, 2023</td>
                  <td>Mar 3, 2023</td>
                </tr>
                <tr>
                  <td>ApprenticeFlag.reg</td>
                  <td>C:\Users\Damian\Documents\Registry</td>
                  <td>Mar 5, 2023</td>
                  <td>Mar 5, 2023</td>
                </tr>
                <tr>
                  <td>BRAVO.txt</td>
                  <td>C:\Users\Damian\Desktop</td>
                  <td>Mar 17, 2023</td>
                  <td>Mar 17, 2023</td>
                </tr>
                <tr>
                  <td>FinalApprentice.txt</td>
                  <td>DeadChannel.vhd</td>
                  <td>Mar 18, 2023</td>
                  <td>Mar 18, 2023</td>
                </tr>
              </tbody>
            </table>
          </section>
          
          <section id="tagged-images">
            <h3>Tagged Images</h3>
            <p>No relevant images were found in the forensic analysis.</p>
          </section>
          
          <section id="tagged-results">
            <h3>Tagged Results</h3>
            <p>
              The forensic analysis confirms that Damian Wells was systematically manipulated by an 
              entity identifying as the Digital Requiem Killer. The evidence suggests a calculated 
              psychological operation that led to Damian's participation in unknown activities before 
              his death.
            </p>
            <p>
              The final message "I was just movement two" implies that Damian was part of a larger 
              orchestration, potentially indicating that the killer has targeted or will target 
              additional victims.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Report;