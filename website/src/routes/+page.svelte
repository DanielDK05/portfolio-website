<script lang="ts">
    import { browser } from "$app/environment";
    import { base } from "$app/paths";

    if (browser) {
        window.location.href = `${base}/home`;
    }
</script>

<h1>Redirecting you...</h1>
