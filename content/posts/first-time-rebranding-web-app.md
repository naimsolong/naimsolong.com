---
title: 'First Time Rebranding Web App'
description: 'Businesses must stay relevant through website rebranding'
event: 'first_time_rebranding_web_app'
image: ''
draft: false
published: '2024-01-07'
---

Assalamualaikum.

What interesting studying at Universiti Teknologi Malaysia (UTM), Johor Bahru campus, is that we have whole semester (6 months) doing internship at the last semester of the last year period. I believe this allow students absorb into work directly after intern or having enough working experience to start job hunt right after graduate. It also teach us this the last chance to have fun with friends before we start adulting.

Luckily for me, I have some friends that also doing internship at Johor Bahru area, so I can have fun with them while stressing out with work.

## Internship at Nusajaya, Johor Bahru

I joined [RN Technologies Sdn Bhd](https://rntechnologies.com.my/) on early September 2017 as web developer intern. During this period, I've been given multiple various tasks that might not related to my course of study such as logo design and mockup design but I'm glad that I've been given opportunity to learn new things.            
        
After finished designing logo for MyraHub and a few month before ending my internship, I was given responsibility to rebrand their website and create a simple event management system. It has been a great work and I've learned a lot back then because it one-man show project as I'm the only intern there. Eventhough this is fast-paced work in fast-changed technology trend, businesses must keep adapt to stay relevant.

![Rebranded website](/images/posts/pic-website-rebranded.png)

## Rebranding Process

The process start with discussion with my supervisor on what and how the website should be. As I compare with previous design, I try to sketched out the new design and proposed repeatedly to my supervisor if this is what they want. Unfortunately, I don't have the sketch anymore.

Once the new design is approved, I keep try and error modifying the website's code to reflect new brand identity. Initially I did try to use [BEM Methodology](https://getbem.com/) with vanilla CSS but in the end, I proposed that we should use [Bootstrap](https://getbootstrap.com/) as structure base to speed up development and the Banner Section was using [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/). At the same time, proceeded using PHP to allow use to display a dynamic content for Event Section.

The website is consists of 10 sections which are:

- Navigation Bar
- Banner Courosel
- Introduction
- Organization Chart
- Products
- Clients
- Events
- Contact Us
- Sitemap
- Copyright Footer


I would like to shout out to [Ronny Siikaluoma](https://codepen.io/siiron) for this amazing responsive organization chart design. He's a live saver for me as I'm struggling to find a way to display the organization chart. You can check out his [codepen here](https://codepen.io/siiron/pen/DpJmwK).

## Simple Event Management System

The event management's dashboard is using [AdminLTE dashboard template](https://adminlte.io/), the best open source admin dashboard & control panel theme. Built on top of Bootstrap, AdminLTE provides a range of responsive, reusable, and commonly used components. In addition we also use MySQL to store the data and using PHP SESSION variable for middle-ware concept to authenticate user, if the user is not login then system will redirect to login page.

I'm unable to share the end result of the system's dashboard due to private and confidential. However the modules consists of:

- Login = Allow user to login and restrict unwanted access
- Dashboard (calender view) = List out all event based on each date
- Profile = Allow user to update their credentials
- Users manageme = Allow user to add, edit and remove other users
- Event manageme = Allow user to add, edit remove, view (past & inactive) event

In a nutshell.

It's a great experience to handle this project on my own, it teach me how to be independent and how important is to have a good communication. It may look old school 😅 but this is the proud work I've done back then. You may check it out but note that it may have the newest version.

See you soon!