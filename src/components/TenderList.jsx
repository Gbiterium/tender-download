import React, { useState, useEffect } from 'react';
import TenderItem from './TenderItem';
import { fetchTenders } from '../api';

const TenderList = ({ searchQuery }) => {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchTenders();
        setTenders(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredTenders = tenders.filter(tender =>
    tender.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="row">
      {filteredTenders.map(tender => (
        <div className='col-md-6 col-lg-4'>
        <TenderItem key={tender.id} tender={tender} />
        </div>
      ))}
    </div>
  );
};

export default TenderList;
