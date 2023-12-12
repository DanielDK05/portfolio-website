<script lang="ts">
    import skillsList from "$lib/assets/skillsList.json";
    import SkillCard from "./skill-card.svelte";
</script>

<div id="SkillsContainer">
    <h2>Some of my skills:</h2>
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

    #SkillsContainer h2 {
        margin: auto;
        padding: 1rem;
        margin-bottom: 4rem;
        font-size: 2rem;
        width: fit-content;
        border-bottom: solid #ffffff;
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

    /* #SkillsContainer ul > li:nth-child(4) {
        flex-basis: 100%;
    } */
</style>
