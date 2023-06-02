/**
 * author Niklas Nguyen
 *
 * date 23-05-31
 *
 * adminService is to build quick and simple https requests functions that only users with a jwt token that has property role with value ADMIN in can use
 */

import memoryService from "./memoryService";

const buildPostFetchOptions = (body) => ({
  method: "POST",
  body: JSON.stringify(body),
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + memoryService.getLocalValue("JWT_TOKEN"),
  },
});

const buildPutFetchOptions = (body) => ({
  method: "PUT",
  body: JSON.stringify(body),
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + memoryService.getLocalValue("JWT_TOKEN"),
  },
});

const buildDeleteFetchOptions = (body) => ({
  method: "DELETE",
  body: JSON.stringify(body),
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + memoryService.getLocalValue("JWT_TOKEN"),
  },
});

const buildGetFetchOptions = () => ({
  headers: {
    Authorization: "Bearer " + memoryService.getLocalValue("JWT_TOKEN"),
  },
});

const performRequest = async (url, method, body) => {
  let options = undefined;

  if (method === "GET") {
    options = buildGetFetchOptions();
  } else if (method === "POST") {
    options = buildPostFetchOptions(body);
  } else if (method === "PUT") {
    options = buildPutFetchOptions(body);
  } else if (method === "DELETE") {
    options = buildDeleteFetchOptions(body);
  }

  return await fetch(url, options);
};

async function getUsers() {
  let resp = await performRequest("http://127.0.0.1:3030/admin/users", "GET");

  return await resp.json();
}

async function putUserToAdmin(username) {
  let resp = await performRequest("http://127.0.0.1:3030/admin/users", "PUT", username);

  return await resp.json();
}

async function deleteUser(username) {
  let resp = await performRequest("http://127.0.0.1:3030/admin/users", "DELETE", username);

  return await resp.json();
}

async function deleteBook(book) {
  let resp = await performRequest("http://127.0.0.1:3030/admin/books", "DELETE", book);

  return await resp.json();
}

async function updateBook(books) {
  let resp = await performRequest("http://127.0.0.1:3030/admin/books", "PUT", books);

  return await resp.json();
}

async function addBook(book) {
  let resp = await performRequest("http://127.0.0.1:3030/admin/books", "POST", book);

  return await resp.json();
}

const adminService = { getUsers, putUserToAdmin, deleteUser, deleteBook, updateBook, addBook };

export default adminService;
