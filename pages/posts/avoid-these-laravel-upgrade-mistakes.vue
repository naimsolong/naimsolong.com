<script setup lang="ts">
import { getDetails, modifyImageLink } from '~/datas/posts'

const slug = 'avoid-these-laravel-upgrade-mistakes'

const [ post, SEOMeta ] = getDetails(slug)

useSeoMeta(SEOMeta)
</script>

<template>
    <article>
        <FontsHeaderOne>
            {{ post.headline }}
        </FontsHeaderOne>
        
        <FontsIntroduction>
            New features requirements keep coming in but doesn't have time for optimization and our code becoming a legacy eventually.
            It is important to follow framework upgrade so that our code will be regularly update too, even though it is time consuming, costly and risky.
        </FontsIntroduction>
        
        <FontsParagraph>
            The secret is not to delay it... Why?
        </FontsParagraph>

        <FontsList :lists="[
            'Security - FIX the vulnerabilities and loopholes.',
            'Reduce Technical Debt - REFACTOR the legacy code as software evolves and adds more features.',
            'Performance - SPEED UP your application will make your customer happy.'
        ]" />

        <FontsParagraph>
            Upgrading Laravel version, similar like upgrading any other software, can be a complicated and complex process, of course depend on the code structure.
            So how to avoid making any mistake during the upgrade process?
        </FontsParagraph>

        <FontsHeaderTwo>
            #1. Ignoring the Documentation
        </FontsHeaderTwo>
        
        <FontsParagraph>
            One of the most common mistakes developers tend to make is overlooking the official Laravel upgrade <FontsLink href="https://laravel.com/docs/10.x/upgrade">documentation</FontsLink>.
            Thanks to the core team, Laravel's documentation has a comprehensive and developer-friendly guide includes the changes in each version, a possible issues we may encounter with respective solutions.
        </FontsParagraph>
        
        <FontsParagraph>            
            The upgrade guide are provide in three level of impact - high, medium, and low - in which help the upgrade process smoothly and allow you to focus which issues that might have breaking changes.
            Thus, it is essential to take time to understand the upgrade guide first before start.
        </FontsParagraph>

        <FontsHeaderTwo>
            #2. Jump to major version upgrade
        </FontsHeaderTwo>

        <FontsParagraph>
            The second mistake is jumping directly to a major version upgrade without considering the incremental upgrades of each version.
            As the upgrade guide has provided a comprehensive steps, sometime we might missed out some changes that could potentially break the application if not properly managed.
            It is advisable to gradually upgrade of each version to make sure the application is stable before moving to the next version. 
        </FontsParagraph>

        <FontsHeaderTwo>
            #3. Overlooking Unknown Error Messages
        </FontsHeaderTwo>
    
        <FontsParagraph>
            Another common mistake after Laravel upgrade is overlooking or ignoring unknown error messages.
            These error messages are not merely obstacles to be ignored; they might be an important indicators of upgrade issues that need to be resolve.
            Simply bypassing these error messages could result in more serious issues down the line, and could potentially lead to unstable or even unusable.
        </FontsParagraph>

        <FontsClosing>
            To be a great developer is to read documentation.
            Even though documentation is not our forte but it's very important as this is the only communication medium that have solid and clear instructions between developer.
            Or can use Laravel Shift to automate upgrade process.
        </FontsClosing>
    </article>
</template>