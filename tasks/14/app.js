  const products=fetch ("https://jsonplaceholder.typicode.com/comments" ,{
      method :"Get",
  })
  products.then((Response)=>{
    return Response.json()
  })
  .then((data)=> {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });