---
title: Metaobjects
sidebar:
  order: 6
  badge: 
    text: New
slug: shopify/general/metaobjects
---

Metaobjects is a new feature of Shopify, introduced in latest Shopify updates.

Metaobjects configuration and data are not automatically created by the Shopify app yet. So you must manually configure fields and create data in Shopify!

Don't worry though setting up a metaobject is not complicated.
In Webflow you have just to create a CMS Collection which slug starts with metaobject-. For example, if you want to have an Events metaobject collection, you just have to create a CMS collection in Webflow in this way:

![metaobject event](/images/metaobject-event.png)


While in Shopify you have to create a new metaobject from Settings > Custom Data > Create Metaobject, and the name just needs to be **event** in this case

![add metaobject](/images/add-metaobject.png)

You will have to add fields for the metaobject using the same name you used in Webflow

![event definition](/images/event-definition.png)

Be sure to check *Storefront* and *Web pages* in the metaobject configuration!

