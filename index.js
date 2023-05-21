window.addEventListener('load', function() {
  var center = document.querySelector('.center');
  var container = document.querySelector('.container');
  var button = document.querySelector('.button');
  var hexCodes = ['#474747', '#C7CEDB', '#f7ce5b', '#E7DECC'];
  var wordHex = ['#E7DECC', '#EC0B43', '#5DA271', '#474747'];
  var fadeDuration = 500; // 0.5 seconds

  // Function to change the background color and fade away
  function changeBackgroundColorAndFade() {
    var index = 0;
    var colorInterval = setInterval(function() {
      center.style.backgroundColor = hexCodes[index % hexCodes.length];
      center.style.color = wordHex[index % wordHex.length];
      index++;
      if (index >= hexCodes.length) {
        clearInterval(colorInterval);
        center.classList.add('hidden');
        container.classList.remove('hidden');
        button.classList.remove('hidden');
      }
    }, fadeDuration);
  }

  // Start the background color change and fade after the page loads
  setTimeout(changeBackgroundColorAndFade, 0); // Start immediately

  // Add event listener to the button for hiding the container
  button.addEventListener('click', function() {
    container.classList.add('hidden');
  });

  // Button
  function setButtonDimensions() {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    var buttonSize = Math.min(viewportWidth, viewportHeight) * 0.5;

    button.style.width = buttonSize + 'px';
    button.style.height = buttonSize + 'px';
  }

  // Set initial button dimensions
  setButtonDimensions();

  // Update button dimensions on window resize
  window.addEventListener('resize', setButtonDimensions);
});
