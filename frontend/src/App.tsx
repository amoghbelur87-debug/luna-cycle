import React, { useState } from 'react';
import AppShell from './components/AppShell';
import PeriodTracker from './pages/PeriodTracker';
import SymptomAnalyzer from './pages/SymptomAnalyzer';
import MoodTracker from './pages/MoodTracker';
import AssistantPage from './pages/AssistantPage';
import ProductEducation from './pages/ProductEducation';
import EmergencyInfo from './pages/EmergencyInfo';

type Page = 'tracker' | 'symptoms' | 'mood' | 'assistant' | 'products' | 'emergency';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('tracker');

  const renderPage = () => {
    switch (currentPage) {
      case 'tracker': return <PeriodTracker />;
      case 'symptoms': return <SymptomAnalyzer />;
      case 'mood': return <MoodTracker />;
      case 'assistant': return <AssistantPage />;
      case 'products': return <ProductEducation />;
      case 'emergency': return <EmergencyInfo />;
      default: return <PeriodTracker />;
    }
  };

  return (
    <AppShell currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </AppShell>
  );
};

export default App;
