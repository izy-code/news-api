export function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error(`Value not defined`);
  }
}

export function findElement<T extends Element>(container: Element | Document | DocumentFragment, selector: string): T {
  const element = container.querySelector<T>(selector);

  assertIsDefined(element);

  return element;
}

export function assertIsQuerySelectable(node: Node): asserts node is Document | DocumentFragment | Element {
  if (
    node.nodeType !== Node.DOCUMENT_NODE &&
    node.nodeType !== Node.DOCUMENT_FRAGMENT_NODE &&
    node.nodeType !== Node.ELEMENT_NODE
  ) {
    throw new TypeError(`Wrong node type: ${node.nodeType}`);
  }
}
