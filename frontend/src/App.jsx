import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppShell from './components/layout/AppShell';

import DashboardPage from './pages/DashboardPage';
import DocumentsPage from './pages/DocumentsPage';
import DocumentProcessingPage from './pages/DocumentProcessingPage';
import DocumentInspectorPage from './pages/DocumentInspectorPage';
import EntityExplorerPage from './pages/EntityExplorerPage';
import RelationshipExplorerPage from './pages/RelationshipExplorerPage';
import FactExplorerPage from './pages/FactExplorerPage';
import EvidenceCenterPage from './pages/EvidenceCenterPage';
import KnowledgeGraphPage from './pages/KnowledgeGraphPage';
import AskKnowledgePage from './pages/AskKnowledgePage';
import ReviewCenterPage from './pages/ReviewCenterPage';
import ContradictionsPage from './pages/ContradictionsPage';
import SemanticModelPage from './pages/SemanticModelPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ArchitecturePage from './pages/ArchitecturePage';
import SettingsPage from './pages/SettingsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<DashboardPage />} />
          <Route path="documents" element={<DocumentsPage />} />
          <Route path="processing/:docId" element={<DocumentProcessingPage />} />
          <Route path="documents/inspector/:docId" element={<DocumentInspectorPage />} />
          <Route path="knowledge/entities" element={<EntityExplorerPage />} />
          <Route path="knowledge/relationships" element={<RelationshipExplorerPage />} />
          <Route path="knowledge/facts" element={<FactExplorerPage />} />
          <Route path="knowledge/evidence" element={<EvidenceCenterPage />} />
          <Route path="graph" element={<KnowledgeGraphPage />} />
          <Route path="ask" element={<AskKnowledgePage />} />
          <Route path="review" element={<ReviewCenterPage />} />
          <Route path="contradictions" element={<ContradictionsPage />} />
          <Route path="semantic-model" element={<SemanticModelPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="architecture" element={<ArchitecturePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
