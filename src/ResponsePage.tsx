import React from 'react';
import { useLocation } from 'react-router-dom';

interface ResponseData {
  name: string;
  email: string;
  phone: string;
  skills: string;
}

const ResponsePage: React.FC = () => {
  const location = useLocation();
  const { data } = location.state as { data: ResponseData };
  console.log('Received Data:', data);

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <div style={styles.label}>Name:</div>
        <div style={styles.value}>{data.name}</div>
      </div>
      <div style={styles.row}>
        <div style={styles.label}>Email:</div>
        <div style={styles.value}>{data.email}</div>
      </div>
      <div style={styles.row}>
        <div style={styles.label}>Phone:</div>
        <div style={styles.value}>{data.phone}</div>
      </div>
      <div style={styles.row}>
        <div style={styles.label}>Skills:</div>
        <div style={styles.value}>{data.skills}</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '10px 20px',
    padding: '20px',
    border: '1px solid #ccc',
    width: '400px',
    height: '400px'
  },
  row: {
    display: 'contents'
  },
  label: {
    fontWeight: 'bold'
  },
  value: {
    whiteSpace: 'pre-wrap'
  }
};

export default ResponsePage;

