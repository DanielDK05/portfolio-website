<script lang="ts">
    import ContactInfoComponent from "$lib/components/contact-info/contact-info-button.svelte";
    import contactInfoList from "$lib/assets/contactInfo.json";
    import { getContactInfoFromJSON } from "$lib/model/contactInfo";
</script>

<div id="ContactInfoContainer">
    <h2>Contact information</h2>
    <p id="ContactInfoSubHeader">(Click to copy/redirect to URL)</p>
    <ul>
        {#each contactInfoList as contactInfo}
            <li>
                <ContactInfoComponent
                    contactInfo={getContactInfoFromJSON(
                        JSON.stringify(contactInfo)
                    )}
                />
            </li>
        {/each}
    </ul>
</div>

<style>
    h2 {
        margin: auto;
        padding: 1rem;
        margin-bottom: 4rem;
        font-size: 2rem;
        width: fit-content;
        border-bottom: solid #ffffff;
    }

    #ContactInfoContainer {
        margin: auto;
        margin-top: 8rem;
        margin-bottom: 8rem;
        width: 90%;
        text-align: center;
    }

    #ContactInfoContainer h2 {
        margin-bottom: 0;
    }

    #ContactInfoContainer ul {
        padding: 0;
        padding-top: 2rem;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        margin: auto;
    }

    #ContactInfoSubHeader {
        color: #ffffff;
        opacity: 0.75;
    }
</style>
