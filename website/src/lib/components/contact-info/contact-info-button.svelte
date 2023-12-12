<script lang="ts">
    import {
        ContactClickEvent,
        type ContactInfo,
    } from "$lib/model/contactInfo";
    import ContactIconComponent from "./contact-icon.svelte";
    import CopiedAlertComponent from "$lib/components/copied-alert.svelte";

    export let contactInfo: ContactInfo;

    let showCopiedAlert = false;
    function handleContactButtonClick() {
        // Copy data to system clipboard
        let text = contactInfo.data;
        navigator.clipboard.writeText(text);

        showCopiedAlert = true;
        setTimeout(() => {
            showCopiedAlert = false;
        }, 2000);
    }
</script>

<div class="ContactInfoButtonContainer">
    {#if contactInfo.clickEvent == ContactClickEvent.Url}
        <a href={contactInfo.data} title={contactInfo.data}
            ><ContactIconComponent svgName={contactInfo.svgName} /></a
        >
    {:else}
        <button on:click={handleContactButtonClick} title={contactInfo.data}>
            <ContactIconComponent svgName={contactInfo.svgName} />
        </button>
        {#if showCopiedAlert}
            <CopiedAlertComponent textCopied={contactInfo.data} />
        {/if}
    {/if}
    <h3 class={contactInfo.clickEvent == ContactClickEvent.Url ? "isUrl" : ""}>
        {contactInfo.title}
    </h3>
</div>

<style>
    .ContactInfoButtonContainer {
        cursor: pointer;
        transition: 0.2s color ease-in-out;
    }

    .ContactInfoButtonContainer:hover {
        color: #d2d2d2;
    }

    .ContactInfoButtonContainer:active {
        cursor: none;
        color: #c3c3c3;
    }

    .isUrl {
        text-decoration: underline;
    }

    button,
    a {
        all: unset;
    }
</style>
