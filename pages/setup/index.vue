<script setup lang="ts">
import { profile } from '~/datas/root'

useSeoMeta({
  author: profile.fullname,
  creator: profile.fullname,
  title: 'Setup | naimsolong',
  description: 'Local development setup.',
  ogTitle: 'Setup | naimsolong',
  ogDescription: 'Local development setup.',
  ogType: 'article',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <FontsHeaderOne>
    My current setup
  </FontsHeaderOne>

  <FontsParagraph>
    My personal preference of software and hardware that I use to build software.
  </FontsParagraph>

  <hr>

  <FontsHeaderTwo>
    Workstation
  </FontsHeaderTwo>

  <FontsParagraph>
    I'm currently using whatever laptop that my company provide, which is HP Laptop 14-inch with following specs:
  </FontsParagraph>

  <FontsList :lists="[
    'Intel Core i7-1355U',
    '16GB SDRAM',
    '500GB SSD',
    'Windows 11 Home',
  ]"/>

  <FontsParagraph>
    I've been a Windows for over a decade and it has been a great experience, but I'm planning to switch to Macbook Pro in the future.
  </FontsParagraph>

  <FontsHeaderTwo>
    Integrated Development Environment (IDE)
  </FontsHeaderTwo>

  <FontsParagraph>
    I use <FontsLink href="https://code.visualstudio.com/">Visual Studio Code</FontsLink> as my main IDE for web development.
    It's free, open-source, and cross-platform, working on Windows, Linux, and macOS, and it has an in-built debugger.
    Plus, it has extension marketplace where it support hundreds of programming language and provide a robust tools.
    A simple extension named <FontsLink href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag">Auto Close Tag</FontsLink> help automatically add close tag and it increase my productivity
  </FontsParagraph>
  
  <FontsHeaderTwo>
    Terminal
  </FontsHeaderTwo>

  <FontsParagraph>
    I use <FontsLink href="https://mobaxterm.mobatek.net/">MobaXterm</FontsLink> as my ultimate toolbox for remote computing and I used it in my daily task.
    It has a lot of features such as tabbed terminal, session management, multi-execution and much more.
    Eventhough, it's free version only limited 12 sessions and 2 SSH Tunnels, this will be enough for me as I only use it for my local.
  </FontsParagraph>
  
  <FontsHeaderTwo>
    Development
  </FontsHeaderTwo>

  <FontsParagraph>
    I have love-hate relationship with <FontsLink href="https://docker.com">Docker</FontsLink>.
    It does allow for easy deployment and development across multiple platforms, but it consume a lot of resources in my laptop.
  </FontsParagraph>

  <FontsHeaderTwo>
    Note Taking
  </FontsHeaderTwo>

  <FontsParagraph>
    I use <FontsLink href="https://notion.so">Notion</FontsLink> as my note taking.
    It support rich media with various file types, it offers syncing cross-platform devices and the best part is it provide customizable templates.
  </FontsParagraph>
</template>