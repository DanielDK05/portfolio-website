<script lang="ts">
    export let textCopied: string;
</script>

<div class="alert">
    <p>{textCopied} copied to clipboard!</p>
</div>

<style>
    .alert {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.4); /* Red */
        color: white;
        font-size: 1.2rem;
        padding: 30px;
        border-radius: 4px;
        bottom: 10rem;
        left: 50%;
        transform: translate(-50%, 0);
        cursor: default;
        animation-name: fade_in;
        animation-duration: 0.5s;
    }

    @keyframes fade_in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
