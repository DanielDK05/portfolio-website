<script lang="ts">
    export let text: String;
</script>

<div>
    <span>
        {text}
    </span>
</div>

<style>
    div {
        width: 100%;
        height: 1rem;
        border-bottom: 1px solid #ffffff;
        text-align: center;
    }

    span {
        font-size: 1.5rem;
        background-color: #272643;
        padding: 0 1.5rem;
        font-style: italic;
        quotes: "“" "”";
    }

    span::before {
        content: open-quote;
    }

    span::after {
        content: close-quote;
    }
</style>
