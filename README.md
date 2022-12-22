# GModal

A tiny easy to use modal with zero dependencies:

`new GModal.init(".js-modal", {`
  `closeDelay: 200,`
`});`

`.js-modal` is a selector for modal open button.

You can specify a target for modal buttons:

`data-target="#target"`

You also can specify modal open/close effects:

`data-open="tmHorizontalIn" data-close="tmHorizontalOut"`

To use custom effects create css animation and call it in data-open/close attributes

Close buttons should contain class called "js-modal-close".

In order to change modal position you can modify style props:
`".g-modal__overlay" "align-items/justify-content" properties.`
