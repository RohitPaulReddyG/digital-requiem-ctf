import React, { useState } from 'react';
import './App.css';
import QuestionList from './components/QuestionList';
import CaseOverview from './components/CaseOverview';
import Report from './components/Report';
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
        <a 
          href="/ogreport.html" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            background: 'none', 
            border: 'none', 
            padding: '0', 
            cursor: 'pointer',
            display: 'inline-block'
          }}
        >
          <button>Forensic Report</button>
        </a>
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