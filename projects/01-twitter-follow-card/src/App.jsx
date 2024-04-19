import { useState } from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
  
  const [name, setName] = useState('midudev');

  const format = (userName) => `@${userName}`;

  const salvador = { initialIsFollowing: true, userName: 'salvadorjusaino' }
  const juan = { initialIsFollowing: false, userName: 'juanlopez' }

  return (
    <section className='App'>
      <TwitterFollowCard {...salvador}>
        Salvador Jusaino
      </TwitterFollowCard>

      <TwitterFollowCard {...juan}>
        Juan Lépez
      </TwitterFollowCard>

      <TwitterFollowCard initialIsFollowing userName={ name }>
        Ana María H
      </TwitterFollowCard>

      <button onClick={() => setName('anamaria')}>Cambiar nombre</button>
    </section>
  )
}

export default App
