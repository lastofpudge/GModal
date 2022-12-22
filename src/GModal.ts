class GModal {
  el: any;
  scrollBarWidth: number;
  options: {
    closeDelay: 200;
  };
  _supportsTouchEvents() {
    return "ontouchstart" in window;
  }
  _getScrollBarWidth() {
    const inner = document.createElement("p");
    inner.setAttribute("style", "width: 100%, height: 1px;");

    const outer = document.createElement("div");
    outer.setAttribute("style", "position: absolute;top:0;left:0;visibility:hidden;width:100px;height: 1px;overflow:hidden");
    outer.appendChild(inner);

    document.body.appendChild(outer);
    const w1 = inner.offsetWidth;
    outer.style.overflow = "scroll";
    let w2 = inner.offsetWidth;
    w1 == w2 ? (w2 = outer.clientWidth) : "";
    document.body.removeChild(outer);

    return w1 - w2;
  }

  constructor(el, options) {
    this.el = el;
    this.options = options;

    this.scrollBarWidth = 0;

    this.initialize();
  }

  initialize() {
    const pageHasScroll = window.innerWidth > document.documentElement.clientWidth;

    if (pageHasScroll) this.scrollBarWidth = this._getScrollBarWidth();

    const triggerEls = document.querySelectorAll(this.el);
    triggerEls.forEach((el) => {
      this.onOpen(el);
    });

    const overlays = document.querySelectorAll(".g-modal__overlay");
    overlays.forEach((el) => {
      this.onCloseOverlay(el);
    });

    const closeButtons = document.querySelectorAll(".js-modal-close");
    closeButtons.forEach((el) => {
      this.onCloseButton(el);
    });
  }

  onOpen(el) {
    const target = document.querySelector(el.dataset.target);

    el.addEventListener("click", () => {
      if (el.dataset.open !== undefined || el.dataset.close !== undefined) {
        const styleNode = document.createElement("style");
        styleNode.id = "inline-effects";
        styleNode.innerHTML = `:root { 
        --open-effect: ${el.dataset.open}; 
        --close-effect: ${el.dataset.close}; 
      }`;
        document.head.appendChild(styleNode);
      }

      document.body.classList.add("modal-open");

      this.scrollToggle(true);

      target.classList.add("open");
      target.setAttribute("aria-hidden", "false");
    });
  }

  onCloseOverlay(el) {
    el.addEventListener("click", (event) => {
      const isOverlay = (event.target as HTMLElement).classList.contains("g-modal__overlay");
      if (isOverlay) {
        const target = (event.target as HTMLElement).closest(".g-modal");
        this.onClose(target);
      }
    });
  }

  onCloseButton(el) {
    el.addEventListener("click", (event) => {
      const target = (event.target as HTMLElement).closest(".g-modal");
      this.onClose(target);
    });
  }

  onClose(target) {
    target.setAttribute("aria-hidden", "true");

    setTimeout(() => {
      target?.classList.remove("open");
      document.body.classList.remove("modal-open");
      this.scrollToggle(false);
      document.getElementById("inline-effects")?.remove();
    }, this.options.closeDelay);
  }

  scrollToggle(show) {
    if (!this._supportsTouchEvents()) {
      if (show) {
        document.documentElement.style.overflow = "hidden";
        document.documentElement.style.marginRight = this.scrollBarWidth + "px";

        return;
      }
      document.documentElement.style.overflow = "";
      document.documentElement.style.marginRight = "";
    }
  }
}

export default GModal;

declare global {
  interface Window {
    GModal: any;
  }
}
