export const paginate = (items = [], page = 1, perPage = 8) => {
  const total = items.length;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const pageItems = items.slice(start, end);
  return { pageItems, total, totalPages: Math.ceil(total / perPage) };
};

export const sortBy = (items = [], key = "launch_year", direction = "desc") => {
  const copy = [...items];
  copy.sort((a, b) => {
    const av = a[key] ?? "";
    const bv = b[key] ?? "";
    if (!isNaN(Number(av)) && !isNaN(Number(bv))) {
      return direction === "asc" ? Number(av) - Number(bv) : Number(bv) - Number(av);
    }
    return direction === "asc"
      ? String(av).localeCompare(String(bv))
      : String(bv).localeCompare(String(av));
  });
  return copy;
};
