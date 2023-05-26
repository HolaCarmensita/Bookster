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

const adminService = { getUsers };

export default adminService;
