document.addEventListener('DOMContentLoaded', function() {
  // Array of gallery items as JavaScript objects
  var galleryItems = [
    {
      src: 'images/flowers-pink-large.jpg',
      alt: 'Pinky Punch',
      caption: 'P i n k y P u n c h'
    },
    {
      src: 'images/flowers-purple-large.jpg',
      alt: 'Purple Flowers',
      caption: 'P u r p l e B e a u t y'
    },
    {
      src: 'images/flowers-red-large.jpg',
      alt: 'Red Flowers',
      caption: 'R e d D e l i g h t'
    },
    {
      src: 'images/flowers-white-large.jpg',
      alt: 'White Flowers',
      caption: 'W h i t e E l e g a n c e'
    },
    {
      src: 'images/flowers-yellow-large.jpg',
      alt: 'Yellow Flowers',
      caption: 'Y e l l o w S u n s h i n e'
    }
    // Add more gallery items as needed
  ];

  var featuredImage = document.querySelector('#gallery figure img');
  var thumbnailList = document.querySelector('#thumbnail-list');

  // Build the thumbnail list dynamically from the gallery items
  galleryItems.forEach(function(item) {
    var li = document.createElement('li');
    var img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.width = 240;
    img.height = 160;
    li.appendChild(img);
    thumbnailList.appendChild(li);
  });

  var thumbnailImages = document.querySelectorAll('#thumbnail-list img');
  var figcaption = document.querySelector('#gallery figure figcaption');

  // Add click event listeners to each thumbnail image
  thumbnailImages.forEach(function(image, index) {
    image.addEventListener('click', function() {
      // Get the gallery item object for the clicked thumbnail image
      var selectedItem = galleryItems[index];

      // Update the source and caption of the featured image and figcaption
      featuredImage.src = selectedItem.src;
      figcaption.textContent = selectedItem.caption;
    });
  });
});




