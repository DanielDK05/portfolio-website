<!-- <script lang="ts">
    import { page } from "$app/stores";

    $: curPageOpen = "/" + $page.url.pathname.split("/").filter(Boolean).pop();

    let routes = [
        { link: "/home", text: "Home" },
        { link: "/projects", text: "My Projects" },
    ];
</script> -->

<div id="Navbar">
    <div id="NavbarContent">
        <h1 class="Headline">Daniel Kalstad</h1>
        <span class="Quote">- With a passion for code</span>

        <!-- Dont want routes just yet... but this is the code for it. -->
        <!-- <ul id="NavbarRoutes">
        {#each routes as route}
            <li>
                <a
                    href={route.link}
                    class:CurrentPage={curPageOpen == route.link}
                    >{route.text}</a
                >
            </li>
        {/each}
    </ul> -->
    </div>
    <hr />
</div>

<style>
    #Navbar {
        width: 100%;
        height: max(10vh, 5rem);
    }

    #NavbarContent {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: inherit;
    }

    @media (max-width: 1200px) {
        #Navbar {
            height: fit-content;
        }

        #NavbarContent {
            flex-direction: column;
        }
    }

    .Headline {
        font-size: clamp(2rem, 4vh, 4rem);
        margin: 1.25rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: bolder;
        letter-spacing: 0.4rem;
    }

    .Quote {
        font-size: clamp(1.2rem, 2vh, 2rem);
        padding: 2rem;
        color: #d4d4d4;
        font-style: italic;
        font-weight: bold;
    }

    /*  Dont want routes just yet... but this is the style for them. 
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
    } */
</style>
