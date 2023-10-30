export const render = (node: HTMLElement, elements: Array<HTMLElement>) => {
  const children: Array<ChildNode> = Array.from(node.children);

  if (!elements.every((element) => element instanceof HTMLElement)) {
    throw new Error('element must be an array of HTMLElement');
  }
  children.forEach((child) => {
    child.remove();
  });
  return node.append(...elements);
};
