import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='flex h-screen w-screen flex-col items-center justify-center gap-10 bg-[#080922] text-green-400'>
        <h1 className='pixel-font text-4xl'>Hello, world!</h1>
        <div className='default-gradient container flex h-40 w-40 items-center justify-center text-white'>
          <div className='child'></div>
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
