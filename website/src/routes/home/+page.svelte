<script lang="ts">
    import ContactInfo from "$lib/components/contact-info/contact-info.svelte";
    import Skills from "$lib/components/skills/skills.svelte";
    import Projects from "$lib/components/projects/projects.svelte";
    import AboutMe from "$lib/components/about-me.svelte";
</script>

<head>
    <title>Daniel Kalstad - Home</title>
</head>
<div id="HomePageContainer">
    <h1 class="Headline">Personal Portfolio</h1>

    <ContactInfo />

    <AboutMe />

    <Projects />

    <Skills />
</div>
