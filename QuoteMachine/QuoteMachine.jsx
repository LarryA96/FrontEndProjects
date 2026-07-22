/** Need to edit new quote button so that "on-click" it changes the html content of
    #text
    #author
    Selecting randomly from an array of [text, author]
    Be sure to remove current quote from array before selecting new quote
*/

import { useState } from 'react'
import 'randomizer.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <head>
    <link rel="stylesheet" href="https://random-quote-machine.freecodecamp.rocks/styles.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <title>FCC : Random Quote Machine</title>
  </head>

      <div id="wrapper">
      <div id="quote-box">
        <div class="quote-text" style="opacity: 1;">
          <i class="fa fa-quote-left"> </i><span id="text">A truly rich man is one whose children run into his arms when his hands are empty.</span>
        </div>
        <div class="quote-author" style="opacity: 1;">- <span id="author">Unknown</span></div>
        <div class="buttons">
          <a class="button" id="tweet-quote" title="Tweet this quote!" target="_top" href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22A%20truly%20rich%20man%20is%20one%20whose%20children%20run%20into%20his%20arms%20when%20his%20hands%20are%20empty.%22%20Unknown" style="background-color: rgb(71, 46, 50);">
            <i class="fa fa-twitter"></i>
          </a>
          <a class="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Unknown&amp;content=A%20truly%20rich%20man%20is%20one%20whose%20children%20run%20into%20his%20arms%20when%20his%20hands%20are%20empty.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button" style="background-color: rgb(71, 46, 50);">
            <i class="fa fa-tumblr"></i>
          </a>
          <button class="button" id="new-quote" style="background-color: rgb(71, 46, 50);">New quote</button>
        </div>
      </div>
      <div class="footer">by <a href="">Larry Alston</a> See original <a href="https://random-quote-machine.freecodecamp.rocks/">here</a></div>
    </div>
      
  );
}

export default App
