/**
 * author Niklas Nguyen
 *
 * date 23-05-31
 *
 * userSerivce has a function to make a http request to buy a book and send it to the server when ever a user calls its function
 */

import memoryService from "./memoryService";

const fetchOptions = async (url, method, data) => {
  const options = {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + memoryService.getLocalValue("JWT_TOKEN"),
    },
  };
  return await fetch(url, options);
};

async function buyBook(book) {
  return await fetchOptions(`http://127.0.0.1:3030/library/user/books`, "POST", book);
}

const userService = { buyBook };
export default userService;
