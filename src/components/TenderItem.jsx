import React from 'react';

const TenderItem = ({ tender }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title font-weight-bold">{tender.title}</h5>
      <p className="card-text">{tender.description}</p>
      <p className="card-text"><small className="text-muted">Deadline: {tender.deadline}</small></p>
      <a href={tender.document} className="btn primary-bg text-white font-weight-bold" download>Download</a>
    </div>
  </div>
);

export default TenderItem;
