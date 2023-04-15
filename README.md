# server-side-img-opt-demo

A demo to optimize images with `sharp` at server side.

## The `<Image>` Component

`<Image>` is a wrapper of the `picture` element.

The `<picture>` HTML element contains alternative versions of an image for different display/device scenarios. The browser will consider each child `<source>` element and choose the best match among them.

``` tsx
(
  <Image src="/foo.png" alt="foo" />
)
// equivalents to
(
  <picture>
    <source srcSet="/api/foo.webp" type="image/foo.webp" />
    <source srcSet="/api/foo.avif" type="image/foo.avif" />
    <img src="/foo.png" alt="foo" />
  </picture>
)
```
