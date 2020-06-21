import React from 'react';
import Cars from './cars.js';
function App() {
  return (
    <div className="App">
   <Cars carName='Bugatti' speed="304MPH"/>
   <Cars carName='Koenigsegg' speed="278MPH"/>
   </div>
  );
}

export default App;
