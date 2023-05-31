/**
 * author Niklas Nguyen
 *
 * date 23-05-31
 *
 * memoryService has functions that stores JWT token in localstorage and to get the JWT token to send with an http request or to check for the username or role
 */

function saveLocalValue(ref, value) {
  value = JSON.stringify(value);

  localStorage.setItem(ref, value);
}

function getLocalValue(ref) {
  let value = localStorage.getItem(ref);

  return JSON.parse(value);
}

const memoryService = { saveLocalValue, getLocalValue };
export default memoryService;
