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
			link: "https://www.linkedin.com/in/imelnikov/"
		},
		{
			key: "github",
			link: "https://github.com/ivanempire"
		},
		{
			key: "dribbble",
			link: "https://dribbble.com/ivanempire"
		},
		{
			key: "500px",
			link: "https://500px.com/p/ivanempire?view=photos"
		}];
</script>

<svelte:head>
	<title>Ivan Melnikov</title>
</svelte:head>

<section>
	<Header headingText="Ivan Melnikov" />
	<hr class="border border-slate-700 opacity-50 my-5" />
	<article class="flex justify-center items-center space-x-6 mb-5">
		{#each iconObjects as currentIcon}
			<a href="{currentIcon.link}">
				<Icon iconKey="{currentIcon.key}" />
			</a>
		{/each}
	</article>
	<article class="flex justify-center items-center">
		<a href="/imelnikov-resume.pdf">Resume</a>
	</article>
</section>