import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Instafeed from 'instafeed.js'

ReactDOM.render(<App />, document.getElementById('react-root'))

const instafeed = new Instafeed({
  get: 'user',
  userId: '7778898713',
  clientId: 'd99a7789c4d34317834eca5cd38bc01d',
  accessToken: '7778898713.d99a778.7c28363a008e486295bd468ada895828',
  resolution: 'standard_resolution',
  template: '<div class="span4"><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a></div>',
  sortBy: 'most-recent',
  limit: 3,
  links: false,
});

instafeed.run();
