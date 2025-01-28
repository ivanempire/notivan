<script lang="ts">
	import Header from "$lib/components/Header.svelte";

	import {Github, Dribbble, Linkedin, Camera, type Icon as IconType} from "lucide-svelte";

	type LinkConfiguration = {
		icon: typeof IconType;
		link: string
	};

	let linkItems: LinkConfiguration[] = [
		{
			icon: Linkedin,
			link: "https://www.linkedin.com/in/imelnikov/"
		},
		{
			icon: Github,
			link: "https://github.com/ivanempire"
		},
		{
			icon: Dribbble,
			link: "https://dribbble.com/ivanempire"
		},
		{
			icon: Camera,
			link: "https://glass.photo/ivanempire"
		}];
</script>

<svelte:head>
	<title>Ivan Melnikov</title>
</svelte:head>

<section>
	<Header headingText="Ivan Melnikov" />
	<hr class="hidden lg:block border border-slate-700 opacity-50 my-5" />
	<article class="flex justify-center items-center space-x-6 mb-5">
		{#each linkItems as linkItem}
			{@const Icon = linkItem.icon}
			<a href={linkItem.link}>
				<Icon color="rgb(51 65 85)" size={30} />
			</a>
		{/each}
	</article>
	<article class="flex justify-center items-center">
		<a href="/imelnikov-resume.pdf">r&#233;sum&#233;</a>
	</article>
</section>