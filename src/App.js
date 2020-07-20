import React, { useState } from 'react';

import { LanguageManager } from './lib/index';

function App() {
  const [value, setValue] = useState(true);

  const label = value ? 'demo.label_01' : 'demo.label_02';

  return (
    <div className="App" >
      <h2>{LanguageManager.getLabel(label, 'default_ demoLabel')}</h2>
      <br />
      <button onClick={() => setValue(!value)}>Change label</button>
    </div>
  );
}

export default App;
