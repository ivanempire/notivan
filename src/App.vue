<template>
	<transition name="fade">
		<Viewport>
			<h1>Ivan Melnikov</h1>
			{{currentTagline}}
		</Viewport>
	</transition>
</template>

<script>
	import Viewport from "./components/Viewport.vue";

	export default {
		components: {
			Viewport
		},
		created: function() {
			setInterval(() => {
				console.log("Set interval");
				let currentTime = new Date();
				this.color = "#" + ("0" + currentTime.getHours()).slice(-2) + ("0" + currentTime.getMinutes()).slice(-2) + ("0" + currentTime.getSeconds()).slice(-2);
			}, 1000);
		},
		data: () => {
			return {
				color: "#000000",
				taglines: [
				"I do the thing with the keyboard and the typing and the git reset --hard HEAD",
				"Less than useless",
				"Everyone's favorite headache",
				"I wear several hats",
				"Probably having yet another cup of coffee",
				"How does Teflon stick to the pan?",
				"Programming the next thing you will never use",
				"Life may have closed doors, which is why I always carry a battering ram",
				"Pick your battles. I mean I still lose all of mine, but I pick them...",
				"Maximum effort"]
			}
		},
		computed: {
			currentTagline: function() {
				return this.taglines[parseInt(Math.random() * this.taglines.length)];
			},
			backgroundColor: function() {
				
			}
		}
	}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}
h1 {
	font-weight: bold;
	letter-spacing: 20px;
	text-transform: uppercase;
	font-family: "Cera Basic", sans-serif !important;
}
</style>