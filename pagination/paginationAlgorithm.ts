function paginated(pages: number, active: number) {
  if (pages < 1 || pages < active || active < 1) {
    throw new Error("NO");
  }

  // Initialize a set for uniqueness
  const renderedPagesSet = new Set<number>();

  // Add the first value
  renderedPagesSet.add(1);

  // Add the 3 middle ones
  for (let i = active - 1; i <= active + 1; i++) {
    if (i >= 1 && i <= pages) {
      renderedPagesSet.add(i);
    }
  }

  // Add the last
  renderedPagesSet.add(pages);

  return Array.from(renderedPagesSet);
}

// Add zeros at empty places. Ex: 1 0 3 4 5 0 10
function createPaginationWithZeros(pages: number[]) {
  const result: number[] = [];
  for (let i = 0; i < pages.length; i++) {
    result.push(pages[i]);
    if (pages[i + 1] && pages[i] + 1 !== pages[i + 1]) {
      result.push(0);
    }
  }
  return result;
}

const pages = paginated(7, 1);

// console.log(createPaginationWithZeros(pages));
createPaginationWithZeros(pages).forEach((p) => console.log(p));
