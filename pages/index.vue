<script setup lang="ts">

let offers = [
  {
    headline: 'Web Development',
    description: 'Front-to-back-end development ',
    image: 'images/skills/web-svgrepo-com.svg',
    alt: 'Web Development',
  },
  {
    headline: 'API Integration',
    description: 'Allow system to drive revenue rapidly',
    image: 'images/skills/api-svgrepo-com.svg',
    alt: 'API Integration',
  },
  {
    headline: 'Unit Test',
    description: 'Build a fully automation tests script',
    image: 'images/skills/tick-svgrepo-com.svg',
    alt: 'Unit Test',
  },
  {
    headline: 'Server Deployment',
    description: 'Deployment using RunCloud',
    image: 'images/skills/server-svgrepo-com.svg',
    alt: 'Server Deployment',
  },
]

let stacks = [
  {
    image: '/images/stacks/tech-laravel.png',
    link: 'https://laravel.com',
  },
  {
    image: '/images/stacks/tech-inertiajs.png',
    link: 'https://inertiajs.com',
  },
  {
    image: '/images/stacks/tech-vuejs.png',
    link: 'https://vuejs.org',
  },
  {
    image: '/images/stacks/tech-svelte.png',
    link: 'https://svelte.dev',
  },
  {
    image: '/images/stacks/tech-tailwindcss.png',
    link: 'https://tailwindcss.com',
  },
  {
    image: '/images/stacks/tech-pest.png',
    link: 'https://pestphp.com',
  },
  {
    image: '/images/stacks/tech-mysql.png',
    link: 'https://www.mysql.com',
  },
  {
    image: '/images/stacks/tech-aws.png',
    link: 'https://aws.amazon.com',
  },
  {
    image: '/images/stacks/tech-do.png',
    link: 'https://www.digitalocean.com',
  },
  {
    image: '/images/stacks/tech-nginx.png',
    link: 'https://www.nginx.com',
  },
  {
    image: '/images/stacks/tech-runcloud.png',
    link: 'https://runcloud.io',
  },
]

</script>

<template>
  <div>
    <SectionsSpacing>
      <FontsHeaderOne>
        Full-Stack Laravel Developer
      </FontsHeaderOne>

      <FontsParagraph>
        I'm Amirul, a passionate web application developer in helping business growth, with 4 year plus of web development experience across multiple industries - e-commerce, human resources, point of sales - I'm still curious and love to learn new things about how tech work behind the scene.
      </FontsParagraph>

      <FontsParagraph>
        Currently, work on a full-time basis, it's a pleasure to share knowledge and updates about my career progress in articles and journals.
      </FontsParagraph>

      <FontsParagraph>
        I believe that <b>simplicity</b>, <b>integrity</b> and <b>empathy</b> are the ideal approach to problem-solving in general.
      </FontsParagraph>
    </SectionsSpacing>

    <SectionsSpacing>
      <FontsHeaderTwo>
        What Do I Offer
      </FontsHeaderTwo>

      <SectionsImages :datas="offers" size="large"/>
    </SectionsSpacing>

    <hr>

    <SectionsSpacing>
      <FontsParagraph text_align="center">
        By using latest technology stack and tools that can scale but not limited to.
      </FontsParagraph>

      <SectionsImages :datas="stacks"/>
    </SectionsSpacing>
  </div>
</template>
