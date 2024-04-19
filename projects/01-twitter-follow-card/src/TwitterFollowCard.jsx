import { useState } from "react";

export function TwitterFollowCard({ children, userName = 'Unknown', initialIsFollowing }) {
  
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={`https://placehold.co/50`} alt={`El avatar ${userName}`} />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUsername'>@{userName}</span>
        </div>
      </header>
      <aside className="tw-followCard-aside">
        <button className={buttonClassName} onClick={handleClick}>{text}</button>
      </aside>
    </article>
  )
}