<template>
	<p class="uk-width-1-1">{{text}}</p>
</template>

<script>
	export default {
		props: ["text"]
	}
</script>

<style scoped>
	p {
		margin:0;
		color: white;
		font-size: 1.1em;
		text-align: center;
		font-family: "Cera Basic", sans-serif !important;
	}
</style>