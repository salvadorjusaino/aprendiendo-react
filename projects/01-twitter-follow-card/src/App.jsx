import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
  
  const format = (userName) => `@${userName}`;

  return (
    <section className='App'>
      <TwitterFollowCard isFollowing userName="salvadorjusaino">
        Salvador Jusaino
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing={false} userName="juanlopez">
        Juan Lépez
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName="anamaria">
        Ana María H
      </TwitterFollowCard>
    </section>
  )
}

export default App
