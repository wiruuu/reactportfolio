export function sortByCategory(posts) {
  return [...posts].sort((a, b) => a.category.localeCompare(b.category));
}
