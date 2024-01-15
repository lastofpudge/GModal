<img src="https://styleci.io/repos/581013114/shield">

GModal
=======

A tiny easy to use 6kb size [modal](https://gmodal-docs.vercel.app/) with zero dependencies:

## Start

Download the latest version from [GitHub](https://github.com/lastofpudge/GModal/releases/latest
) or via package managers:
```
npm i @lastofpudge/g-modal
yarn add @lastofpudge/g-modal
```

Initialize modal:

```javascript
new GModal.init(".js-modal", {
  closeDelay: 200,
});
```

`.js-modal` is a selector for the modal open button.

You can specify a target for the modal buttons:

`data-target="#target"`

You also can specify modal open/close effects:

`data-open="tmHorizontalIn" data-close="tmHorizontalOut"`

To use custom effects, create css animation and call it in data-open/close attributes

Close buttons should contain a class called "js-modal-close".

To change the modal position, you can modify style props:
`".g-modal__overlay" "align-items/justify-content" properties.`

![image info](https://github.com/lastofpudge/GModal/blob/main/browsers.png)
