<script lang="ts">
    let skillsList = [{ title: "Rustlang" }];
</script>

<div id="SkillsContainer">
    <h2>My skills in software</h2>
    <ul>
        <!-- {#each contactInfoList as contactInfo}
            <li>
                <ContactInfoComponent
                    contactInfo={getContactInfoFromJSON(
                        JSON.stringify(contactInfo)
                    )}
                />
            </li>
        {/each} -->
    </ul>
</div>

<style>
    h2 {
        font-size: 2rem;
    }

    #SkillsContainer {
        margin: auto;
        margin-top: 8rem;
        margin-bottom: 8rem;
        width: 90%;
        text-align: center;
    }

    #SkillsContainer h2 {
        margin-bottom: 0;
    }

    #SkillsContainer ul {
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
</style>
