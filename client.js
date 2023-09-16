const fetch = require("node-fetch");

async function main() {
  const response = await fetch("http://localhost:3000/initialize");
  const data = await response.json();
  console.log(data);
}
main();
