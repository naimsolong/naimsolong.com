---
title: "Rebrand website during internship"
date: 2018-01-01T12:21:26+08:00
draft: false # Set 'false' to publish
description: "Businesses must keep adapt to stay relevant through website rebranding"
categories:
- Journals
tags:
- 2018
- Internship
- Rebranding
- Website
---

Assalamualaikum!

After finished task in [logo design](/posts/best-work-in-logo-illustration#during-internship), I was given responsibility to rebrand RN Technologies website as I join internship as web developer. It has been a great work and I've learned a lot back then because it one-man show project as I'm the only intern there. Eventhough this is fast-paced work in fast-changed technology trend, businesses must keep adapt to stay relevant.

{{< images 
image1="pic-website.png"
alt1="Rebranded website"
>}}

The process start with discussion with my supervisor on what and how the website should be. As I compare with previous design, I keep try and error modifying the website's code to reflect new brand identity. So I proposed that we should use Bootstrap as structure base and proceeded using PHP to create a dynamic content. In addition we also use MySQL to access database for the event management system.

The event management’s dashboard is using [AdminLTE dashboard template](https://adminlte.io/), the best open source admin dashboard & control panel theme. Built on top of Bootstrap, AdminLTE provides a range of responsive, reusable, and commonly used components.
The modules consists of:

| Module | Description | 
| --- | --- |
| Login | Allow user to login and restrict unwanted access |
| Dashboard (calendar view) | List out all event based on each date |
| Profile | Allow user to update their credentials |
| Users management | Allow user to add, edit and remove other users |
| Event management | Allow user to add, edit remove, view (past & inactive) event |

In additions, by using PHP SESSION variable, using middle-ware concept to authenticate user, if the user is not login then system will redirect to login page.

{{< images 
image1="pic-dashboard-1.png"
alt1="View admin login"

image2="pic-dashboard-2.png"
alt2="View dashboard"
>}}

{{< images 
image1="pic-dashboard-3.png"
alt1="View profile"

image2="pic-dashboard-4.png"
alt2="Add event"
>}}

{{< images 
image1="pic-dashboard-5.png"
alt1="List of event"

image2="pic-dashboard-6.png"
alt2="View event"
>}}


You may check the [website here](https://rntechnologies.com.my/) but note that it may have the newer version of my work.

That will be all for today. See you later!