import { useState } from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
  
  const [name, setName] = useState('midudev');

  const format = (userName) => `@${userName}`;

  const salvador = { initialIsFollowing: true, userName: 'salvadorjusaino' }
  const juan = { initialIsFollowing: false, userName: 'juanlopez' }

  console.log('🚀 ~ ', juan);
  

  const users = [
    {
      userName: 'salvadorjusaino',
      name: 'Salvador Jusaino',
      isFollowing: true
    },
    {
      userName: 'juanlopez',
      name: 'Juan López',
      isFollowing: false
    }
  ];

  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => {
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}

export default App
