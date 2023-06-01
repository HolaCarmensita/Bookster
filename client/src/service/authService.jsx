/**
 * author Niklas Nguyen
 *
 * date 23-05-31
 *
 * authSerivce is used for sending http request to the server to authurize or creating an accont on the server as well a function that checks if the user has a key that will give a true or false value as well as to check what role user has
 */

import memoryService from "./memoryService";

const fetchOptions = async (url, method, data) => {
  const options = {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await fetch(url, options);
};

async function login(userDetails) {
  return await fetchOptions(
    `http://127.0.0.1:3030/auth/login`,
    "POST",
    userDetails
  );
}

async function register(userDetails) {
  return await fetchOptions(
    `http://127.0.0.1:3030/auth/register`,
    "POST",
    userDetails
  );
}

const isAuthenticated = (isTrue) => {
  if (memoryService.getLocalValue("JWT_TOKEN") !== null) {
    return true;
  } else if (isTrue === true) {
    return true;
  } else {
    return false;
  }
};

function getLocalJWTData() {
  const localJWTToken = memoryService.getLocalValue("JWT_TOKEN");

  try {
    return JSON.parse(atob(localJWTToken.split(".")[1]));
  } catch (e) {
    return null;
  }
}

function getRole(isAdmin) {
  if (isAdmin === true) return "ADMIN";
  if (getLocalJWTData() === null) return null;
  return getLocalJWTData().role;
}

function getUsername() {
  if (getLocalJWTData() === null) return null;
  return getLocalJWTData().username;
}

const authService = {
  login,
  register,
  isAuthenticated,
  getRole,
  getUsername,
};
export default authService;
