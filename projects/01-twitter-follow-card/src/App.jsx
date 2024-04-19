import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
  
  const format = (userName) => `@${userName}`;

  const salvador = { isFollowing: true, userName: 'salvadorjusaino' }
  const juan = { isFollowing: true, userName: 'juanlopez' }

  return (
    <section className='App'>
      <TwitterFollowCard {...salvador}>
        Salvador Jusaino
      </TwitterFollowCard>

      <TwitterFollowCard {...juan}>
        Juan Lépez
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName="anamaria">
        Ana María H
      </TwitterFollowCard>
    </section>
  )
}

export default App
