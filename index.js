
function handleLiveLinkClicked() {
  $('.js-live-link-button').click(function () {
    window.open('https://tcatt71.github.io/quiz-app-final/', '_blank');
  });
}

function handleRepoLinkClicked() {
  $('.js-repo-link-button').click(function () {
    window.open('https://github.com/tcatt71/quiz-app-final', '_blank');
  });
}

function handlePortfolio() {
  handleLiveLinkClicked();
  handleRepoLinkClicked();
}

$(handlePortfolio);