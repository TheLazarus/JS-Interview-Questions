const files = {
  size: 0,
  items: [
    {
      size: 20,
      items: [],
    },
    {
      size: 30,
      items: [],
    },
    {
      size: 0,
      items: [
        {
          size: 10,
        },
        {
          size: 20,
        },
      ],
    },
  ],
};

function getSum(node) {

  if (!node.items?.length) return node.size;

  for (let n of node.items) {
    node.size += getSum(n);
  }

  return node.size;
}

console.log(files);
getSum(files);

console.log(files);
