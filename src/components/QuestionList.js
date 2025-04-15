import React, { useState } from 'react';
import '../styles/QuestionList.css';
import Question from './Question';

function QuestionList() {
  const [showAnswers, setShowAnswers] = useState(false);
  
  const questions = [
    {
      id: 1,
      event: 'Event 1: Initial Contact (Mar 1, 2023)',
      question: 'What alias contacted Damian first?',
      hint: 'Check exported chat logs in Documents/Communications.',
      answer: 'RequiemMaster'
    },
    {
      id: 2,
      event: 'Event 1: Initial Contact (Mar 1, 2023)',
      question: 'Which file logs the first message?',
      hint: 'It\'s a JSON file in the Communications folder.',
      answer: 'chat_export.json'
    },
    {
      id: 3,
      event: 'Event 2: DRK Promotion (Mar 5, 2023)',
      question: 'Which registry key shows Damian as the apprentice?',
      hint: 'Check the Registry folder for .reg files.',
      answer: 'ApprenticeFlag.reg'
    },
    {
      id: 4,
      event: 'Event 2: DRK Promotion (Mar 5, 2023)',
      question: 'What value is set for the \'Role\' key?',
      hint: 'Look inside the .reg file contents.',
      answer: 'Apprentice'
    },
    {
      id: 5,
      event: 'Event 3: Dark Web Transactions (Mar 8, 2023)',
      question: 'What BTC amount was transferred?',
      hint: 'Inspect the .csv file in the Documents/Crypto folder.',
      answer: '0.5'
    },
    {
      id: 6,
      event: 'Event 3: Dark Web Transactions (Mar 8, 2023)',
      question: 'What is the wallet address found?',
      hint: 'It\'s in the same file as the BTC amount.',
      answer: '3QyYvVW1aW3j6QybxdVRo3X8Go9v9y6k7K'
    },
    {
      id: 7,
      event: 'Event 4: Hidden Folder Trace (Mar 10, 2023)',
      question: 'What was the name of the deleted folder accessed?',
      hint: 'Correlate shellbag activity with deleted folder paths.',
      answer: 'DRK_Config'
    },
    {
      id: 8,
      event: 'Event 4: Hidden Folder Trace (Mar 10, 2023)',
      question: 'Which artifact logs shellbag activity?',
      hint: 'Located in the Documents/Logs folder.',
      answer: 'shellbag_trace.txt'
    },
    {
      id: 9,
      event: 'Event 5: DRK Audio Planting (Mar 14, 2023)',
      question: 'What was the name of the final whisper audio file?',
      hint: 'Look in Music/DRK folder.',
      answer: 'whisper_final.wav'
    },
    {
      id: 10,
      event: 'Event 5: DRK Audio Planting (Mar 14, 2023)',
      question: 'What phrase was hidden in the audio?',
      hint: 'Reverse the .wav file using audio analysis tools.',
      answer: 'You were the harmony'
    },
    {
      id: 11,
      event: 'Event 6: Final Orchestration (Mar 18, 2023)',
      question: 'What file exists inside the mounted VHD?',
      hint: 'Mount the DeadChannel.vhd located in Documents/Volumes.',
      answer: 'FinalApprentice.txt'
    },
    {
      id: 12,
      event: 'Event 6: Final Orchestration (Mar 18, 2023)',
      question: 'What does FinalApprentice.txt say?',
      hint: 'Open the file from the mounted VHD drive once attached.',
      answer: 'I was just movement two'
    }
  ];

  // Group questions by event
  const groupedQuestions = questions.reduce((acc, question) => {
    if (!acc[question.event]) {
      acc[question.event] = [];
    }
    acc[question.event].push(question);
    return acc;
  }, {});

  return (
    <div className="question-list">
      <div className="controls">
        <button 
          className={`toggle-answers ${showAnswers ? 'active' : ''}`}
          onClick={() => setShowAnswers(!showAnswers)}
        >
          {showAnswers ? 'Hide Answers' : 'Show Answers'}
        </button>
        
        <div className="download-section">
          <h3>Download Forensic Images</h3>
          <a 
            href="https://drive.google.com/drive/folders/1OpbWv5jbaOBAlax5i37AxE7qak_npuhg?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="download-button"
          >
            Download from Google Drive
          </a>
          <br />
          <a 
            href="/report.html" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Autopsy Report
          </a>
        </div>
      </div>

      {Object.entries(groupedQuestions).map(([event, eventQuestions]) => (
        <div key={event} className="event-section">
          <h2>{event}</h2>
          {eventQuestions.map(q => (
            <Question 
              key={q.id} 
              question={q} 
              showAnswer={showAnswers} 
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default QuestionList;