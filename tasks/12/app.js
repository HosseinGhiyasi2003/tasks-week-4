// let p = fetch('https://fakestoreapi.com/products');

// p.then((response)=> {
//   return response.text();
// })

// .then((text)=> {
//   console.log(JSON.parse(text));
// })

// .catch(()=> {
//   console.log('Error');
// })


const wrapper = document.querySelector('.wrapper')
const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul')

button.addEventListener('click', ()=> {
  let inputValue = input.value;
  let p = fetch(`https://fakestoreapi.com/products/${inputValue}`);
  
  p.then((response)=> {
    if(response.ok) {
      return response.text()
    }
  })
  
  .then((response)=> {
    let output = ``
    let info = JSON.parse(response);
    output = `
      <ul>
        <li>id: ${info.id}</li>
        <li>title: ${info.title}</li>
        <li>price: ${info.price}</li>
        <li>description: ${info.description}</li>
        <li>category: ${info.category}</li>
        <li><img  src="${info.image}"></li>
        <li>rating-rate: ${info.rating.rate}</li>
        <li>rating-count: ${info.rating.count}</li>
      </ul>
    `
    ul.innerHTML = output
})
.catch(()=> {
  console.log("Error");
})
})

