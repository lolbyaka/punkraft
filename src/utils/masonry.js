export const resizeMasonryItem = item => {
  const grid = document.getElementsByClassName("menu-list")[0];

  const rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
  );

  const rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
  );

  const rowSpan = Math.ceil(
    (item.querySelector(".content").getBoundingClientRect().height + rowGap) /
      (rowHeight + rowGap)
  );

  item.style.gridRowEnd = "span " + rowSpan;
};

export const resizeAllMasonryItems = () => {
  const allItems = document.getElementsByClassName("menu-item");
  [...allItems].forEach(item => {
    resizeMasonryItem(item);
  });
};
