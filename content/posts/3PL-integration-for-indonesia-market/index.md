---
title: "3PL Integration for Indonesia Market"
date: 2021-12-22T12:32:20+08:00
draft: false # Set 'false' to publish
description: "Integrate Third-Party-Logistic (3PL) API with Dropee for Indonesia Market"
categories:
- Journals
tags:
- Dropee
- API Integration
- Laravel
---

Assalamualaikum!

### Dropee

I joined [Dropee](https://www.dropee.com) in the mid 2021, it's a B2B eCommerce solution provider that enables businesses to buy and sell in bulk online. At that time, we just making through to Indonesia Market under the name [Borong](https://borong.co.id/) in a mission to create a trusted platform that enables millions of businesses to strengthen trading relationships and grow their distribution empire.

### Shipper

[Shipper](https://shipper.id/) allow to boost efficiency, cut costs and grow business with their various tech-enabled solutions from extensive logistics to procurement and financing solutions, they got it under one roof to allow hassle-free business operation and faster growth.

### API Integration

Integrating with Shipper's API requires several steps, including signing the Agreement, testing the integration, filling out the UAT form, and simulating the order creation and pickup request. Shipper's team will provide support during the integration process and will schedule an Onboarding Call to provide information about the operational service. After the Onboarding Call, we can get the API Key from the Shipper dashboard and put it API Request header known as X-API-Key.

The basic API flow will be like this:

| | API | Descriptions | 
| --- | --- | --- |
| 1. | Get API Key from dashboard | These value will be store in database and need to pass authentication token for every API header |
| 2. | Get location by keyword | To get the desired location for getting price and creating orders |
| 3. | Get logistic pricing | To obtain logistic pricing rates for both domestics and internationals |
| 4. | Create logistic order | To create logistic order based on selected vendor |
| 5. | Create pickup request | To create pickup request based on selected vendor |

That will be all for today. See you later!