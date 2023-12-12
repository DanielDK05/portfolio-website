<script lang="ts">
    import type { Skill } from "$lib/model/skill";

    export let skill: Skill;
</script>

<div class="SkillCardContainer">
    <h2>{skill.title}</h2>
    <h3>{skill.category}</h3>
    <div class="DescriptionContainer">
        <h3><b>Experience:</b> {skill.years}</h3>
        <h3><b>Last used:</b> {skill.lastUsed}</h3>
        <p>{skill.description}</p>
    </div>
</div>

<style>
    .SkillCardContainer {
        position: relative;

        background-color: #ffffff;
        color: rgba(15, 15, 26, 1);
        padding: 2rem;
        width: min(50vw, 15rem);
        height: min(40vh, 25rem);
        border-top-right-radius: 1.5rem;
        border-bottom-left-radius: 1.5rem;
        border-top-left-radius: 4.5rem;
        border-bottom-right-radius: 4.5rem;
        transition:
            1s border-radius,
            1s opacity,
            1s box-shadow;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
    }

    .SkillCardContainer:hover {
        border-radius: 0.5rem;
        transition-duration: 250ms;
        transition-timing-function: ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.4) 0 0 30px;
    }

    .SkillCardContainer::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(#ffffff 50%, #979797);
        opacity: 0;
        transition: 1s opacity;
    }

    .SkillCardContainer:hover::before {
        opacity: 1;
    }

    .SkillCardContainer h2,
    .SkillCardContainer h3 {
        transition:
            1s opacity,
            1s filter;
    }

    .SkillCardContainer h2 {
        font-size: clamp(0.8rem, 2vw, 1.2rem);
    }

    .SkillCardContainer h3 {
        font-size: 0.8rem;
        color: rgba(15, 15, 26, 0.5);
        transition-delay: 750ms;
    }

    .SkillCardContainer:hover > h2 {
        filter: blur(0.25rem);
        opacity: 0.5;
        transition-duration: 250ms;
        transition-timing-function: ease-in-out;
    }

    .SkillCardContainer:hover > h3 {
        opacity: 0;
        transition-duration: 250ms;
        transition-timing-function: ease-in-out;
        transition-delay: 0ms;
    }

    .DescriptionContainer {
        position: absolute;
        bottom: -50%;
        opacity: 0;
        transition:
            1s opacity,
            1s bottom;
        left: 0;
        padding: 2rem;
        transition-delay: 100ms;
        transition-timing-function: ease-in-out;
    }

    .DescriptionContainer > p {
        font-size: clamp(0.7rem, 1vw, 1rem);
    }

    .DescriptionContainer > h3 {
        font-size: clamp(0.8rem, 1vw, 1rem);
    }

    .SkillCardContainer:hover > .DescriptionContainer {
        opacity: 1;
        bottom: 0;
        transition-duration: 750ms;
    }
</style>
