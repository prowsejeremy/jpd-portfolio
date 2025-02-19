export const isElementTypeInteractive = (
  element: HTMLElement,
  list: string[]
): boolean => {
  if (list.indexOf(element.localName) === -1) {
    return checkParentTree(element, list);
  } else {
    return true;
  }
};

const checkParentTree = (element: HTMLElement, list: string[]): boolean => {
  const parentElement = element.parentElement as HTMLElement;
  if (parentElement) {
    return isElementTypeInteractive(parentElement, list);
  } else {
    return false;
  }
};
