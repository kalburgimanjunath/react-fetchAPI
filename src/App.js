import React, { useState, useEffect } from 'react';
import './style.css';

function App() {
  let [photos, setphotos] = useState(null);

  // 3. Create out useEffect function
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      // 4. Setting *photos* to the image url that we received from the response above
      .then((data) => setphotos(data));
  }, []);
  return (
    <div className="App">
      {/* 5. Returning an img element for each url, again with the value of our src set to the image url */}
      {photos &&
        photos.map((item) => (
          <a keys={item.id} href={item.url}>
            <img width={'200px'} height={'200px'} src={item.thumbnailUrl}></img>
          </a>
        ))}
    </div>
  );
}
export default App;
