<script lang="ts">
    import ic_500px from "$lib/icons/500px.svelte";
    import ic_github from "$lib/icons/github.svelte";
    import ic_linkedin from "$lib/icons/linkedin.svelte";
    import ic_dribbble from "$lib/icons/dribbble.svelte";

    export let iconKey = "";

    let iconComponent = undefined;
    switch(iconKey) {
        case "github":
            iconComponent = ic_github;
            break;
        case "500px":
            iconComponent = ic_500px;
            break;
        case "linkedin":
            iconComponent = ic_linkedin;
            break;
        case "dribbble":
            iconComponent = ic_dribbble;
            break;
    }
</script>
<svelte:component this={iconComponent} />