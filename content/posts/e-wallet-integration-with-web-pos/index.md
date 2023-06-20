---
title: "E-Wallet integration for Web-POS"
date: 2020-12-02T12:26:18+08:00
draft: false # Set 'false' to publish
imageSEO: "images/social-medias/social-media-e-wallet-integration-with-web-pos.png"
description: "Integration of PayDibs with XeerSoft's Web-POS system to allow customer to pay with E-Wallet"
categories:
- Journals
tags:
- XeerSoft
- QR Code
- E-Wallet
- POS
- API Integration
---

Assalamualaikum!

## XeerSoft Web-POS

[XeerSoft](https://xeersoft.com/) is a One-Stop IT Solutions Provider that offered various solution such as Inventory, Accounting including Web-POS modules. One of the big clients that use XeerSoft’s Web-POS module is [Hup Soon](https://www.hupsoonfood.com/), retail convenience store chain. The main language core for their system is currently using pure PHP and build their own sophisticated framework.

### PayDibs

As business keep growing with technology, I have been entrusted to integrate XeerSoft’s Web-POS module with E-Wallet vendor - [PayDibs](https://www.paydibs.com/), a Fintech company specializes in reliable and secure payment processing technology that enable small to large businesses to accept a vast array of payment types, across multiple channels.

### API Integration

In this case, only E-Wallet channel that integrated and a straightforward API, in which we require a token and integrator (E-Wallet listing) before perform a transaction. E-Wallet listing is basically determination of which E-Wallet to be deduct, such as [GrabPay](https://www.grab.com/my/pay/), [Touch 'n Go](https://www.touchngo.com.my/), [Boost](https://www.myboost.com.my/), etc..., so we just pass the E-Wallet id (provided by PayDibs) into the API parameter.

{{< images
image1="photo-xeersoft-paydibs.webp"
alt1="PayDibs integration for XeerSoft"
>}}

For your information, there two way to create transaction which are either retailer scan QR Code from customer or vice versa, this is depend on business logic. The basic flow will be like this:

Pre-requisite: Store PayDibs account API key and secret into XeerSoft system.

| | API | Descriptions | 
| --- | --- | --- |
| 1. | Get authentication token and (E-Wallet) integrator listing from PayDibs | These value will be store in sessions and need to pass authentication token for every API header |
| 2. | Create trade through PayDibs | To create payment order, must pass integrator id, amount, payment type into the API body |
| 3. | Scan E-Wallet QR Code | To scan customer E-Wallet QR Code to be able to deduct |
| 4. | Payment transaction | For this have three type of transaction: cancel, check status, check void status |

In worse case scenario, if during making the transaction have timeout issue on the connection, the system will have interval function in every 2 seconds to verify the transactions is succeed or not using API - 4. Payment Transaction.

That will be all for today. See you later!