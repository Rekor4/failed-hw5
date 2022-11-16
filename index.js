fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    console.log(data.products);
    const products = data.products;

    // const divFirstPos = document.getElementsByClassName('wrapper')[0];

    // const divFirst = document.createElement('div');
    // divFirst.classList.add('container');
    // const divFirstPos = document.getElementsByClassName('wrapper')[0];
    // divFirstPos.appendChild(divFirst);


    products.forEach((products) => {

      const divColumn = document.createElement('div');
      divColumn.classList.add('col-sm-12', 'col-md-3', 'column-item');
      const divColumnPos = document.getElementsByClassName('wrapper')[0]
      divColumnPos.appendChild(divColumn);
      
      const divCard = document.createElement('div');
      divCard.classList.add('card', 'card-item', 'h-100');
      divColumn.appendChild(divCard);

      const divImgContainer = document.createElement('div')
      divImgContainer.classList.add('img-container')
      divCard.appendChild(divImgContainer)

      const img = document.createElement('img');
      img.classList.add('card-img-top', 'img-size'); // create img in fullscr
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

      divCardBody.appendChild(containerForFooter);
      containerForFooter.appendChild(spanFirst);
      containerForFooter.appendChild(spanSecond);
    });
  });
