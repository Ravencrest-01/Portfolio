// window.addEventListener('load', function() {
//   var center = document.querySelector('.center');
//   var container = document.querySelector('.container');
//   var hexCodes = ['#474747', '#C7CEDB', '#f7ce5b', '#E7DECC'];
//   var wordHex = ['#E7DECC', '#EC0B43', '#5DA271', '#474747'];
//   var fadeDuration = 1000; // 1.5 seconds
//   var minDuration = 8000; // Minimum duration in milliseconds

//   // Calculate the number of iterations required to meet the minimum duration
//   var iterations = Math.ceil(minDuration / (fadeDuration * hexCodes.length));

//   // Function to change the background color and fade away
//   function changeBackgroundColorAndFade() {
//     var index = 0;
//     var iterationCount = 0;
//     var colorInterval = setInterval(function() {
//       center.style.backgroundColor = hexCodes[index % hexCodes.length];
//       center.style.color = wordHex[index % wordHex.length];
//       index++;
//       if (index >= hexCodes.length) {
//         iterationCount++;
//         if (iterationCount >= iterations) {
//           clearInterval(colorInterval);
//           center.classList.add('hidden');
//           container.classList.remove('hidden');
//         }
//       }
//     }, fadeDuration);
//   }

//   // Start the background color change and fade after the page loads
//   setTimeout(changeBackgroundColorAndFade, 0); // Start immediately

//   // Hide the center element after 8 seconds
//   setTimeout(function() {
//     center.classList.add('hidden');
//     container.classList.remove('hidden');
//   }, 8000);
// });
