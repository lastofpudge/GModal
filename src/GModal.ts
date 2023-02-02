/**
 * GModal core js file
 */
const GModal = (() => {
  'use strict'

  class Modal {
    el: any
    scrollBarWidth: number
    options: {
      closeDelay: 200
    }

    constructor(el, options) {
      this.el = el
      this.options = options
      this.scrollBarWidth = 0
      this.initialize()
    }

    _supportsTouchEvents() {
      return 'ontouchstart' in window
    }

    _getScrollBarWidth() {
      const scrollDiv = document.createElement('div')
      scrollDiv.setAttribute('style', 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;')
      document.body.appendChild(scrollDiv)

      const scrollWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
      document.body.removeChild(scrollDiv)

      return scrollWidth
    }

    initialize() {
      const pageHasScroll = window.innerWidth > document.documentElement.clientWidth

      if (pageHasScroll) this.scrollBarWidth = this._getScrollBarWidth()

      const styleNode = document.createElement('style')
      styleNode.id = 'inline-effects'

      const triggerEls = document.querySelectorAll(this.el)
      triggerEls.forEach((el) => {
        this.onOpen(el, styleNode)
      })

      const overlays = document.querySelectorAll('.g-modal__overlay')
      overlays.forEach((el) => {
        this.onCloseOverlay(el)
      })

      const closeButtons = document.querySelectorAll('.js-modal-close')
      closeButtons.forEach((el) => {
        this.onCloseButton(el)
      })

      document.onkeydown = (event) => this.onKeydown(event)
    }

    onOpen(el, styleNode) {
      const target = document.querySelector(el.dataset.target)

      el.addEventListener('click', () => {
        styleNode.innerHTML = `:root {
          --open-effect: ${el.dataset.open};
          --close-effect: ${el.dataset.close};
        }`

        document.head.appendChild(styleNode)
        document.body.classList.add('modal-open')

        this.onOpenModal(target)
      })
    }

    onOpenModal(target) {
      this.scrollToggle(true)

      target.classList.add('open')
      target.setAttribute('aria-hidden', 'false')
    }

    onCloseOverlay(el) {
      el.addEventListener('click', (event) => {
        const targetElement = event.target as HTMLElement

        const isOverlay = targetElement.classList.contains('g-modal__overlay')
        if (isOverlay) {
          const target = targetElement.closest('.g-modal')
          this.onClose(target)
        }
      })
    }

    onCloseButton(el) {
      el.addEventListener('click', (event) => {
        const target = (event.target as HTMLElement).closest('.g-modal')
        this.onClose(target)
      })
    }

    onClose(target) {
      target.setAttribute('aria-hidden', 'true')

      setTimeout(() => {
        target.classList.remove('open')
        document.body.classList.remove('modal-open')
        this.scrollToggle(false)

        document.getElementById('inline-effects')?.remove()
      }, this.options.closeDelay)
    }

    onKeydown(event) {
      if (event.keyCode === 27) {
        const target = document.querySelector('.g-modal.open')
        target ? this.onClose(target) : null
      }
    }

    scrollToggle(show) {
      if (!this._supportsTouchEvents()) {
        const body = document.documentElement
        body.style.overflow = show ? 'hidden' : ''
        body.style.marginRight = show ? `${this.scrollBarWidth}px` : ''
      }
    }
  }

  let activeModal: any

  const init = (el, options) => {
    activeModal = new Modal(el, options)
  }

  const open = (el) => {
    let curEl = document.querySelector(el)

    if (!curEl) throw new Error(`${el} element not found`)

    activeModal.onOpenModal(curEl)
  }

  return { init, open }
})()

export default GModal

declare global {
  interface Window {
    GModal: any
  }
}
