const minusButton = document.querySelector('.quantity-button.minus');
const plusButton = document.querySelector('.quantity-button.plus');
const quantityInput = document.querySelector('.quantity-input');

minusButton.addEventListener('click', decreaseQuantity);
plusButton.addEventListener('click', increaseQuantity);


function decreaseQuantity() {
  let currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
    quantityInput.value = currentQuantity - 1;
  }
}

function increaseQuantity() {
  let currentQuantity = parseInt(quantityInput.value);
  let maxQuantity = parseInt(quantityInput.getAttribute('max'));
  if (currentQuantity < maxQuantity) {
    quantityInput.value = currentQuantity + 1;
  }
}

function loadProduct() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        document.getElementById("productDetails").innerHTML = xhr.responseText;
      } else {
        alert('Failed to load product details.');
      }
    }
  };
  xhr.open('GET', 'product.html', true);
  xhr.send();
}

  // Function to show the popup form
  function showPopup() {
    const popup = document.getElementById("subscribePopup");
    popup.style.display = "block";
  }

  // Function to hide the popup form
  function hidePopup() {
    const popup = document.getElementById("subscribePopup");
    popup.style.display = "none";
  }

  // Attach event listener to the Subscribe button
  const subscribeBtn = document.getElementById("subscribeBtn");
  subscribeBtn.addEventListener("click", showPopup);

  // Close the popup when clicking outside the form
  window.addEventListener("click", function(event) {
    const popup = document.getElementById("subscribePopup");
    if (event.target === popup) {
      hidePopup();
    }
  });