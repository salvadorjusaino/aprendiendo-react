import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
  
  const format = (userName) => `@${userName}`;

  return (
    <section className='App'>
      <TwitterFollowCard
        formatUsername={format}
        isFollowing
        userName="salvadorjusaino"
        name="Salvador Jusaino"
      />

      <TwitterFollowCard
        formatUsername={format}
        isFollowing={false}
        userName="juanlopez"
        name="Juan Lépez"
      />

      <TwitterFollowCard
        formatUsername={format}
        isFollowing
        userName="anamaria"
        name="Ana María H"
      />
    </section>
  )
}

export default App
