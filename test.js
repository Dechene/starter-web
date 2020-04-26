import axios from "../complete-javascript-course/9-forkify/starter/node_modules/axios/lib/axios";

console.log("I like pizza");

async function hello() {
  return "Hello";
}
hello();


async function getResults(query) {
    const result = await axios(
      `https://forkify-api.herokuapp.com/api/search?q=${query}`
    );
    console.log(result);
  }
   
  getResults("pizza");