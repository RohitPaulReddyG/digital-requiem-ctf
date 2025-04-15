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
        <button 
          onClick={() => window.open('/report.html', '_blank')}
        >
          Forensic Report
        </button>
        {/* Removed the forensic report tab */}
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