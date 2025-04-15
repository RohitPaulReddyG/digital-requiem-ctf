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
          className={activeTab === 'report' ? 'active' : ''} 
          onClick={() => setActiveTab('report')}
        >
          Forensic Report
        </button>
      </div>
      
      <main>
        {activeTab === 'questions' && <QuestionList />}
        {activeTab === 'overview' && <CaseOverview />}
        {activeTab === 'report' && <Report />}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;