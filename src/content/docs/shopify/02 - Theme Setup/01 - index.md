---
title: Pages
sidebar:
  order: 1
slug: shopify/theme-setup
---

Any eCommerce theme in Webflow is convertible without any structure limitation in terms of number of pages.

The Udesly App automatically understands your page structure and creates the Shopify pages according to your theme. 

All static pages are automatically created as static page in Shopify, and all dynamic pages are mapped either as eCommerce pages or Blog pages.

You can slightly modify this behaviour just using a different page slug that you can change in Webflow. 

Just as a reminder, the **page slug** is the user friendly and URL valid name of your page in Webflow. Inside slugs you can not use spaces, accented characters, special characters or uppercase characters. You can modify your page slug, inside page settings under the name **Slug**

![webflow page slug setting](/images/webflow-slug.png)



You will find how to define relevant pages in next sections, divided by context, but most of the times you will not need to do any modification to your theme structure, unless you need some specific functions.

## eCommerce pages defined by Webflow

When you enable the eCommerce, Webflow automatically creates some relevant pages that are automatically converted into the corresponding Shopify pages

![webflow page slug setting](/images/ecommerce-pages.png)

### Products Template
Exactly as in Webflow, this template will be used to show up the single page of all your products of Shopify

### Categories Template
Exactly as in Webflow, this template will be used to show up the page of each *category of products* of Shopify. Note that in Shopify, a category of product is called **Collection**, the only difference you will find with Webflow is the url, Shopify urls are not modifiable and each collection will be found at the path ```/collection/{collection-handle}```.
Be sure to add in this page a collection list of products with no sort, filters set as *Categories contains Current Category* and *paginate items* enabled, like in the screen below:

![correct category settings](/images/correct-collection-settings.png)

### Checkout and Paypal Checkout

These pages will be deleted, so do not mind customizing it. Shopify checkout is not customizable, you can only change some settings like logos and colors on the Shopify Customizer

### Order Confirmation
This page will be used to show up the details of each order of your customer

## Extra eCommerce pages you can create

### Cart
Even if is not mandatory, is way better to create a Cart page since it is automatically linked by Shopify from the checkout. To create a cart page in Webflow, you just have to create a static page that has the slug **cart**

### List Collections
This page is typical of Shopify stores and can be found at the url ```/collections```. This page should show up a list of all the *Collections* of your Store.
To create this page in Webflow just create a static page with the slug **list-collections**, be sure to add inside a collection list of *Product Categories*

### Gift Card
This is the page that shows up a status of a Gift card issued by your store. It should show up the balance of the Gift card and it's expiration date for example. This page is accessible only through an email link, so do not try to link up to it.
Inside this page you can add all elements that you can find in [Gift Card Elements](/shopify/shop/gift/)

### Shop Page
In Shopify the main shop page can be found both at the urls ```/products``` and ```/collections/all```. These urls will both use by default the *Categories Template* of Webflow. If you want to style this page differently, create a static page in Webflow with the slug **collection-all**. Be sure to add in this page a collection list of products without any filter and sort and paginated.


### Utility pages

All utility pages are used with same purpose also in 

1. **Password Page** will be used if your store is password protected;
2. **404** page will be used as page not found;
3. **Search Page** will be used as a page to show

### E-Commerce Pages



More details about E-Commerce and pages can be found on the E-Commerce section.

### CMS Collection Pages

Since in Shopify, actually you can't create "Custom CMS Collections", the Udesly App translates all different CMS Collections as different *Blogs*, so every page that you can find inside the section **CMS Collection Pages**, will be converted as an *alternative article template*.

For example if you create a CMS collection called **Event** in Webflow, you will find all single events inside the url structure /blogs/event/event-slug, and this url will use the page **Event Template** that you find under *CMS Collection Pages*.

More details about CMS Collections and pages can be found on this section.

### Static Pages

All static pages will be converted as static pages as well, unless they have a reserved **page slug** or use a reserved **page slug pattern**.

Note that all the pages below are optional, but can surely enhance your Shopify theme!

Below you can find a list of reserved page slugs or page slugs patterns, divided by context:



#### E-Commerce

1. **cart**: used to create the template showed at the url: `/cart`;
2. **gift-card**: used to create a **Gift Card** Page. this page will be accessible only through email links; 
3. **list-collections**: used to create the template showed at the the url `/collections`;
4. **collection-all**: used to create the template showed at the url `/collections/all` (Formerly this is the Shop page in Shopify);
5. **collection-***: used to create an alternative collection template;
6. **product-***: used to create an alternative product template;



#### Account

1. **login**: used to create the template showed at the url `/customers/login`;
2. **register**: used to create the template showed at the url `/customers/register`;
3. **account**: used to create the template showed at the url `/customers/account`;
4. **activate** or **activate-account**: used to create an **Activate Account** page, that is accessible only through email links;
5. **reset**: used to create the template showed at the url `/customers/reset-password`;
6. **addresses**: used to create the template showed at the url `/customers/addresses`;



#### CMS Collections

1. **blog-***: used to create an alternative blog template;
2. **article-**: used to create an alternative article template;



#### Page Templates

1. **page** or **default**: used to create a default page template, useful to create pages directly in Shopify;
2. **special-page**: used for policy pages and some special third party apps;







