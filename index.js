'use strict';

function handleLiveLinkClicked() {
  // alert('handleLiveLinkClicked called');
  $('.js-live-link-button').click(function () {
    // alert('working');
    // window.location.href = "https://tcatt71.github.io/quiz-app-final/";
    window.open('https://tcatt71.github.io/quiz-app-final/', '_blank');
  });
}

function handleRepoLinkClicked() {
  $('.js-repo-link-button').click(function() {
    window.open('https://github.com/tcatt71/quiz-app-final', '_blank');
  });
}

function handlePortfolio() {
  // console.log('here');
  // alert('handlePortfolio called');
  handleLiveLinkClicked();
  handleRepoLinkClicked();
}

$(handlePortfolio);

// $(document).ready(function(){
//   $('.js-live-link-button').click(function(){
//     alert('working');
//   });
// });