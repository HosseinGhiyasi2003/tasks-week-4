async function asyncFunc() {
try {
  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  let obj = await response.json();
  let user_ids = obj.map((user) => user.id);
  console.log(user_ids);
  let user_titles = obj.map((user) => user.name);
  console.log(user_titles);
} catch (error) {
  console.log('Error');
}
}

asyncFunc();


