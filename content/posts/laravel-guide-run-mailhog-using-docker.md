---
title: 'Laravel Guide: Run Mailhog using Docker'
description: 'The most easiest setup to capture email on localhost'
event: 'laravel_guide_run_mailhog_using_docker'
image: ''
draft: true
published: '2024-06-15'
---

Laravel already provide in-built feature for sending email with a simple email API powered by the popular Symfony Email. The API based drivers such as Mailgun, Postmark, Resend, and MailerSend are often simpler and faster than sending mail via SMTP servers. However. to setup email for localhost can be annoying especially when need to connect through internet and what if the WIFI down? 

1. Install orbstack
2. Create docker-compose.yml
3. Run command `docker compose up -V -d`
4. Update `.env` in Laravel application
5. Open [localhost](http://localhost:8025/#)
6. Test mail