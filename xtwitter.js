// document.getElementById('popupIcon12').addEventListener('click', function(event) {
//     openPopup1();
//     event.stopPropagation(); // Prevents the click event from propagating to document
//   });
  
//   // Function to open the second popup
//   function openPopup1() {
//     var popupContainer1 = document.getElementById('more');
//     popupContainer1.style.display = 'block';
//   }
  
//   // Function to close the second popup
//   function closePopup1() {
//     var popupContainer1 = document.getElementById('more');
//     popupContainer1.style.display = 'none';
//   }
  
//   // Event listener to close the second popup when clicking anywhere on the document
//   document.addEventListener('click', function(event) {
//     var popupContainer1 = document.getElementById('more');
//     if (event.target !== popupContainer1 && !popupContainer1.contains(event.target)) {
//       closePopup1();
//     }
//   });




//   document.getElementById('popupIcon22').addEventListener('click', function(event) {
//     openPopup22();
//     event.stopPropagation(); // Prevents the click event from propagating to document
//   });
  
//   document.getElementById('popupIcon22').addEventListener('click', function() {
//       // Get the div element by its ID
//       var morrDiv = document.getElementById('morr');
  
//       // Toggle the display of the div
//       if (morrDiv.style.display === 'none') {
//         morrDiv.style.display = 'block';
//       } else {
//         morrDiv.style.display = 'none';
//       }
//     }); 