<template>
	<article class="uk-width-1-1">
		<h1>{{text}}</h1>
	</article>
</template>

<script>
export default {
	props: ["text"]
}
</script>

<style scoped>
article {
	padding:0 10px;
}
h1 {
	color: white;
	font-size: 3.3em;
	font-weight: bold;
	text-align: center;
	margin: 0 0 10px 0;
	letter-spacing: 10px;
	text-transform: uppercase;
	font-family: "Cera Basic", sans-serif !important;
}
</style>