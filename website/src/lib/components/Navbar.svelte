<script lang="ts">
    import { page } from "$app/stores";

    $: curPageOpen = "/" + $page.url.pathname.split("/").filter(Boolean).pop();

    let routes = [
        { link: "/home", text: "Home" },
        { link: "/journey", text: "My Journey" },
    ];
</script>

<div id="Navbar">
    <h1 class="Headline">
        Daniel Kalstad <span class="HeadlineSubtext"
            >- With a passion for code</span
        >
    </h1>
    <ul id="NavbarRoutes">
        {#each routes as route}
            <li>
                <a
                    href={route.link}
                    class:CurrentPage={curPageOpen == route.link}
                    >{route.text}</a
                >
            </li>
        {/each}
    </ul>
</div>

<style>
    .Headline {
        font-size: 3rem;
        margin: 1.25rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: bolder;
        letter-spacing: 0.4rem;
    }

    .HeadlineSubtext {
        font-size: 1.5rem;
        color: #d4d4d4;
        letter-spacing: 0;
        margin-left: 3rem;
        font-style: italic;
        font-weight: bold;
    }

    #Navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 2em;
    }

    #NavbarRoutes {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        padding-left: 2rem;
        padding-right: 2rem;
        list-style: none;
    }

    #NavbarRoutes a {
        text-decoration: none;
        color: #ffffff;
        font-size: 1.5rem;
        text-align: center;
        transition: 0.2s color;
    }

    #NavbarRoutes a:hover {
        color: #d8d8d8;
    }

    #NavbarRoutes a.CurrentPage {
        color: #c4c4c4;
        font-weight: bold;
    }
</style>
