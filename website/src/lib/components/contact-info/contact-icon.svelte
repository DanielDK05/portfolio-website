<script lang="ts">
    import DefaultSvg from "$lib/assets/contactinfo_icons/default.svg";
    import MailSvg from "$lib/assets/contactinfo_icons/mail.svg";
    import GithubSvg from "$lib/assets/contactinfo_icons/github.svg";
    import LinkedinSvg from "$lib/assets/contactinfo_icons/linkedin.svg";

    export let svgName: string;

    let Svg = DefaultSvg;
    switch (svgName) {
        case "mail": {
            Svg = MailSvg;
            break;
        }
        case "github": {
            Svg = GithubSvg;
            break;
        }
        case "linkedin": {
            Svg = LinkedinSvg;
            break;
        }
    }
</script>

<img src={Svg} alt={`${svgName} icon SVG`} class="SvgIcon" />

<style>
    /* The filters are a hacky way of recoloring the SVG */
    :global(.SvgIcon) {
        width: 12rem;
        transition: 0.2s filter ease-in-out;
        filter: invert(99%) sepia(95%) saturate(23%) hue-rotate(279deg)
            brightness(104%) contrast(100%); /* #ffffff */
    }
    :global(.SvgIcon):hover {
        filter: invert(91%) sepia(0%) saturate(0%) hue-rotate(174deg)
            brightness(98%) contrast(83%); /* #d2d2d2 */
    }
    :global(.SvgIcon):active {
        filter: invert(88%) sepia(0%) saturate(0%) hue-rotate(219deg)
            brightness(94%) contrast(81%) /* #c3c3c3 */;
    }
</style>
