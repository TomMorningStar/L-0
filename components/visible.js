(() => {
  const toggleVisible = document.querySelectorAll('#toggle-visible');
  const cartItemsSection = document.querySelectorAll('.cart-items-section');
  const price = document.querySelectorAll('.price');

  const itemTitle = document.querySelectorAll('.item-title');
  const emailInput = document.querySelector('input[type=email]');

  price.forEach((item) => {
    if (item.textContent.length >= 10) {
      item.style.fontSize = '16px';
    }
  })

  toggleVisible.forEach((item, index) => {
    item.addEventListener('click', () => {
      cartItemsSection[index].classList.toggle('open');
      item.classList.toggle('rotate');
    })
  })

  window.addEventListener('resize', (e) => {
    itemTitle.forEach((item) => {
      if (item.textContent.length >= 43 && window.innerWidth <= 375) {
        item.textContent = item.textContent.slice(0, 69) + '...';
      }
    })

    if (window.innerWidth <= 600) {
      emailInput.placeholder = 'Электронная почта';
    } else {
      emailInput.placeholder = 'Почта';
    }
  });
})()

