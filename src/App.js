import React, { useState } from 'react';
import './App.css';
import QuestionList from './components/QuestionList';
import CaseOverview from './components/CaseOverview';
// Remove the Report import since it's not being used
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('questions');

  return (
    <div className="App">
      <Header />
      
      <div className="tab-navigation">
        <button 
          className={activeTab === 'questions' ? 'active' : ''} 
          onClick={() => setActiveTab('questions')}
        >
          CTF Questions
        </button>
        <button 
          className={activeTab === 'overview' ? 'active' : ''} 
          onClick={() => setActiveTab('overview')}
        >
          Case Overview
        </button>
        <button 
          onClick={() => {
            const reportWindow = window.open('/ogreport.html', '_blank');
            if (reportWindow) {
              reportWindow.opener = null; // Security feature
            }
          }}
        >
          Forensic Report
        </button>
      </div>
      
      <main>
        {activeTab === 'questions' && <QuestionList />}
        {activeTab === 'overview' && <CaseOverview />}
        {/* Removed the report component rendering */}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;