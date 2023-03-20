<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Icon from "$lib/components/Icon.svelte";

	type IconConfiguration = {
		key: string,
		link: string
	};

	let iconObjects: IconConfiguration[] = [
			{
				key: "linkedin",
		link: ""
	},
		{
			key: "github",
			link: ""
		},{
		key: "dribbble",
			link: ""
		}, {
			key: "500px",
			link: ""
		}];
</script>

<svelte:head>
	<title>Ivan Melnikov</title>
</svelte:head>

<section>
	<Header headingText="Ivan Melnikov" />
	<hr class="border border-slate-700 opacity-50 my-5" />
	<article class="flex justify-center items-center space-x-6">
		{#each iconObjects as currentIcon}
			<a href="{currentIcon.link}">
				<Icon iconKey="{currentIcon.key}" />
			</a>
		{/each}
	</article>
<!--	<a href="#">Resume</a>-->
</section>