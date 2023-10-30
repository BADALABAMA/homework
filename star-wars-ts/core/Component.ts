interface ICompponent {
  tagName: string;
  className: string;
  children: ChildNode[];
  events: Event;
  textContent: string;
  html: HTMLElement;
  attrs: [];
}

export class Component implements ICompponent {
  private tagName;
  private className;
  private children;
  private events;
  private textContent;
  private html;
  private attrs;
  constructor(tagName, className, children, events, textContent, html, attrs) {
    this.tagName = tagName;
  }
}
