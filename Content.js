const generateHTML = (pageName) => {
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
       <div class='_1'>GET BACK TO WORK</div>
       <div class='_2'>STUDYING > ${pageName}</div>
   </div>
    `;
};


switch (window.location.hostname) {
    case "www.youtube.com":
        document.body.innerHTML = "<button> Click Here</button>"
        break;
};