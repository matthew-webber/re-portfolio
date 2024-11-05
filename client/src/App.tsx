import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='flex h-screen w-screen flex-col items-center gap-10 bg-[#080922] text-green-400'>
        <div className='default-gradient container flex h-40 w-40 items-center justify-center text-white'>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child metal-border'></div>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
          <div className='child'></div>
        </div>
      </div>
    </>
  );
}

export default App;
