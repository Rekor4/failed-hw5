fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    console.log(data.products);
    const { products } = data;

    const header = document.createElement('nav');
    header.classList.add('navbar');

    const headerPos = document.getElementsByClassName('wrapper')[0];

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('container-fluid');

    const headerBrand = document.createElement('a');
    headerBrand.classList.add('navbar-brand', 'mb-0', 'h1');
    headerBrand.textContent = 'Our Shop';

    const headerForm = document.createElement('form');
    headerForm.classList.add('d-flex');
    headerForm.role = 'search';

    const YourCartButton = document.createElement('button');
    YourCartButton.classList.add('btn', 'btn-success', 'me-2', 'cartButtonSize');
    YourCartButton.type = 'submit';
    YourCartButton.textContent = 'Your card';

    const searchInput = document.createElement('input');
    searchInput.classList.add('form-control', 'me-2');
    searchInput.type = 'search';
    searchInput.placeholder = 'Search';

    const searchButton = document.createElement('button');
    searchButton.classList.add('btn', 'btn-outline-success');
    searchButton.type = 'button';
    searchButton.textContent = 'Search';

    headerPos.appendChild(header);
    header.appendChild(headerContainer);
    headerContainer.appendChild(headerBrand);
    headerContainer.appendChild(headerForm);
    headerForm.appendChild(YourCartButton);
    headerForm.appendChild(searchInput);
    headerForm.appendChild(searchButton);

    const listenerForCartButton = document.querySelector('form');
    const popup = document.getElementById('popup');
    const findPopupCloseButton = document.getElementById('closeButton');

    listenerForCartButton.addEventListener('submit', (event) => {
      event.preventDefault();
      popup.classList.add('popup_open');
    });
    findPopupCloseButton.onclick = function () {
      popup.classList.remove('popup_open');
    };

    const list = []; // инициализирую тут

    products.forEach((products) => {
      const divColumn = document.createElement('div');
      divColumn.classList.add('col-sm-12', 'col-md-3', 'column-item');
      const divColumnPos = document.getElementsByClassName('wrapper')[0];
      divColumnPos.appendChild(divColumn);

      list.push(divColumn); // пушу здесь

      const divCard = document.createElement('div');
      divCard.classList.add('card', 'card-item', 'h-100');
      divColumn.appendChild(divCard);

      const divImgContainer = document.createElement('div');
      divImgContainer.classList.add('img-container');
      divCard.appendChild(divImgContainer);

      const img = document.createElement('img');
      img.classList.add('card-img-top', 'img-size');
      img.src = `${products.thumbnail}`;
      img.alt = 'product';
      divImgContainer.appendChild(img);

      const divCardBody = document.createElement('div');
      divCardBody.classList.add('card-body', 'flex-column', 'd-flex'); // d-flex crush
      divCard.appendChild(divCardBody);

      const h5 = document.createElement('h5');
      h5.classList.add('card-title');
      h5.textContent = `${products.title}`;
      divCardBody.appendChild(h5);

      const p = document.createElement('p');
      p.classList.add('card-text', 'flex-grow-1');
      p.textContent = `${products.description}`;
      divCardBody.appendChild(p);

      const spanFirst = document.createElement('span');
      spanFirst.textContent = (`Price: ${products.price}$`);

      const spanSecond = document.createElement('span');
      spanSecond.textContent = (`Rating: ${products.rating}`);

      const containerForFooter = document.createElement('div');
      containerForFooter.classList.add('space-around', 'card-footer', 'd-flex');

      const cartButton = document.createElement('button');
      cartButton.id = 'addCart';
      cartButton.type = 'submit';
      cartButton.classList.add('btn', 'btn-primary');
      cartButton.textContent = 'Add to cart';

      divCardBody.appendChild(containerForFooter);
      containerForFooter.appendChild(spanFirst);
      containerForFooter.appendChild(spanSecond);
      divCardBody.appendChild(cartButton);
    });

    // const kk = document.getElementById('addCart')
    // kk.onclick = function () {
    //   console.log(kk)
    // }

    const findInput = document.querySelector('input');
    const findButton = document.querySelector('button[type="button"]');
    findButton.onclick = function () {
      const value = findInput.value.trim();

      if (value !== '') {
        list.forEach((elem) => {
          if (elem.firstElementChild.firstElementChild.nextSibling.firstElementChild.innerText.search(value) === -1) {
            // console.log(sanya.firstElementChild.firstElementChild.nextSibling.firstElementChild)
            elem.remove();
            // elem.classList.add('hide')

            // console.log(list)
          }
        });
      } else {
        list.forEach((elem) => {
          // elem.
        });
      }
    };
  });
