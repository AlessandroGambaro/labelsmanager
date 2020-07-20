import React, { useEffect, useState } from 'react';

import { LanguageManager } from './lib/index';

function App() {
  const [labels, setLabels] = useState({});
  const [value, setValue] = useState(true);
  const label = value ? 'demo.label_01' : 'demo.label_02';

  useEffect(() => {
    // ********************************************************************************
    // This should be done only once and saved in the global APP state...
    // ********************************************************************************
    LanguageManager.loadLabels('it-IT').then(response => {
      setLabels(response);
    })
      .catch(err => {
        console.log("Problem loading the Site Labels");
      });
  }, []);

  return (
    <div className="App" >
      <h2>{LanguageManager.getLabel(labels, label, 'default_ demoLabel')}</h2>
      <br />
      <button onClick={() => setValue(!value)}>Change label</button>
    </div>
  );
}

export default App;
