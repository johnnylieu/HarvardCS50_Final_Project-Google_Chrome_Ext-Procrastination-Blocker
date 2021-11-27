//quotes for random quote generator
var quotes = [
    'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do. ― Pelé, Brazillian pro footballer',
    'There are no secrets to success. It is the result of preparation, hard work, and learning from failure. ― General Colin Powell, former US Secretary of State',
    'And why do we fall, Bruce? So we can learn to pick ourselves up. ― Thomas Wayne, Batman’s Dad, in ‘Batman Begins’',
    'However difficult life may seem, there is always something you can do and succeed at. ― Stephen Hawking',
    'Success is the sum of small efforts, repeated day in and day out. ―  Robert Collier, self-help author',
    'Success isn’t overnight. It’s when every day you get a little better than the day before. It all adds up. ― Dwayne Johnson, actor and former pro-wrestler',
    'Success doesn’t come to you, you go to it. ―  Marva Collins, American educator',
    'Recipe for success: Study while others are sleeping; work while others are loafing; prepare while others are playing; and dream while others are wishing. ― William A. Ward, motivational writer',
    'We may encounter many defeats but we must not be defeated. ― Maya Angelou',
    'Be a warrior, not a worrier. ― Johnny Lieu'
];

//new quotes function
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    //inserting new quote
    var newRandomQuote = quotes[randomNumber];
    return newRandomQuote;
};
//newQuote() is working
console.log(newQuote());
newQuote();

//this will display in place of blocked website aka the "blocker display"
const generateHTML = (pageName, newRandomQuote) => {
    return `
   
    <div id="clouds">
       <div class="cloud x1"></div>
       <div class="cloud x1_5"></div>
       <div class="cloud x2"></div>
       <div class="cloud x3"></div>
       <div class="cloud x4"></div>
       <div class="cloud x5"></div>
   </div>
   <div class='c'>
       <div class='_404'>404</div>
       <hr>
       <div class='_1'>GET BACK TO STUDYING</div>
       <div class='_2'>STUDYING > ${pageName}</div>
       <br>
       <div class='_2'>You'll thank yourself later - building yourself a better future is more important!</div>
       <br>
       <div class='_2' id="quoteDisplay">${newRandomQuote}</div>
   </div>
    `;
};

//styling for the "blocker display"
const generateStyling = () => {
    return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
    body {
      background: #87CEEB;
      color: #fff;
      font-family: "Open Sans", sans-serif;
      max-height: 700px;
      overflow: hidden;
    }
    .c {
      text-align: center;
      display: block;
      position: relative;
      width: 80%;
      margin: 100px auto;
    }
    ._404 {
      font-size: 220px;
      position: relative;
      display: inline-block;
      z-index: 2;
      height: 250px;
      letter-spacing: 15px;
    }
    ._1 {
      text-align: center;
      display: block;
      position: relative;
      letter-spacing: 12px;
      font-size: 4em;
      line-height: 80%;
    }
    ._2 {
      text-align: center;
      display: block;
      position: relative;
      font-size: 20px;
    }
    .text {
      font-size: 70px;
      text-align: center;
      position: relative;
      display: inline-block;
      margin: 19px 0px 0px 0px;
      /* top: 256.301px; */
      z-index: 3;
      width: 100%;
      line-height: 1.2em;
      display: inline-block;
    }
    
   
    .right {
      float: right;
      width: 60%;
    }
    
    hr {
      padding: 0;
      border: none;
      border-top: 5px solid #fff;
      color: #fff;
      text-align: center;
      margin: 0px auto;
      width: 420px;
      height: 10px;
      z-index: -10;
    }
    
    hr:after {
      display: inline-block;
      position: relative;
      top: -0.75em;
      font-size: 2em;
      padding: 0 0.2em;
      background: #33cc99;
    }
    
    .cloud {
      width: 350px;
      height: 120px;
    
      background: #fff;
      background: linear-gradient(top, #fff 100%);
      background: -webkit-linear-gradient(top, #fff 100%);
      background: -moz-linear-gradient(top, #fff 100%);
      background: -ms-linear-gradient(top, #fff 100%);
      background: -o-linear-gradient(top, #fff 100%);
    
      border-radius: 100px;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
    
      position: absolute;
      margin: 120px auto 20px;
      z-index: -1;
      transition: ease 1s;
    }
    
    .cloud:after,
    .cloud:before {
      content: "";
      position: absolute;
      background: #fff;
      z-index: -1;
    }
    
    .cloud:after {
      width: 100px;
      height: 100px;
      top: -50px;
      left: 50px;
    
      border-radius: 100px;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
    }
    
    .cloud:before {
      width: 180px;
      height: 180px;
      top: -90px;
      right: 50px;
    
      border-radius: 200px;
      -webkit-border-radius: 200px;
      -moz-border-radius: 200px;
    }
    
    .x1 {
      top: -50px;
      left: 100px;
      -webkit-transform: scale(0.3);
      -moz-transform: scale(0.3);
      transform: scale(0.3);
      opacity: 0.9;
      -webkit-animation: moveclouds 15s linear infinite;
      -moz-animation: moveclouds 15s linear infinite;
      -o-animation: moveclouds 15s linear infinite;
    }
    
    .x1_5 {
      top: -80px;
      left: 250px;
      -webkit-transform: scale(0.3);
      -moz-transform: scale(0.3);
      transform: scale(0.3);
      -webkit-animation: moveclouds 17s linear infinite;
      -moz-animation: moveclouds 17s linear infinite;
      -o-animation: moveclouds 17s linear infinite;
    }
    
    .x2 {
      left: 250px;
      top: 30px;
      -webkit-transform: scale(0.6);
      -moz-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 0.6;
      -webkit-animation: moveclouds 25s linear infinite;
      -moz-animation: moveclouds 25s linear infinite;
      -o-animation: moveclouds 25s linear infinite;
    }
    
    .x3 {
      left: 250px;
      bottom: -70px;
    
      -webkit-transform: scale(0.6);
      -moz-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 0.8;
    
      -webkit-animation: moveclouds 25s linear infinite;
      -moz-animation: moveclouds 25s linear infinite;
      -o-animation: moveclouds 25s linear infinite;
    }
    
    .x4 {
      left: 470px;
      botttom: 20px;
    
      -webkit-transform: scale(0.75);
      -moz-transform: scale(0.75);
      transform: scale(0.75);
      opacity: 0.75;
    
      -webkit-animation: moveclouds 18s linear infinite;
      -moz-animation: moveclouds 18s linear infinite;
      -o-animation: moveclouds 18s linear infinite;
    }
    
    .x5 {
      left: 200px;
      top: 300px;
    
      -webkit-transform: scale(0.5);
      -moz-transform: scale(0.5);
      transform: scale(0.5);
      opacity: 0.8;
    
      -webkit-animation: moveclouds 20s linear infinite;
      -moz-animation: moveclouds 20s linear infinite;
      -o-animation: moveclouds 20s linear infinite;
    }
    
    @-webkit-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
    @-moz-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
    @-o-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
     </style>`
}

// switch case for blocking websites - if statements would be too long
switch (window.location.hostname) {
    //youtube
    case "www.youtube.com":
        document.head.innerHTML = generateStyling();
        document.body.innerHTML = generateHTML("YOUTUBE", newQuote());
        break;
    
    //netflix
    case "www.netflix.com":
        document.head.innerHTML = generateStyling();
        document.body.innerHTML = generateHTML("NETFLIX");
        break;

    //hulu
    case "www.hulu.com":
        document.head.innerHTML = generateStyling();
        document.body.innerHTML = generateHTML("HULU");
        break;

    //facebook
    case "www.facebook.com":
        document.head.innerHTML = generateStyling();
        document.body.innerHTML = generateHTML("FACEBOOK");
        break;

    //instagram
    case "www.instagram.com":
        document.head.innerHTML = generateStyling();
        document.body.innerHTML = generateHTML("INSTAGRAM");
        break;

    //twitter
    case "www.twitter.com":
        document.head.innerHTML = generateStyling();
        document.body.innerHTML = generateHTML("TWITTER");
        break;
    
    //tubi tv
    case "www.tubitv.com":
        document.head.innerHTML = generateStyling();
        document.body.innerHTML = generateHTML("TUBI TV");
        break;

    //disney plus
    case "www.disneyplus.com":
        document.head.innerHTML = generateStyling();
        document.body.innerHTML = generateHTML("DISNEY+");
        break;

    //hbo max
    case "www.hbomax.com":
        document.head.innerHTML = generateStyling();
        document.body.innerHTML = generateHTML("HBO MAX");
        break;

    //discord
    case "discord.com":
        document.head.innerHTML = generateStyling();
        document.body.innerHTML = generateHTML("DISCORD");
        break;
};