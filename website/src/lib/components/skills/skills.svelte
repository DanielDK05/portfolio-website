<script lang="ts">
    import skillsList from "$lib/assets/skillsList.json";
    import SkillCard from "./skill-card.svelte";
</script>

<div id="SkillsContainer">
    <h2 class="SubHeadline">Some of my skills:</h2>
    <p class="SubHeader">(Mobile) tap to read more</p>
    <ul>
        {#each skillsList as skill}
            <li>
                <SkillCard {skill} />
            </li>
        {/each}
    </ul>
</div>

<style>
    #SkillsContainer {
        margin: auto;
        margin-top: 8rem;
        margin-bottom: 8rem;
        width: 70%;
        text-align: center;
    }

    #SkillsContainer ul {
        padding: 0;
        padding-top: 2rem;
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex-shrink: 0;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        margin: auto;
    }

    .SubHeader {
        color: #ffffff;
        opacity: 0.75;
    }

    /* #SkillsContainer ul > li:nth-child(4) {
        flex-basis: 100%;
    } */
</style>
