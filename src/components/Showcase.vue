<template>
	<ul>
		<li><a href="https://www.linkedin.com/in/imelnikov" uk-icon="icon: linkedin; ratio: 2"></a></li>
		<li><a href="https://www.500px.com/ivanempire" uk-icon="icon: 500px; ratio: 2"></a></li>
		<li><a :href="resumeLink" uk-icon="icon: file-pdf; ratio: 2"></a></li>
	</ul>
</template>

<script>
	import resume from "../assets/imelnikov - resume.pdf";
	
	export default {
		data() {
			return {
				resumeLink: resume
			}
		}
	}
</script>

<style scoped>
	li {
		list-style: none;
		display: inline-block;
		margin:0 10px;
	}
	a {
		color:white;
		text-decoration: none;
	}
	a:hover {
		color:white;
	}
</style>