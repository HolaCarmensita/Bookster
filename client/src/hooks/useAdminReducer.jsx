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
