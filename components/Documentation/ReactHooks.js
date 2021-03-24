import React, { useState } from 'react';
import Component1 from './ReactHooksComponents/Part1';


export default function Example (){
  const part1 = <Component1 />;
  const part2 = 'sadsadassdadsaasd part 2';

  const [part, setPart] = useState('Reuben');
  const [subscribe, setSubscribe] =useState(0);
  //[this.state, setState] = this.state = ____
  return (
    <div>
      {part}
      {subscribe}
  
      <button onClick={() => setPart(part1)}>
     Part1
      </button>
      <button onClick={() => setPart(part2)}>
    Part2
      </button>
      <button onClick={() => setSubscribe(subscribe + 1)}>
     Subscribe
      </button>
    
    </div>
  );
}