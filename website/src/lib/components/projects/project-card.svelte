<script lang="ts">
    export let project: Project;
</script>

<div
    class="ProjectCard"
    style:background-image={`url("public/projectImages/${project.imgPath}")`}
>
    <h2>{project.name}</h2>

    <div class="Concepts">
        <h3>Concepts Learned:</h3>
        <ul>
            {#each project.conceptsLearned as concept}
                <li>{concept}</li>
            {/each}
        </ul>
    </div>

    <span>
        <p>{project.description}</p>
        {#if project.url != null}
            <a href={project.url}>{project.url}</a>
        {/if}
    </span>
</div>

<style>
    .ProjectCard {
        /* background-color: #ffffff; */
        overflow: hidden;
        position: relative;
        background-size: 0 0; /* Image should not be drawn here */

        color: #ffffff;
        border: #ffffff solid 0.4rem;
        text-align: center;
        width: 30rem;
        height: 20rem;
        padding: 1.5rem;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 1fr;
    }

    .ProjectCard::before {
        content: ""; /* Important */
        z-index: -1; /* Important */
        position: absolute;
        width: inherit;
        height: inherit;
        padding: inherit;
        background-image: inherit;
        background-size: cover;
        filter: blur(0.4rem);
    }

    .ProjectCard > h2 {
        margin: 0;
        margin-bottom: 1rem;
        grid-column: 1 / span 2;
    }

    .ProjectCard > span {
        display: flex;
        flex-direction: column;
        grid-column: 2;
        grid-row: 2;
        justify-content: end;
        align-items: center;
    }

    .ProjectCard > span > p {
        margin: 0;
        margin-top: 1rem;
    }

    .ProjectCard > span > a {
        margin: 0;
        margin-top: 1rem;
        color: #ffffff;
    }
    .ProjectCard > span > a:hover {
        margin: 0;
        margin-top: 1rem;
        color: #bebebe;
    }

    .Concepts {
        grid-column: 1;
        grid-row: 2;
        text-align: left;
    }

    .Concepts > ul {
        list-style: square;
    }
</style>
