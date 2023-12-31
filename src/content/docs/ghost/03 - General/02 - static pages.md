---
title: Static Pages Elements
sidebar:
  order: 2
slug: ghost/general/static-pages
---

To static pages you can give a little bit of dynamicity with the elements you find below!

The fields you will find below will be modifiables from Ghost Admin panel!

### Title

Title of the page, it can be used on any kind of text element, but it's adviceable to add it on headers elements, you just need to add the attribute:

<custom-attribute name="page" value="title"></custom-attribute>

<copy-element name="Page Title">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMmVhZWQgYmE1ZS0zIDU0Mi0xNEAyYi02NOGAqiBlMWZkOGZANmZmYzbhgb0x5YKAdGFn54KqaCIx54KXY2xhcyJz6oKGMjJkMCA4MDMwZTYgLWVkM2ItIDcwY2YtYyAwNzEtMjEgMjBkMTdiMGQ3Yznig7U1IkTlgaNoaWxkWHJlbuqBpO+Cu++Cuyw2M+qBpOuFiUhlUGFkaW7jg4/jhLs+ZOWFiOaEuO+Dq+SFongwYXR0cu2Fj24kYW3ohqFwYWcj44au44aQdmFsdUHohrx0aXRs44eKXDdE4oO44YCm4YCp4Ya4P++GlO+GlO+GlOSDueSGlGVEeHTkiJ90cuKCjSvjgpjniLBQ44KvMFQh5IKbMFBsYWMgZWhvbGRlJ+ODpeSCqeOIu3N0eV5s74ip6oip74eS74eS5IeSMeOKiWZha+WKtGZYYWxz5YK264uJ44i0L+eKueuFo+yDlOmBgnNwJ+GDnuiMi+eJv29tYlPvgLbkg7FMZeSCheyBkSB2YXJpYW5edOaMl+GNpuSGqe+Kh+GMsSHnhYBlbGVjdCJv5YicbnVsbC/qhZ7ijIDngbDpgZZpeC/jjKbugLXjjZLmjqJpbiB0ZXJhY3Q4aW9u74Gi4Y6gdi5l6IOK6YKw5IGRTGkmc+2Cl+eJtjIybSJl7IuzdW5saSBua2VkU3kgbWJvbENvNHVu5YmZMOWMo3Igb3BwZWRMJ+GBheWQsuaAuXluQiBpbmRSZW1Qb3ZlZO+BmeKBgC/igqnvgYTqgb3hjLhpbj5h4oSF74Gn4YKg44ys</copy-element>

### Content

This is the content of the page, inside this content you can use Guthenberg blocks in WordPress or any other page builder like Elementor. In Webflow you just add a placeholder RichText that will be populated by the WordPress page content.

Just add the following attribute on a RichText element!

<custom-attribute name="page" value="content"></custom-attribute>


<copy-element name="Page Content">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjI3OWEgYzI5MC1hIDA1YS04MyA1My02NDYgNC01MGNkIGE3ZjM4MCQ0ZueCgHRhZzHngqpkaXbngphjMGxhc3Pqgoc1IkTlgLloaWxkWHJlbuiCoe+Cku+CklA4MDUw54Oy74K/Xe+CvzXhhJzvgY3vg6zmgbouNOKFquaCvuuFulJpIGNoVGV4dE3nha1k5YW65oWqcuGBgVHkhqh0cnXhhrLvhLEh6YSxeGF0dHIx7YaWbmFt6IeocCxhZ+OHteOHl3ZhJmzigbHliINjb24odGVu44KoN0Rf4oWq4YCm4YCp4YiB74ed74edV++HnemFq+qHnWjohZXvh5xP74ec74ec74mO6oecMe+GgiHmi5xIZWFkaV5u44mi74aB44yJ74OB74SaX++Ll++Ll+2CqeSLl+WHt+qHmkvji53jjbNQ44arMOeGlyAwUGxhY2VAaG9sZGXjh6M/74ac742Z742Z74q66o2ZcF/vjZfvjZfvjZfvj4nvj4nijZcmM++LveiEhHJhZ1hyYXDji6Hvia3vkKov75Cq6oKB74Wz74WzMlQ8aGnhkpTphbPjgK9hJGxs4YaIZmFrMeSNnTBhbuGTijAoaXQn4oGManVGc+KGnOGTrDBw6IagXiHvhqHvk5rvk5rukI7vk5peaOiAt++Tme+Tme+Tme+Vi13qk5k175G/74yd75G+74ydX+WDge+Ql++XlO+XlO2Cqe+MnSfvjJ3hh4rijJxyZWEz4oa76Iyjd2njh4xiQeKMuWFkZGXjh4kwbnNpZOKNilcgb3JkUHJlQnPjh7RkbWnhl74gMHBhbmVsI+aHjuaYnnN0eWw375i24Zuy4pmNdO+ZjjJYMml445Gd7oC145iBJeabsGnhlL1yYWMwdGlvbu+akDJYMmV24ZWa75qo4YKSUeOBkUxpc+2Cl+eVuzAyMm1l7JiPdSBubGlua2UgZFN5bWJvMGxDb3XklrMzJkHhmr3jmL9yb3BQcGVkTOGBheWegCHmgLl5bkJpbiBkUmVtb3ZcZWTvgZnigYDigqnvgYRD6oG94Zi/aW5h4oSFJ++Bp+GCoOOYsQ==</copy-element>



### Featured Image

The featured image can be added either to an *Image* element or to a *Div* as background, it will get the style that you set on Webflow so, even if you use just a placeholder image, don't forget to set a correct style, like cover or contain, otherwise it will probably tile!

To add a featured image, just add the following attribute:

<custom-attribute name="page" value="featured-image"></custom-attribute>

<copy-element name="Page Featured Image">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMmIxMjYgZjUzZS0zIDdmMC02MCA4Yy1jMjAgMi1lMGFkIDVmNjlkNSRjNeeCgHRhZznngqppbeOArOOCmGMwbGFzc+qChzIgMjg0OTJlIGU5ZS1mNSBhYy0zYzYgZC0wMjc5IC00YTM3MyAxYTc3ZjUp44G4NUTlgaNoaUBsZHJlbuiDiyPmgLrrhKBJbWFnO+OEruOEkGTlhJ3mhI1hKHR0cuqEnXNyImPnhZpodHRwKnPjhaVG4YWbZDMgZTU0djEwIDNqOHFiYiAuY2xvdWQgZnJvbnQuKG5ldOGFu3BsMHVnaW7hhZlGMEJhc2nhgaZGJeKEgnTigLFwbGEgY2Vob2xkIGVyLjYwZiA5YjE4NDBQYy5zduiEsOKGpSRpbuiFjGxheiJ554eFd2lkdCJo54exYXV0byHnh6BoZWlnaFvhgp/tgLw35YWE5YaT5oe7X+mHpu+Dj++Dj+ODj+WDhOaBsCZ46YWQ5oi8bmFtJeiKjnDqho12YWwideiKqWZlYXQgdXJlZC1pX+aGsuGDhuGHreGDjOSAqeOKsVBzdHls74qf6oqfL++Jh++Jh+SJh+OLv2ZhImvljKpmYWxzX+GMte+Iv+OKqeeMr+uDrOaDkTglMjDng5PngYZzLnDhh7TojoXni7hvbUZi74C25IO1TGXkgokh4462b2JqZWNAdC1maXTjj4YgMGNvdmVyLCUz4o+e5oWccmlcYW7iiZ/mjrrmh7TvjJhJ6IWcZWzhgbVv5YuxUG51bGzqhbrmiq9R7o2OaXgx742j4YC1I+ODtOeJmW50ZXJAYWN0aW/ijIJR7o6QZXZl6IOK6Y6oUeSBkUxpc+2Cl+SIkinjkqBtZeyOsHVuIGxpbmtlZCBTeW1ib2wwQ291buWLvTAh5Y+gcm9wcGU8ZEzhgYXlk4TmgLl5IG5CaW5kUlRlbeGFqmTvgZnigYAv4oKp74GE6oG94YudaW4+YeKEhe+Bp+GCoOOLiA==</copy-element>
