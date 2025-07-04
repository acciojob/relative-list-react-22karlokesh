// import React from 'react'

// const App = () => {
//   return (
//     <div id="main">
//                {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App

import React from 'react';

const App = () => {
  const relatives = ['Uncle', 'Aunt', 'Cousin', 'Grandparents', 'Brother'];

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol key="relativeList">
        {relatives.map((name, index) => (
          <li key={`relativeListItem${index + 1}`}>{name}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;

