import React from 'react';

const SurahAtTakwir = () => {
  const verses = [
    { arabic: 'إِذَا ٱلشَّمْسُ كُوِّرَتْ', english: 'When the sun is wrapped up [in darkness]' },
    { arabic: 'وَإِذَا ٱلنُّجُومُ ٱنكَدَرَتْ', english: 'And when the stars fall, dispersing,' },
    { arabic: 'وَإِذَا ٱلْجِبَالُ سُيِّرَتْ', english: 'And when the mountains are removed' },
    { arabic: 'وَإِذَا ٱلْعِشَارُ عُطِّلَتْ', english: 'And when full-term she-camels are neglected' },
    { arabic: 'وَإِذَا ٱلْوُحُوشُ حُشِرَتْ', english: 'And when the wild beasts are gathered' },
    { arabic: 'وَإِذَا ٱلْبِحَارُ سُجِّرَتْ', english: 'And when the seas are filled with flame' },
    
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#1a237e' }}>Surah At-Takwir (The Overthrowing)</h2>
      <h3 style={{ textAlign: 'center', color: '#303f9f' }}>سورة التكوير</h3>
      {verses.map((verse, index) => (
        <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #e0e0e0', paddingBottom: '10px' }}>
          <p style={{ fontSize: '15px', textAlign: 'right', direction: 'rtl' }}>{verse.arabic}</p>
          <p style={{ fontSize: '12px', color: '#555' }}>{index + 1}. {verse.english}</p>
        </div>
      ))}
      <p style={{ fontSize: '14px', color: '#777', marginTop: '20px' }}>
        Source: The Holy Quran, Chapter 81 (At-Takwir)
      </p>
    </div>
  );
};

export default SurahAtTakwir;