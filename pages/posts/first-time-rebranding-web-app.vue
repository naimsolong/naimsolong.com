<script setup lang="ts">
import { getDetails, modifyImageLink } from '~/datas/posts'

const slug = 'first-time-rebranding-web-app'

const [ post, SEOMeta ] = getDetails(slug)

useHead({
  script: [ { async: true, src: 'https://cpwebassets.codepen.io/assets/embed/ei.js' } ]
})

useSeoMeta(SEOMeta)

const images = [
    {
        image: modifyImageLink(slug, '/pic-website.png'),
        alt: 'Rebranded website',
    },
]

const sectionLists = [
    'Navigation Bar',
    'Banner Courosel',
    'Introduction',
    'Organization Chart',
    'Products',
    'Clients',
    'Events',
    'Contact Us',
    'Sitemap',
    'Copyright Footer',
]

const moduleLists = [
    'Login - Allow user to login and restrict unwanted access',
    'Dashboard (calendar view) - List out all event based on each date',
    'Profile - Allow user to update their credentials',
    'Users management - Allow user to add, edit and remove other users',
    'Event management - Allow user to add, edit remove, view (past & inactive) event',
]
</script>

<template>
    <article>
        <FontsHeaderOne>
            {{ post.headline }}
        </FontsHeaderOne>
        
        <FontsIntroduction>
            What interesting studying at Universiti Teknologi Malaysia (UTM), Johor Bahru campus, is that we have whole semester (6 months) doing internship at the last semester of the last year period.
            I believe this allow students absorb into work directly after intern or having enough working experience to start job hunt right after graduate.
            It also teach us this the last chance to have fun with friends before we start adulting.
        </FontsIntroduction>
        
        <FontsParagraph>
            Luckily for me, I have some friends that also doing internship at Johor Bahru area, so I can have fun with them while stressing out with work.
        </FontsParagraph>

        <FontsHeaderTwo>
            Internship at Nusajaya, Johor Bahru
        </FontsHeaderTwo>
        
        <FontsParagraph>
            I joined <FontsLink href="https://rntechnologies.com.my/">RN Technologies Sdn Bhd</FontsLink> on early September 2017 as web developer intern.
            During this period, I've been given multiple various tasks that might not related to my course of study such as logo design and mockup design but I'm glad that I've been given opportunity to learn new things.            
        </FontsParagraph>
        
        <FontsParagraph>            
            After finished designing logo for MyraHub and a few month before ending my internship, I was given responsibility to rebrand their website and create a simple event management system.
            It has been a great work and I've learned a lot back then because it one-man show project as I'm the only intern there.
            Eventhough this is fast-paced work in fast-changed technology trend, businesses must keep adapt to stay relevant.
        </FontsParagraph>

        <SectionsImages :datas="images"
            size="original"
        />

        <FontsHeaderTwo>
            Rebranding Process
        </FontsHeaderTwo>

        <FontsParagraph>
            The process start with discussion with my supervisor on what and how the website should be.
            As I compare with previous design, I try to sketched out the new design and proposed repeatedly to my supervisor if this is what they want.
            Unfortunately, I don't have the sketch anymore.
        </FontsParagraph>

        <FontsParagraph>
            Once the new design is approved, I keep try and error modifying the website's code to reflect new brand identity.
            Initially I did try to use <FontsLink href="https://getbem.com/">BEM Methodology</FontsLink> with vanilla CSS but in the end, I proposed that we should use <FontsLink href="https://getbootstrap.com/">Bootstrap</FontsLink> as structure base to speed up development and the Banner Section was using <FontsLink href="https://owlcarousel2.github.io/OwlCarousel2/">Owl Carousel 2</FontsLink>.
            At the same time, proceeded using PHP to allow use to display a dynamic content for Event Section.
        </FontsParagraph>

        <FontsParagraph>
            The website is consists of 10 sections which are:
        </FontsParagraph>
        
        <FontsList :lists="sectionLists" />

        <FontsParagraph>
            I would like to shout out to <FontsLink href="https://codepen.io/siiron">Ronny Siikaluoma</FontsLink> for this amazing responsive organization chart design.
            He's a live saver for me as I'm struggling to find a way to display the organization chart.
            You can check out his <FontsLink href="https://codepen.io/siiron/pen/DpJmwK">codepen</FontsLink> below.
        </FontsParagraph>

        <FontsParagraph class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="DpJmwK" data-user="siiron" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/siiron/pen/DpJmwK">Responsive Organization Chart</a> by Ronny Siikaluoma (<a href="https://codepen.io/siiron">@siiron</a>) on <a href="https://codepen.io">CodePen</a>.</span>
        </FontsParagraph>

        <FontsHeaderTwo>
            Simple Event Management System
        </FontsHeaderTwo>
    
        <FontsParagraph>
            The event management's dashboard is using <FontsLink href="https://adminlte.io/">AdminLTE dashboard template</FontsLink>, the best open source admin dashboard & control panel theme.
            Built on top of Bootstrap, AdminLTE provides a range of responsive, reusable, and commonly used components.
            In addition we also use MySQL to store the data and using PHP SESSION variable for middle-ware concept to authenticate user, if the user is not login then system will redirect to login page.
        </FontsParagraph>
    
        <FontsParagraph>
            I'm unable to share the end result of the system's dashboard due to private and confidential.
            However the modules consists of:
        </FontsParagraph>
        
        <FontsList :lists="moduleLists" />

        <FontsClosing>
            It's a great experience to handle this project on my own, it teach me how to be independent and how important is to have a good communication.
            It may look old school 😅 but this is the proud work I've done back then.
            You may check it out but note that it may have the newest version.
        </FontsClosing>
    </article>
</template>