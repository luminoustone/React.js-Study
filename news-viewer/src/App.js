import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async ()=> {
    try{
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=b615e45da4b44b1391185f124a2f6722',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} /> }
    </div>
  );
};

export default App;
