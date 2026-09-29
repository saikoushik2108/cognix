import React, { useState, useEffect } from 'react';
import { 
  Share2, ArrowRight, Layers, ShieldCheck, Box, 
  Building2, User, FileText, Receipt, MapPin, Calendar, DollarSign, CheckCircle2 
} from 'lucide-react';
import EntityBadge from '../components/common/EntityBadge';
import { aiService } from '../services/aiService';

export default function SemanticModelPage() {
  const [semanticTypes, setSemanticTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await aiService.getSemanticModel();
      setSemanticTypes(data);
      if (data.length > 0) setSelectedType(data[0]);
    }
    load();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="badge badge-blue">Enterprise Ontology</span>
          <span className="badge badge-green">Standardized Schema</span>
        </div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px' }}>
          Semantic Model
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
          Define the entities and relationships that shape your business knowledge. 
          Enforces schema constraints and prevents arbitrary invented triples.
        </p>
      </div>

      {/* Main Layout: Types Grid + Selected Type Inspector */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 440px) 1fr', gap: '24px', alignItems: 'start' }}>
        
        {/* Left: Entity Type Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
            Configured Entity Types ({semanticTypes.length})
          </div>

          {semanticTypes.map((type) => {
            const isSelected = selectedType?.id === type.id;
            return (
              <div
                key={type.id}
                className="card"
                onClick={() => setSelectedType(type)}
                style={{
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  border: isSelected ? '2px solid #2563eb' : '1px solid var(--border-light)',
                  backgroundColor: isSelected ? '#eff6ff' : '#ffffff',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: `${type.color}15`,
                    color: type.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Layers size={18} />
                  </div>

                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      {type.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {type.properties.length} properties • {type.allowed_relationships.length} relations
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span className="badge badge-gray">{type.instances_count} in KB</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Detailed Schema & Relation Constraints */}
        {selectedType && (
          <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Header info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <EntityBadge type={selectedType.name} />
                <span className="badge badge-blue">{selectedType.instances_count} Active Instances</span>
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                {selectedType.name}
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                {selectedType.description}
              </p>
            </div>

            {/* Allowed Properties */}
            <div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '10px' }}>
                Permitted Schema Properties
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedType.properties.map(p => (
                  <span
                    key={p}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.775rem',
                      padding: '4px 10px',
                      backgroundColor: '#f1f5f9',
                      borderRadius: '6px',
                      color: '#334155',
                      border: '1px solid #e2e8f0'
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Allowed Relationships Rules */}
            <div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '12px' }}>
                Permitted Outgoing Relationships (Ontology Graph)
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedType.allowed_relationships.map((rel, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      backgroundColor: '#f8fafc',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid #e2e8f0',
                      fontSize: '0.85rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <strong style={{ color: '#1e293b' }}>{selectedType.name}</strong>
                      <span className="badge badge-blue">
                        → {rel.relation} →
                      </span>
                      <strong style={{ color: '#2563eb' }}>{rel.target}</strong>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#059669', fontSize: '0.75rem', fontWeight: 600 }}>
                      <CheckCircle2 size={13} />
                      <span>Allowed</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Extracted Instances */}
            <div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '10px' }}>
                Canonical Knowledge Instances in Current KB
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedType.examples.map(ex => (
                  <div
                    key={ex}
                    style={{
                      padding: '6px 12px',
                      backgroundColor: '#ffffff',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)'
                    }}
                  >
                    {ex}
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
