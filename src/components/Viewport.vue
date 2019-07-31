<template>
	<section class="uk-width-1-1 uk-height-viewport uk-flex uk-flex-middle uk-flex-center uk-flex-column">
		<slot />
	</section>
</template>

<script>
	export default {
	}
</script>

<style scoped>
section {
	transition: background-color 0.7s linear;
}
</style>