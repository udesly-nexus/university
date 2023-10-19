---
title: Products
sidebar:
  order: 4
slug: shopify/shop/products
---

Most product elements area already mapped by the Webflow eCommerce plugin through metafields (Our Shopify App automatically adds metafields) and through native Shopify Product fields.

However there are some features that cannot me mapped using Webflow CMS and can be added only using attributes:

## Unit Price

If you sell products in quantities or measurements, then you might need to display the price per unit for certain products.

To add it, on any text element you can add the custom attribute:

<custom-attribute name="product" value="unit-price"></custom-attribute>

<copy-element name="Unit Price">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjdhNTMgNTY2Yi01IDQ1ZS02YyAyYS05NDkgMy1iYzNiJDM14YC/YjBmMeeCgHRhZ+eCqmQkaXbngphjbGFEc3Pqgoc1ROWAuSBoaWxkcmUibuiCoTIyMjggZTA2ZGQ0IC04ZDYyLSBmZjY4LTYgN2UwLWM2IGIzZmVkMVA5YzM54oSQ5oGkIeuEoEJsb2NrLeeEkGTlhJ3mhI10ZSR4dOSFi3RydSfhhZXvg5Tpg5R4YXQkdHLthLluYW0h6IaLcHJvZHUmY+OBsOOFvXZhbCPigbTlhql1bml0QC1wcmlj44a8XDdE4oST4YCm4YCp4YaqX++Ghu+ElO+ElOSElOSGhu+Dpivhgp3ogrdl4YOWMEsuR+OHteSCmOOInHN0PHls74aj4Ymf4oa6dCHvhrsyMml4MS/vh5DhgLXhiaroiZ1pbiB0ZXJhY3QoaW9u74e9MjJQZXZlbu+BuuKCklHjgZFMaXPtgpfnhL8wMjJtZeyHmXUgbmxpbmtlIGRTeW1ib0BsQ291buWHqCIw5YiJcm9wcFhlZEzhgYXli63mgLkgeW5CaW5kIFJlbW92ZV5k74GZ4oGA4oKp74GE6oG9IHBhZ2luYS/ihIXvgafhgqDjh7U=</copy-element>

## Vendor

It's the vendor of the product and can be added on any text element with the custom attribute:

<custom-attribute name="product" value="vendor"></custom-attribute>

<copy-element name="Vendor">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjdhNTMgNTY2Yi01IDQ1ZS02YyAyYS05NDkgMy1iYzNiJDM14YC/YjBmMeeCgHRhZ+eCqmQkaXbngphjbGFEc3Pqgoc1ROWAuSBoaWxkcmUibuiCoTIyMjggZTA2ZGQ0IC04ZDYyLSBmZjY4LTYgN2UwLWM2IGIzZmVkMVA5YzM54oSQ5oGkIeuEoEJsb2NrLeeEkGTlhJ3mhI10ZSR4dOSFi3RydSfhhZXvg5Tpg5R4YXQkdHLthLluYW0h6IaLcHJvZHUmY+OBsOOFvXZhbCPigbTlhql2ZW5kUm/jgaA3ROKEj+GApl/hgKnhhqbvhoLvhJDvhJDkhJBP5IaC74Oi4YKZ54ieVu2ClUHjiJVzdHls74acK+GJmOKGs3TvhrQyMlhpeDHvh4nhgLXhiaMh6ImWaW50ZXIgYWN0aW9uUe+HtjIyZeGEne+BukPigpLjgZFMaXPtgpdB54S8MjJtZeyHkiB1bmxpbmsgZWRTeW1iIG9sQ291biXlh6Ew5YiCcm9wUHBlZEzhgYXli6Yh5oC5eW5CaW4gZFJlbW92XGVk74GZ4oGA4oKp74GEIeqBvXBhZ2luPmHihIXvgafhgqDjh7I=</copy-element>

## Type

It's the type of the product (Shoes, Bags), and can be added on any text element with the custom attribute:

<custom-attribute name="product" value="type"></custom-attribute>

<copy-element name="Type">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjdhNTMgNTY2Yi01IDQ1ZS02YyAyYS05NDkgMy1iYzNiJDM14YC/YjBmMeeCgHRhZ+eCqmQkaXbngphjbGFEc3Pqgoc1ROWAuSBoaWxkcmUibuiCoTIyMjggZTA2ZGQ0IC04ZDYyLSBmZjY4LTYgN2UwLWM2IGIzZmVkMVA5YzM54oSQ5oGkIeuEoEJsb2NrLeeEkGTlhJ3mhI10ZSR4dOSFi3RydSfhhZXvg5Tpg5R4YXQkdHLthLluYW0h6IaLcHJvZHUmY+OBsOOFvXZhbEfigbTlhqnmhrY3ROKEjV/hgKbhgKnhhqTvhoDvhI7vhI4/5ISO5IaA74Og4YKX54icVCPrgpPjiJFzdHlsN++GmOGJlOKGr3TvhrAyUDJpeDHvh4XhgLUj4Ymf6ImSaW50ZSByYWN0aW8ibu+HsjIyZXY8ZW7vgbrigpLjgZFMLGlz7YKX54S6MjIkbWXsh451bmwgaW5rZWRTIHltYm9sQ0hvdW7lh50w5Ye+IHJvcHBlZC5M4YGF5Yui5oC5eW4gQmluZFJlQG1vdmVk74GZL+KBgOKCqe+BhOqBvXBhUGdpbmHihIXvgacj4YKg44ew</copy-element>

## Variable Price

If the product has a variable price, this element it's simply a string of type: 12$ - 14$, it will be showed only when the price is variable and can be added using the custom attribute:

<custom-attribute name="product" value="variable-price"></custom-attribute>

<copy-element name="Variable Price">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMmQzNTcgMGQ2Yi0xIGU4ZS05NiA3NS02ZDEgMS0wNTEzIDI1OWI5MCQ1OOeCgHRhZynogZlpdueCmGNsKGFzc+qChzVEIeWAuWhpbGRyXGVu6IKh74KS74KS4YKSLjnihJDmgaTrhKBCbEhvY2vnhJBk5YSdQeaEjXRleHTkhYtYdHJ14YWV74OU6YOUQHhhdHRy7YS5KG5hbeiGi3ByUG9kdWPjgbDjhb04dmFs4oG05YapdiBhcmlhYmwgZS1wcmljWeOHgDdE4oSX4YCm4YCpX+GGru+Giu+Giu+GiuSEmOSGijfvg6rhgqHniKYx4YiQNDAlMjAt4YCkMS/hgKnhgKzmgqDjiKhzdDx5bO+Gr+GJq+KHhnQh74eHMjJpeDEv74ec4YC14Ym26ImpaW4gdGVyYWN0KGlvbu+IiTIyUGV2ZW7vgbrigpJR44GRTGlz7YKX54WHMDIybWXsh6V1IG5saW5rZSBkU3ltYm9AbENvdW7lh7QiMOWIlXJvcHBYZWRM4YGF5Yu55oC5IHluQmluZCBSZW1vdmVeZO+BmeKBgOKCqe+BhOqBvSBwYWdpbmEv4oSF74Gn4YKg44e9</copy-element>

## Price Max

If the product has a variable price, this element it's simply the max price of the product it will be showed only when the price is variable and can be added using the custom attribute:

<custom-attribute name="product" value="price-max"></custom-attribute>

<copy-element name="Price Max">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjNlNjggNDZlMy1hIGE2ZS0zMCAxNy1iZjYgNy02MGU4IDdhYmZlOSQ1NeeCgHRhZzHngqpkaXbngphjMGxhc3Pqgoc1IkTlgLloaWxkWHJlbuiCoe+Cku+Ckj3hgpI24oSQ5oGk64SgQjBsb2Nr54SQZCPlhJ3mhI10ZXh0UeSFi3RydeGFle+DlCHpg5R4YXR0cjHthLluYW3ohotwQHJvZHVj44GwUeOFvXZhbOKBtOeAviBpY2UtbWFSeOKGuzdE4oSS4YCmX+GAqeGGqe+Ghe+Ghe+GheSEky/khoXvg6XhgpzniKExNDwlMuGAo+aClOOIl3NYdHls74ae4Yma4oa1InTvhrYyMml4PjHvh4vhgLXhiaXoiZhpIG50ZXJhYzB0aW9u74e4MkAyZXZlbu+BukPigpLjgZFMaXPtgpdB54S7MjJtZeyHlCB1bmxpbmsgZWRTeW1iIG9sQ291biXlh6Mw5YiEcm9wUHBlZEzhgYXli6gh5oC5eW5CaW4gZFJlbW92XGVk74GZ4oGA4oKp74GEIeqBvXBhZ2luPmHihIXvgafhgqDjh7E=</copy-element>

## Price Min

If the product has a variable price, this element it's simply the minimuum price of the product it will be showed only when the price is variable and can be added using the custom attribute:

<custom-attribute name="product" value="price-min"></custom-attribute>

<copy-element name="Sample Element">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjNlNjggNDZlMy1hIGE2ZS0zMCAxNy1iZjYgNy02MGU4IDdhYmZlOSQ1NeeCgHRhZzHngqpkaXbngphjMGxhc3Pqgoc1IkTlgLloaWxkWHJlbuiCoe+Cku+Ckj3hgpI24oSQ5oGk64SgQjBsb2Nr54SQZCPlhJ3mhI10ZXh0UeSFi3RydeGFle+DlCHpg5R4YXR0cjHthLluYW3ohotwQHJvZHVj44GwUeOFvXZhbOKBtOeAviBpY2UtbWlZ44O7N0TihJLhgKbhgKlf4Yap74aF74aF74aF5IST5IaFJ++DpeGCnOeIoTE0JS4y4YCj5oKU44iXc3Q8eWzvhp7hiZrihrV0Ie+GtjIyaXgxL++Hi+GAteGJpeiJmGluIHRlcmFjdChpb27vh7gyMlBldmVu74G64oKSUeOBkUxpc+2Cl+eEuzAyMm1l7IeUdSBubGlua2UgZFN5bWJvQGxDb3Vu5YejIjDliIRyb3BwWGVkTOGBheWLqOaAuSB5bkJpbmQgUmVtb3ZlXmTvgZnigYDigqnvgYTqgb0gcGFnaW5hL+KEhe+Bp+GCoOOHsQ==</copy-element>

## Barcode

It's the barcode of the current product can be added on div using the attribute:

<custom-attribute name="product" value="barcode"></custom-attribute>

<copy-element name="Barcode">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjNlNjggNDZlMy1hIGE2ZS0zMCAxNy1iZjYgNy02MGU4IDdhYmZlOSQ1NeeCgHRhZzHngqpkaXbngphjMGxhc3Pqgoc1IkTlgLloaWxkWHJlbuiCoe+Cku+Ckj3hgpI24oSQ5oGk64SgQjBsb2Nr54SQZCPlhJ3mhI10ZXh0UeSFi3RydeGFle+DlCHpg5R4YXR0cjHthLluYW3ohotwQHJvZHVj44GwUeOFvXZhbOKBtOWGqVBiYXJj4YW74oa5XDdE4oSQ4YCm4YCp4YanX++Gg++Gg++Gg+SEkeSGg++Doy/hgprvgpbngpbjiJdzdDx5bO+GnuGJmuKGtXQh74a2MjJpeDEv74eL4YC14Yml6ImYaW4gdGVyYWN0KGlvbu+HuDIyUGV2ZW7vgbrigpJR44GRTGlz7YKX54S9MDIybWXsh5R1IG5saW5rZSBkU3ltYm9AbENvdW7lh6MiMOWIhHJvcHBYZWRM4YGF5Yuo5oC5IHluQmluZCBSZW1vdmVeZO+BmeKBgOKCqe+BhOqBvSBwYWdpbmEv4oSF74Gn4YKg44ez</copy-element>

## Sku

It's the sku of the current product can be added on div using the attribute:

<custom-attribute name="product" value="sku"></custom-attribute>

<copy-element name="Sku">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjFmMzggYTlmMi0yIDQ4Mi1mYiA1ZC01YWUgOS00YjBmIDBlYzViNSRlZueCgHRhZzHngqpkaXbngphjMGxhc3Pqgoc1IkTlgLloaWxkWHJlbuiCoe+Cku+CklBiNWYw4oSQ5oGkIeuEoEJsb2NrLeeEkGTlhJ3mhI10ZSR4dOSFi3RydSfhhZXvg5Tpg5R4YXQkdHLthLluYW0h6IaLcHJvZHUmY+OBsOOFvXZhbEPigbTlhqlza3XihrVcN0TihIzhgKbhgKnhhqNf74W/74W/74W/5ISN5IW/74OfL+GClu+CkuOCkuOIj3N0PHls74aW4YmS4oatdCHvhq4yMml4MS/vh4PhgLXhiZ3oiZBpbiB0ZXJhY3QoaW9u74ewMjJQZXZlbu+BuuKCklHjgZFMaXPtgpfnhLkwMjJtZeyHjHUgbmxpbmtlIGRTeW1ib0BsQ291buWHmyPhiJ3jh7xyb3BwWGVkTOGBheWLoOaAuSB5bkJpbmQgUmVtb3ZlXmTvgZnigYDigqnvgYTqgb0gcGFnaW5hL+KEhe+Bp+GCoOOHrw==</copy-element>


## Tags

Products in Shopify can have multiple tags attached, but they are just string, in Webflow it's not possible to attach a field of the same way. To show tags just add the attribute:

<custom-attribute name="product" value="tags"></custom-attribute>

on a text or on a link, and it will be repeated once for each tag attached to the product, you can limit the number of tags to show just by adding the attribute:

<custom-attribute dynamic name="limit" value="number of tags to show"></custom-attribute>

For example

<custom-attribute name="limit" value="1"></custom-attribute>

to show only one tag

<copy-element name="Tags">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjk4N2IgOTU2Zi1kIGE1NC04OSBmNi00M2EgMi1iYmI3IDk4ZGZlZCQ0NueCgHRhZyPngqrogpZjbGFzMnPqgoU1ROWAuWggaWxkcmVuT+iCn++CkO+CkOGCkDfihI4j5oGk64SeTGluay3nhI1k5YSa5oSKYnUodHRv5YKMdHJWdeGFlOKEs2zlgZPmhLAmbeGEsOeFrmV4dEBlcm5hbOeFoSx1cuOArOSGizIzJeKGlzflg614YXQkdHLthaluYW0h6Ia7cHJvZHUkY3Tnhq12YWxf4oKl5YeZ4YWb44an5IGv74GeOeGDiG1p74Gc5YiVMV/lgqjhhbjhgq7pgaLvh6nvh6lP74W55Yep4YSa7oWKduqDjCPogpLjiblzdHlsN++IguKIpeGImXTviJoyWDJpeOODlO6AteGLhynoirppbuGGnWFjUHRpb27viZzhhrtYdmVu74G64oqX44GRWExpc+2Cl+eEueGIgzJl7Ii5dW7iiKVlIGRTeW1ib0BsQ291buWEnCIw5Ympcm9wcDxlZOKJveWNiuaAuXkgbkJpbmRSIGVtb3ZlZD/vgZnigYDigqnvgYTqgb1wQGFnaW5h4oSFJ++Bp+GCoOOHrw==</copy-element>

## External Video

To products you can assign as media an External Video, you can add in Webflow a placeholder element where the external video will be outputted, using the custom attribute:

<custom-attribute name="product" value="external-video"></custom-attribute>

<copy-element name="External Video">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMmYyMDQgY2ZiZi0yIDE0Yi1lNyBhMC03MTcgYi1hZDVhIGYwZDg4NSYx4YG95YKAdGFnMeeCqmRpdueCmGMwbGFzc+qChzUiROWAuWhpbGQ4cmVu74C67IO2QjBsb2Nr54OmZC/lg7Pmg6PvgpblhI54YSh0dHLtg7tuYSJt6IWNcHJvZCh1Y3TnhL92YSRsdeiFq2V4dCBlcm5hbC1AdmlkZW/ihoJcN0Tig5nhgKbkgKnjhbNQc3R5bO+DuuGGtiXihJF074SSMjJpXHgx74Sn4YC144Wk5oa0JGlu4YKaYWN0OGlvbu+FlOGCuHY8ZW7vgbrigpLjgZFMPGlz7YKX5IOQ44igbSJl7IWadW5saSBua2VkU3kgbWJvbENvJHVu44StM0EwIeWGinJvcHBlPGRM4YGF5YmE5oC5eSBuQmluZFIgZW1vdmVkP++BmeKBgOKCqe+BhOqBvXBAYWdpbmHihIUn74Gn4YKg44aG</copy-element>

> This element requires custom CSS


## Video

To products you can assign as media a Video, you can add in Webflow a placeholder element where the video will be outputted, using the custom attribute:

<custom-attribute name="product" value="video"></custom-attribute>

<copy-element name="Video">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMmYyMDQgY2ZiZi0yIDE0Yi1lNyBhMC03MTcgYi1hZDVhIGYwZDg4NSYx4YG95YKAdGFnMeeCqmRpdueCmGMwbGFzc+qChzUiROWAuWhpbGQ4cmVu74C67IO2QjBsb2Nr54OmZC/lg7Pmg6PvgpblhI54YSh0dHLtg7tuYSJt6IWNcHJvZCh1Y3TnhL92YSRsdeiFq3ZpZERlb+KFuTdE4oOQJ+GApuSAqeOFqnN0eU5s74Ox4Yat4oSIdO+EiUAyMml4Me+EnifhgLXjhZvmhqtpbnQgZXJhY3RpJG9u74WLMjJlWHZlbu+BuuKCkuOBkVhMaXPtgpfkg5DjiJckbWXshZF1bmwgaW5rZWRTIHltYm9sQyhvdW7jhKQzQSIw5YaBcm9wcFhlZEzhgYXliLvmgLkgeW5CaW5kIFJlbW92ZV5k74GZ4oGA4oKp74GE6oG9IHBhZ2luYS/ihIXvgafhgqDjhoY=</copy-element>

> This element requires custom CSS


## Videos

To products you can assign as media multiple Videos, you can add in Webflow a placeholder element that will be duplicated once for each video and where inside the video will be outputted, using the custom attribute:

<custom-attribute name="product" value="videos"></custom-attribute>

<copy-element name="Videos">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMmZlNzMgYTQ0YS05IGQ3MS0zZCA2OC1mMGMgMy1lZTAxIGZiYjFhMywyMeeCgOuCq0JsKG9ja+iAu2FnMeeDhWRpdueCs2MwbGFzc+qCojUiROWAuWhpbGQocmVu74C6MmQj5YOz5oOjeGF0dEJy7YOjbmFt6IS1IHByb2R1YyJ054SndmFsdSHohZN2aWRlbynjhKM3ROeCnnRlInjjgZAzQWZhXGxz4YaA74Ok5IOk4YGTQemBlnN0eWzvg6wr4YeD4oSDdO+EhDIyXGl444Wc7oC14YeO6IeBIGludGVyYUBjdGlvbu+FhiAyMmV2ZW4n74G64oKS44GRTGlzR+2Cl+SDkOOIrW1l7IWnIHVubGluayBlZFN5bWIgb2xDb3VuJeWEojDlhpdyb3BQcGVkTOGBheWJkSHmgLl5bkJpbiBkUmVtb3ZcZWTvgZnigYDigqnvgYQh6oG9cGFnaW4+YeKEhe+Bp+GCoOOGhg==</copy-element>

> This element requires custom CSS

## Model

To products you can assign as media a 3D model, you can add in Webflow a placeholder element where the model will be outputted, using the custom attribute:

<custom-attribute name="product" value="model"></custom-attribute>

<copy-element name="Model">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMmYyMDQgY2ZiZi0yIDE0Yi1lNyBhMC03MTcgYi1hZDVhIGYwZDg4NSYx4YG95YKAdGFnMeeCqmRpdueCmGMwbGFzc+qChzUiROWAuWhpbGQ4cmVu74C67IO2QjBsb2Nr54OmZC/lg7Pmg6PvgpblhI54YSh0dHLtg7tuYSJt6IWNcHJvZCh1Y3TnhL92YTRsdeiFq23hhLpsWeKFuTdE4oOQ4YCm5ICpQeOFqnN0eWzvg7Er4Yat4oSIdO+EiTIyWGl4Me+EnuGAteOFmyHmhqtpbnRlciBhY3Rpb24h74WLMjJldmUubu+BuuKCkuOBkUxpLnPtgpfkg5DjiJdtZSHshZF1bmxpbiBrZWRTeW0gYm9sQ291Qm7jhKQzQTDlhoEgcm9wcGVkLkzhgYXliLvmgLl5biBCaW5kUmVAbW92ZWTvgZkv4oGA4oKp74GE6oG9cGFQZ2luYeKEhe+BpyPhgqDjhoY=</copy-element>

> This element requires custom CSS

## Recommended

The product recommendations are based on products that are commonly purchased together or products in related collections. Product recommendations become more accurate over time as more order and product information becomes available.

The algorithm that identifies recommended products is based on data about products that were purchased together and products with similar descriptions. It uses this data to provide a mix of those related products as recommendations for a given product.

In cases where purchase or product description data aren't available for a given product, products from a related collection are shown. The algorithm uses the collection in the URL from which the request to the API endpoint originated, and pulls other products from that collection. If the product doesn't have a collection URL, then the recommendation algorithm finds collections that include the product and pulls other products from those instead (excluding collections with handles “all” and “frontpage”).

### Requirements and limitations
The types of product recommendations that appear are determined by your online store and your Shopify plan:

<ul>
<li>Purchase history and product descriptions: Plus plan and having <7000 products published in your Online Store, with an English storefront</li>
<li>Purchase history only: Plus plan and having <7000 products published in your Online Store, with a non-English storefront </li>

<li>Purchase history only: Non-Plus plan and having <7000 products published in your Online Store </li>

<li>Collections: Any plan with >7000 products published in your Online Store </li>

</ul>
You can't customize the recommendation algorithm to exclude specific products (but you can write custom JavaScript code where the recommendations are being displayed to exclude specific products).

The recommendation algorithm doesn't use orders that have been imported from another store or ecommerce platform to generate product recommendations.

Products that are out of stock, set to a price of 0, or gift cards aren't included in recommendations.

Insert a Collection List Wrapper and add the attribute:

<custom-attribute name="shopify" value="recommended"></custom-attribute>

By default this collection is limited to 4 elements, you can change it by adding also the attribute

<custom-attribute dynamic name="limit" value="number"></custom-attribute>

Remember that Shopify can load max 10 recommended products, so do not setup any number higher than that or it will break!

If Shopify doesn't give you any recommendations, you can select them manually by using this custom script

```js
<script>
window._recommendedProducts = ["handle-of-the-product", "handle-of-theproduct2"];
</script>
```

Basically just create an array with the handle of the products, remember they will be used only and exclusively if Shopify doesn't give you any recommendations.

Since the products are loaded through javascript, Webflow interactions will be restarted automatically, if you need to run any code after Webflow interactions are restarted use the following script:

```js
<script>
window.Udesly = window.Udesly || [];

window.Udesly.push(() => {

    Udesly.on("webflow-restarted", () => {
        // Write your code here
    });

})
</script>
```


## Specific Image

Sometimes it's usefull to show a specific image of your product, you can do this by using the attribute:

<custom-attribute name="product" value="image"></custom-attribute>

on an Image element or a div as a background image.

By default it will select the first image attached to the product, but you can change the index by adding the optional attribute:

<custom-attribute dynamic name="index" value="number"></custom-attribute>

For example:

<custom-attribute name="index" value="2"></custom-attribute>

<copy-element name="Specific Image">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjg4OGYgYTM5NC01IGJjNy0zNiA0Ni1iOTkgYy0wNDIyIGViYzg1ZiQ0YueCgHRhZznngqppbeOArOOCmGNQbGFzc+qCh+GBuCBhYjQxYzMgOS0xOTJiIC03NWNjLSA1MmRlLTUgN2RkMzJhQDgyMTg54oO2JDVE5YGjaGlsUGRyZW7og4vmgLpB64SgSW1hZ+OEri3jhJBk5YSd5oSNYXQkdHLqhJ1zcmMh54WaaHR0cHMl44WlRuGFm2QzZSA1NHYxMDMgajhxYmIuIGNsb3VkZiByb250Lm4kZXThhbtwbHUoZ2lu4YWZRkJIYXNp4YGmRuKEgiJ04oCxcGxhYyBlaG9sZGUgci42MGY5IGIxODQwYzguc3bohLDihqVpIm7ohYxsYXp5IeeHhXdpZHRoQeeHsWF1dG/nh6BAaGVpZ2jhgp9d7YC8N+WFhOWGk+aHu+mHpj/vg4/vg4/jg4/lg4TmgbB4Q+mFkOaIvG5hbeiKjiBwcm9kdWMj44Kx44qAdmFsdV3oiqxp5oas4YOA4Yen4YOGI+SAqeOKq3N0eWxf74qZ64qZ74mB74mB44mB44u5KGZha+WMpGZhXGxz4Yyv74i544qj54ypR+uDpuyJlOKEgXNw4YejU+iNtOeLp29t44yM7IC2OeODqkxl5IG+446lZDRpc+GIpXnjjrIwIGJsb2NrJToz4Y+KMOSHuuOAtjFQMDBweOSAtuWHtSPtgLfnhbJyaWFuP+KJuOaPk+aIje+MseiFu2VAbGVjdG/ljIpQbnVsbOqGmeaLiFHujadpeDHvjbzhgLUj44Se54mybnRlckBhY3Rpb+KMm1HujqlldmXog4rpj4FR5IGRTGlz7YKX5IixKeOSuW1l7I+JdW4gbGlua2VkIFN5bWJvbDBDb3Vu5YyWMCHlj7lyb3BwZTxkTOGBheWTneaAuXkgbkJpbmRSIGVtb3ZlZD/vgZnigYDigqnvgYTqgb1wWmHhj7th4oSF74Gn4YKgIeOLpw==</copy-element>

## More Images

If you don't want to use the variant metafields for variant images you can still use the product images of Shopify.

> You will lose the ability to make the more images change on variant change

You can use the attribute:

<custom-attribute name="product" value="images"></custom-attribute>

On:

### Image Element

The element where you put the attribute on will be repeated once for each image set in Shopify. So keep it in mind when you style it in Webflow

<copy-element name="Images on Img Tag">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjE2NDAgMzg2MS1lIGQyMy0yZSBmYS03MTEgOS1hYzgyIDRjZTEwOSRkOeeCgHRhZznngqppbeOArOOCmGMwbGFzc+qChzIgMjhhYjQxIGMzOS0xOSAyYi03NWMgYy01MmRlIC01N2RkMyAyYTgyMTgp44G4NUTlgaNoaUBsZHJlbuiDiyPmgLrrhKBJbWFnO+OEruOEkGTlhJ3mhI1hKHR0cuqEnXNyImPnhZpodHRwKnPjhaVG4YWbZDMgZTU0djEwIDNqOHFiYiAuY2xvdWQgZnJvbnQuKG5ldOGFu3BsMHVnaW7hhZlGMEJhc2nhgaZGJeKEgnTigLFwbGEgY2Vob2xkIGVyLjYwZiA5YjE4NDBQYy5zduiEsOKGpSRpbuiFjGxheiJ554eFd2lkdCJo54exYXV0byHnh6BoZWlnaFvhgp/tgLw35YWE5YaT5oe7X+mHpu+Dj++Dj+ODj+WDhOaBsCZ46YWQ5oi8bmFtIeiKjnByb2R1JmPjgrHjioB2YWxadeiKrGnihqzjibzhg4Ev4Yeo4YOH5ICp44qsc3RceWzviprqiprviYLviYJD5ImC44u6ZmFr5YylUGZhbHPhjLDviLo/44qk54yq64On7ImV4oSCcy5w4Yek6I2154uob21GYu+AtuSDqkxl5IG+MeOOpmRpc+GIpnkh446zMGJsb2NIayUz4Y+LMOSHuyHjgLYxMDBweC/kgLblh7btgLfnhbNyaVxhbuKJueaPlOaIju+MsiHohbtlbGVjdCJv5YyLbnVsbCfqhpnmi4nujahpeDEv74294YC144Se54mzbnQgZXJhY3RpJm/ijJzujqpldmUn6IOK6Y+C5IGRTGlzR+2Cl+SIseOSum1l7I+KIHVubGluayBlZFN5bWIgb2xDb3VuJeWMlzDlj7pyb3BQcGVkTOGBheWTniHmgLl5bkJpbiBkUmVtb3ZcZWTvgZnigYDigqnvgYRJ6oG9cGHhj7xh4oSFJ++Bp+GCoOOLpw==</copy-element>

### Div Element

The element where you put the attribute on will be repeated once for each image set in Shopify, the image will keep the background style you set. So keep it in mind when you style it in Webflow.

<copy-element name="Images on Div Tag">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMmQ3N2IgNThlMy1lIDA1NC0wNyBmZC02NzIgMy0wNjMwIDBlMzI0MyQ3MOeCgHRhZynogZlpdueCmGNsKGFzc+qChzIyIDRmZTQ0ZCAxNC0zNDIgMC02YTZhIC0xY2Y4LSA4MDdkMTUgNmFhNzY5KeKDtjVE5YGjaGlAbGRyZW7og4sj5oC664SgQmxvY1pr54SQZOWEneaEje+DgCHlhLh4YXR0cjHthKVuYW3ohbdwIHJvZHVjdEHnhal2YWx16IaVMGltYWfkhaU3PkTig5HhgKbkgKnjhpVzWHR5bO+Gg+qGg++EqyfvhKvkhKvjh6NmYWtB5YiOZmFsc+GImU/vhKPjho3niJPrg6dE4oa0JjDshYTihIhzcGEmY+mJpOeHl29tYlPvgLbkg7BMZeSChOOKlUB3aWR0aOOKoCAwMjAwcHgkJTPhirgwaGUwaWdodOSAtzEh6IC3YmFja2cgcm91bmQtJ+OFmOSBmOGLmGltZyBfZXhhbXBAbGVfYmfvgY0gcG9zaXRpNG9u5IKINeGKlTVD54Co7oG5c2l65YG4QGNvdmVy5IKwIG9iamVjdFgtZmnlgrTogLvnh7VAcmlhbnTmjK4v4Y294Yev74qd7Iqdc2UqbOGBtW/liZ1udVxsbOqIm+KMlueBsOmLk1hpeDHvi6jhgLXjhpoh5o65aW50ZXIsYWPihJPvgaIyMlhldmXog4rpjK3kgZFYTGlz7YKX5Iqz45ClJG1l7Iy1dW5sIGlua2VkUyB5bWJvbENT4Ya644yIM0Hhj7jjjaUgcm9wcGVkLkzhgYXlkYnmgLl5biBCaW5kUmVabeGGhWTvgZnigYDigqkj74GE6oG9cGFnaVxuYeKHuO+Bp+GCoOONqQ==</copy-element>


### Slider Element

Will be create a slide for each image set in Shopify, the image will keep the background style you set on the slide div. So keep it in mind when you style it in Webflow.

<copy-element name="Images on Slider">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMmQyZDMgNjlkOC0yIDdhYS00OCAyNS1iMTkgNS04NjczIDBkMzcyNiRjZueCgHRhZynogZlpdueCmGNsKGFzc+qChzVEIeWAuWhpbGRyPGVu6IKh74KS74KSMlg2ZDDng7Lvgr/vgr88ZDPvgY3vg6zogbo1V++Buu+EmeiCpzfihpfmg6sh64anU2xpZGUgcldyYXBwPGVy6ION5Yas5oaccyPjgYbrhq5hdlNwUGFjaW7lhajhg5wh4oeYYXV0b3AobGF55IiHZmFMbHPhiJLjhJ9l54C2ODQwMOGEt+KIhmkgY29uQXJyJG935Ye4dHJ1IeWBj2FuaW1hWHRpb+aGkOWCo+eJgFhlYXPngpvkgK/ogLxB4YK7Um91buWJnSHogbRkaXNhYkBsZVN3aeaKp0nqg4B1cumCkDXng4IgbmZpbml0J+WLl+mDgOGEiE1heDfki67lg67ri7936IWyN1HliaNhdHTrhaPihoVeLe+Eie2EieOBheyCveGNqk/jg4DqgYLsg4jhjowx6oKaJnjpgpvmjZtuYW0h6I6tcHJvZHUkY3Tnjp92YWxX4oaq5Y+L4YarZ+SOm+GDq1/hjLHhg7Hkg7TvjqTvjqTvjqRf6Yyy746k746k746k746k75CWWe+QljZk44Sr74yd6IydUE1hc2vvjJrvjJpf55Ko65Om44y55oS774S475K8P++SvO2Dhu+SvO+SvOqUozIgMjQ1M2M5IGE3Mi0wMyAzNi0yMDhAZi05NmThiZEgZGM0NWNmQDlhMzI46pCbX++Tpu+QtemQteOQu++Qs+eEp1/vlaLkl5rvkYvvhZHkj6fvhZBf75es75es75WN75es75es75esT++XrO+XrO+ZnuaXrDTvlaVf7JWl45Oq75Wj75Wj74mp45yvKmHsgZ1p5paNMjJYbGVm446574qB75ydX++cne+Dn++cne+cne+cne+cnVvviZfnn7NJ4Zev75mj5p+fQHdpZGdl45KCP++NqeOShOqBnOaAreiYmXJeLe+Ep++SoO+gpO+gpOydmF/voKTvoKTvoKTvoKTvopbvopZYNmQ2756d74mY74mYL++em++Soe+JmO6JmHJpXGdo74mZ76WW76WW76WWX+SDoO+llu+llu+llu+llu+SkF/viZnvopzviZnvqajviZnuiZlf74So75ua76me76me6KWl76meP++pnu+pnu+pnu+WmOymrU5eYeiqsO+mqe+mqeutteGmtiPrmqzmq55zdHlsX++tneqtne+Zqe+ZqeSZqeOuvVhmYWvvpaHsr73jradP6aax6aKL7Jm24qKmc+GpqEPpsLjnrqtvbWLvgLY55IOqTGXkgb7jsaliQGFja2dy4qiRNi3jo4njsb8w4bG/aSBtZ19leGEgbXBsZV9iSGclM+GyozDpgY1QcG9zaeOqguOBkD414a+K4a2z5YCo7oGMcyRpeuWBuGNvdifhrYjigaznpYtyaWFcbnTmsrrhtInmqJDvsZMh6IavZWxlY3Qib+WtsW51bGwv6oeN4rKi54Gw6bKjaXgv46e17oC144WS5rWFaW5AdGVyYWPirZpT77Ol4a2WdmXog4rps71R5IGRTGlz7YKX56iJMDIybWXssLJ1IG5saW5rZSBkU3ltYm88bEPhrpDll7zlr7tkRHJv4bGyZEzhgYUj5beV5oC5eW5CaUBuZFJlbeGFql5k74GZ4oGA4oKp74GE6q6KQHBhZ2lu47C/J++Bp+GureOqvw==</copy-element>

### Single Lightbox Link

In this configuration, the lightbox link will not be repeated, but the lightbox once opened will contain all the product images.

<copy-element name="Images on Single Lightbox">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjExYzAgNjU4ZS05IDVjOC1jYiBkMy0zYjkgNi0wYzM5IDE0OTQ4NSRjNueCgHRhZyPngqrogpZjbGFzMnPqgoU1ROWAuWggaWxkcmVuT+iCn++CkO+CkOGCkDfihI4j5oGk64SeTGlnaCB0Ym94V3JAYXBwZXLnhJhWZOWEpeaElWzlgYjqhKk164Wnd+iBoTflg41iMGxvY2vnhohpUG5saW7jhpfjhbk4YXR044KO5oW2aChyZWbohrQyMy3qgal46YGN5oaSbmEibeiHpHByb2QodWN054eWdmEkbHXoiIJpbWFeZ+SHkuGCuuGFquGDgOSDgz/vh5vvh5vvh5vkhavvh5tpXm3jh6fvh53vh53sh53vhrNd4oqxSeKDj++GqeaKnu6FmChzcmPni6todEh0cHPji7ZG4YusIGQzZTU0diAxMDNqOHEgYmIuY2xvIHVkZnJvbjB0Lm5l4YWLRiHjg5RGcGxhYyBlaG9sZGUgci10aHVtUGIuc3bog6zijJwkaW7oi4NsYXoieeeMvHdpZHRCaOiLnnV0b+eNl1xoZeKJuO+AvOaIuuWFjy/kjbLkhq/khrvjjpRzdDx5bO+MneKNgOGMtHRT74y14Ym6eDHvjYrhgLUj4Y+i6I+VaW50ZSByYWN0aW8ibu+NtzIyZXY8ZW7vgbrijrLjgZFMLGlz7YKX54miMjI0bWXsjYl14oyHayBlZFN5bWIgb2xDb3VuReWEpzDljblyb+GOiTxkTOGBheWRpeaAuXkgbkJpbmRSIGVtb3ZlZD/vgZnigYDigqnvgYTqgb1wQGFnaW5h4oSFJ++Bp+GCoOOMmA==</copy-element>

### Multi Lightbox Link

In this configuration, the lightbox link will be repeated once for each image, and the image inside the lightbox link will connected to the current image.

It's still a single lightbox link but with an additional attribute:

<custom-attribute name="lightbox" value="multi"></custom-attribute>

<copy-element name="Images on multi lightbox">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjAzMGQgNTY0ZC0xIDc4Ni0zZCAwMC0xMjAgNS04NWZkIGQ2Yzc2OSQ3NueCgHRhZyPngqrogpZjbGFzMnPqgoU1ROWAuWggaWxkcmVuT+iCn++CkO+CkOGCkDfihI4j5oGk64SeTGlnaCB0Ym94V3JAYXBwZXLnhJhWZOWEpeaElWzlgYjqhKk164Wnd+iBoTflg41iMGxvY2vnhohpUG5saW7jhpfjhbk4YXR044KO5oW2aChyZWbohrQyMy3qgal46YGN5oaSbmEibeiHpHByb2QodWN054eWdmEkbHXoiIJpbWFeZ+SHkuSCuu+BoOuDvu+BoSAyMm11bHQmaeWDuuaGqmpzbyPmhqbjibRpdGVtIe+HkTIyZ3JvJHVw54qMQ29sQGxlY3Rp5IGbX+GFiOSAo+aCtO+Jpu+Jpu+Htl/viabhhI7jibLviajviajsiahb74i+4oy8SeKFmu+ItOaMqTHuh6NzcmPnjbZoMHR0cHPjjoFGIeGNt2QzZTU0IHYxMDNqOCBxYmIuY2wgb3VkZnJvQG50Lm5l4YeWIkbjg5RGcGxhIGNlaG9sZCBlci10aHVAbWIuc3bog6wp4o6naW7ojY5sYSR6eeePh3dpZCR0aOiNqXV0b1nnj6JoZeKMg++AvOaLhS/lhY/kj73nhrLmjpBzdDx5bO+OqOKPi+GOv3RT74+A4YyFeDHvj5XhgLUj4ZGt6YmKbnRlciZh44im75CCMjJlWHZlbu+BuuKQveOJl1hMaXPtgpfniaLhi4cqZeyPlHXijpJrZSBkU3ltYm9AbENvdW7lhKcyMOWQhHJv4ZCUZC5M4YGF5ZOw5oC5eW4gQmluZFJlQG1vdmVk74GZL+KBgOKCqe+BhOqBvXBhUGdpbmHijIvvgacj4YKg44yb</copy-element>
