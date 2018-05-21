import React from 'react'
import InstagramFeed from './InstagramFeed'

const FACEBOOK_LINK = 'https://www.facebook.com/juliamakespies'
const INSTAGRAM_LINK = 'https://www.instagram.com/juliamakespies'

const Follow = () => (
  <div>
    <div className="row">
      <div className="span12">
        <h2>Follow Julia</h2>
      </div>
    </div>

    <InstagramFeed />

    <div className="row">
      <div className="span12">
        <p>
          +1 (415) 215 0260 &middot; <a target="_blank" href={FACEBOOK_LINK}>Facebook</a> &middot; <a target="_blank" href={INSTAGRAM_LINK}>Instagram</a>
        </p>
      </div>
    </div>
  </div>
)

export default Follow
