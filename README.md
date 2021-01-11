# This is Zenify https://zenify-server.herokuapp.com/

Zenify is a music player and visualizer using Spotify's API, TSParticles, and various supporting libraries.

You can login with your Spotify account, search for a track or album to play, and the particles will react to the music by changing speed, color, and movement direction.

My deployment branch has a lot of commits, It was my first time trying to bug test to a heroku server and my workflow was really bad. I thought I was nearly done when I first deployed it, but I had to make some changes for deployment and it lead to a typo that took me many hours to find. For the sake of time, my commit messages are not very discriptive. I understand that this is bad practice, and I usually have better commit messages, but coming up with commit messages for every minor change was taking to much time in an already bad workflow. 

In the future I will figure out a better workflow and make less small commits and test more changes locally before deployment. Mostly for the sake of my own sanity, as spending 3-4 mins to wait for heroku to build the project between each test was really tedious.


Feel free to download the code and alter it or reuse it.

Libraries used:
https://github.com/matteobruni/tsparticles

https://github.com/gilbarbara/react-spotify-web-playback

https://github.com/spotify/web-api-auth-examples



Don't know what music to try out off the top of your head?
Some recommendations: (Don't judge my taste in music to harshly)
#### OSTs:
Gareth coker - The entire ori and the will of the wisps soundtrack
Howard Shore - Lord of the rings - The Bridge of Khazad Dum

#### Intrumental metal/progressive:
RichardEB - Megalovania, or Ash - from the ablum ash and blood
Andromida - Dystopia Foretold, Supernova, or Celestial
Polyphia - Death Note, G.O.A.T, or The Worst

#### EDM/Chill
MUZZ - worth the lie
Seven Lions - only now feat tyler graves - mitix remix
ILLENIUM - Lonely (with Chandler Leighton)
WRLD, Laura Brehm - Ocean Blue

Insights on my journey developing this:

This is my first React project without the hand-holding of a tutorial to fall back on. There are still bugs to work out, and my code isn't as clean as I want it to be. I faced many challenges while making this project, and I learned a lot about react, redux, and other non-coding things like Perlin noise and a bit of musical theory.

Some of the biggest challenges were getting the particles to update without completely re-rendering the component, which the creator of TSParticles guided me through, and Learning how to use Spotify's Auth, Playback, and Analysis apis. 

The hardest thing was coming up with a way to keep track of the users current playback within the song to use in conjunction with the analysis, as I could not find any other information on how to create a visualizer using Spotify's song analysis. 

The solution I came up with was to use a Date() object to create timestamps for when the song was started, it's progress/duration information, and how much time had passed since the timestamp. Then using that information, I could loop through the array containing the analysis and compare it to the current position in the song to find the right segment/beat/section. There may be better ways to do this, but I'm pretty proud of this solution as something I solved on my own.

I want to revisit this in the future, when I know more, to make improvements, and to make my code more efficient. For instance, I don't use many components, and some components are redundant or should be pure JS code instead, but my lack of experience prevents me from efficiently refactoring things into a cleaner structure.

#### Wishlist of features I want to/Will add:
*~~Responsiveness~~
*Persistent Sessions and login support/cookies
*Refresh token support
*Logout button
*Playlist Support
*User Particle options
*Background Options
*Recommended songs/playlist
