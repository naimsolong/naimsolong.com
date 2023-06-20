---
title: "Revamp Qr Code system for Tokopak"
date: 2021-01-02T12:47:01+08:00
draft: false # Set 'false' to publish
imageSEO: ""
description: "Challenges in revamp QR Code system from .NET into Laravel framework"
categories:
- Journals
tags:
- XeerSoft
- Revamp
- QR Code
---

Assalamualaikum!

## Tokopak

[Tokopak](http://www.pmtepsgroup.com.my/) is one of the [XeerSoft's](https://xeersoft.com/) biggest client, they produced polystyrene or foam that used to hold electronic device in box such as television or microwave as shown picture below. They usually deliver these polystyrene product to common electronic device provider such as Sharp, Panasonic, Philips, etc...

{{< images
image1="photo-revamp-slideshow-1.png"
alt1="Slideshow 1"
>}}

### Revamp Process

My manager has form a group of three in which consist of two senior software developer and one intern including me as Technical Lead. Along with one project manager stationed at Melaka branch as it nearby to Tokopak's factory location. This project started as we dissect/study the existing QR Code system written in .NET, we had to learn how to open .NET project file from scratch and how to setup it's database connection. I admit it was hard as we try and error A LOT!

{{< images
image1="photo-revamp-login.png"
alt1="Login Page"
>}}

For this project need a name, we call it as Inventory, Scanner, Logistic - ISL System - but we usually call it as Tokopak project follow it's client name. In the system have phases consist of three:

| Phase #1 | Phase #2 | Phase #3 |
| --- | --- | --- |
| **Planning Phase**: planning quantity of polystyrene and generate it’s QR Code | **Production Phase**: polystyrene is being produced and QR Code generated will stick to each polystyrene | **Transportation Phase**: It will transport to respective client such as Sharp or Panasonic |

{{< images
image1="photo-revamp-slideshow-2.png"
alt1="Slideshow 2"
>}}

This is simple system in which QR Code is printed in A4 sized paper, then paste to respective polystyrene using sellotape. As the process proceed through out Production and Transportation Phase, the user will use handheld scanner device to scan QR Code. Since in XeerSoft have expertise PHP language, we promote to use [Laravel Framework](https://laravel.com/) to reduce learning curve.

### Challenges

When revamping this system using a new programming language, there are several challenges that we have encounter:

1. **Compatibility issues**: When we migrate to Laravel, there are no direct equivalents for certain packages, or tools used in the previous system such as scanning QR Code, we have to use JS library such as [Html5-QRCode](https://github.com/mebjas/html5-qrcode)

2. **Migration of existing code**: It's a complex and time-consuming process for ranslating the logic and functionality of the existing codebase.

3. **Stakeholder expectations**: This has impact stakeholders, such as users or clients, when their expectations the new system will be similar to previous system which is not, in term of User Experience (UX) flow.

That will be all for today. See you later!