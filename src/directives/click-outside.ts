import type { Directive } from "vue";

type ClickOutsideHandler = ($event: MouseEvent | TouchEvent) => void;
type ClickOutsideHandlerMap = Map<HTMLElement, ClickOutsideHandler> & {
  initialized?: boolean;
};

const clickOutsideHandlersSymbol: symbol = Symbol.for("v-click-outside-handlers");

if (typeof window === "object") {
  (window as any)[clickOutsideHandlersSymbol] =
    (window as any)[clickOutsideHandlersSymbol] ?? new Map<HTMLElement, ClickOutsideHandler>();

  const globalClickOutsideHandlersMap: ClickOutsideHandlerMap = (window as any)[clickOutsideHandlersSymbol] as ClickOutsideHandlerMap;

  if (!globalClickOutsideHandlersMap.initialized) {
    window.document.addEventListener(
      "click",
      ($event) => {
        globalClickOutsideHandlersMap.forEach((handler) => {
          handler($event);
        });
      },
      { capture: true, passive: true },
    );

    window.document.addEventListener(
      "touchstart",
      ($event) => {
        globalClickOutsideHandlersMap.forEach((handler) => {
          handler($event);
        });
      },
      { capture: true, passive: true },
    );

    globalClickOutsideHandlersMap.initialized = true;
  }
}

const registerClickOutsideHandler = ($el: HTMLElement, { value: handler }: { value: Function }) => {
  if (typeof handler !== 'function') {
    console.error('v-click-outside directive expects a function as the value');
    return;
  }

  const globalClickOutsideHandlersMap: ClickOutsideHandlerMap =
    (window as any)[clickOutsideHandlersSymbol];

  globalClickOutsideHandlersMap.set($el, ($event: MouseEvent | TouchEvent) => {
    if ($event.target !== $el && !$el.contains($event.target as Node)) {
      handler();
    }
  });
};

const cleanupClickOutsideHandler = ($el: HTMLElement) => {
  const globalClickOutsideHandlersMap: ClickOutsideHandlerMap =
    (window as any)[clickOutsideHandlersSymbol];

  globalClickOutsideHandlersMap.delete($el);
};

const clickOutsideDirective: Directive = {
  mounted: registerClickOutsideHandler,
  updated: registerClickOutsideHandler,
  beforeUnmount: cleanupClickOutsideHandler,
};

export default clickOutsideDirective;
