fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    console.log(data.products);
    const products = data.products;

    const divFirst = document.createElement('div');
    divFirst.classList.add('container');
    const divFirstPos = document.getElementsByClassName('wrapper')[0];
    divFirstPos.appendChild(divFirst);

    const divRow = document.createElement('div');
    divRow.classList.add('row', 'row-cols-4');
    // divRow.classList.add('card-group')
    divFirst.appendChild(divRow);

    products.forEach((products) => {
      const divCard = document.createElement('div');
      divCard.classList.add('card', 'flex-fill', 'col-md-4');
      divRow.appendChild(divCard);

      const img = document.createElement('img');
      img.classList.add('card-img-top', 'img-size'); // create img in fullscr
      img.src = `${products.thumbnail}`;
      img.alt = 'product';
      divCard.appendChild(img);

      const divCardBody = document.createElement('div');
      divCardBody.classList.add('card-body');
      divCard.appendChild(divCardBody);

      const h5 = document.createElement('h5');
      h5.classList.add('card-title');
      h5.textContent = `${products.title}`;
      divCardBody.appendChild(h5);

      const p = document.createElement('p');
      p.classList.add('card-text');
      p.textContent = `${products.description}`;
      divCardBody.appendChild(p);

      const spanFirst = document.createElement('span');
      spanFirst.textContent = (`Price: ${products.price}$`);

      const spanSecond = document.createElement('span');
      spanSecond.textContent = (`Rating: ${products.discountPercentage}`);

      const containerForFooter = document.createElement('div');
      containerForFooter.classList.add('space-around', 'card-footer');

      divCardBody.appendChild(containerForFooter);
      containerForFooter.appendChild(spanFirst);
      containerForFooter.appendChild(spanSecond);
    });
  });
