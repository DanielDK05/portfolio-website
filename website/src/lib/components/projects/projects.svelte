<script lang="ts">
    import ProjectCard from "./project-card.svelte";
    import projectsList from "$lib/assets/projectsList.json";
</script>

<div class="Projects">
    <h2>Some of my projects:</h2>
    <ul class="ProjectCards">
        {#each projectsList as project}
            <li><ProjectCard {project} /></li>
        {/each}
    </ul>
</div>

<style>
    .Projects {
        margin: auto;
        margin-top: 8rem;
        margin-bottom: 8rem;
        width: 90%;
        text-align: center;
    }

    .Projects h2 {
        margin: auto;
        padding: 1rem;
        margin-bottom: 4rem;
        font-size: 2rem;
        width: fit-content;
        border-bottom: solid #ffffff;
    }

    .ProjectCards {
        width: 100%;
        margin: auto;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;

        list-style: none;
        padding: 0;
    }
</style>
