/**
 * author Niklas Nguyen
 *
 * date 23-05-31
 *
 * a custom hook for reducer that takes in data and saves it in an array and depending on action.type removes it from the array
 * uses for confirmComponent and tableComponet
 */

export function useAdminReducer(item, action) {
  if (action.type === "user") {
    return [...item, action.user];
  } else if (action.type === "book") {
    return [...item, action.book];
  } else if (action.type === "clear-user") {
    return item.filter((items) => items.username !== action.user.username);
  } else if (action.type === "clear-book") {
    return item.filter((items) => items.title !== action.book.title);
  }
}
