---
title: Metafields
sidebar:
  order: 7
  badge: 
    text: New
slug: shopify/general/metafields
---

Metafields is a new feature of Shopify, introduced in latest Shopify updates.

Metafields configuration is not automatically created by the Shopify app yet. So you must manually configure fields in Shopify!

Metafields can be created for the following resources: Customers, Products, Collections, Articles and Pages.

All metafields attributes follow up a simple schema

<custom-attribute dynamic name="{resource}-metafield:{type}" value="metafield_key"></custom-attribute>

Valid supported resources are: 

* customer
* product
* collection
* article
* page



While supported types are explained below in each section. To create a metafield definition you have to go to Settings > Custom Data > {Resource} > Add metafield

![add metafield](/images/add-metafields.png)

So for example:

<custom-attribute name="page-metafield:text" value="sample"></custom-attribute>

will bind a static webflow text on a static page to a metafield of type "Single line text" created with key "sample" 

![sample metafield](/images/sample-metafield.png)

Naturally the metafield will be editable from the corresponding page on Shopify


![edit metafield](/images/edit-metafield.png)


Naturally the same behaviour will be found for every other resource.

Let's see all supported types!


## Text

This type can be added on any text elements of Webflow and can be connected both to "Single line text" and "Multi line text" metafields of Shopify.

<custom-attribute dynamic name="{resource}-metafield:text" value="metafield_key"></custom-attribute>

## Richtext

This type can be added only on richtext elements of Webflow and can be connected only to the Richtext field of Shopify

<custom-attribute dynamic name="{resource}-metafield:richtext" value="metafield_key"></custom-attribute>

## Number

This type can be added on any text elements of Webflow and can be connected only to the Number field of Shopify

<custom-attribute dynamic name="{resource}-metafield:number" value="metafield_key"></custom-attribute>


## Image

This type can be added on any image element of Webflow and can be connected only to the File Image field of Shopify, if you used on elements that are not "Images" the image will be set as background image

<custom-attribute dynamic name="{resource}-metafield:image" value="metafield_key"></custom-attribute>

## Images

This type can be added on any image element of Webflow and can be connected only to the File Image field of Shopify, if you used on elements that are not "Images" the image will be set as background image. The only difference with the previous metafield is that the element with the attribute will be duplicated once for each image added into the metafield

<custom-attribute dynamic name="{resource}-metafield:images" value="metafield_key"></custom-attribute>

## Url

This type can be added on any link element of Webflow and can be connected only to the URL field of Shopify

<custom-attribute dynamic name="{resource}-metafield:url" value="metafield_key"></custom-attribute>

## File

This type can be added on any link element of Webflow and can be connected only to the File field of Shopify

<custom-attribute dynamic name="{resource}-metafield:file" value="metafield_key"></custom-attribute>



