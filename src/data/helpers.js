export const filterByName = (list, search) => {
  if (search.length > 0) {
    return list.filter((c) =>
      c.location.toLowerCase().includes(search.toLowerCase())
    );
  }

  return list;
};
