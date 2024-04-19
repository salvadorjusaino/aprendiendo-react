export function TwitterFollowCard({ formatUsername, userName, name, isFollowing }) {
  
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={`https://placehold.co/50`} alt={`El avatar ${userName}`} />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUsername'>{formatUsername(userName)}</span>
        </div>
      </header>
      <aside>
          <button className='tw-followCard-avatar-button'>Seguir</button>
      </aside>
    </article>
  )
}