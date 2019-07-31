<template>
	<Viewport v-bind:style="{backgroundColor: color}">
		<Heading text="Ivan Melnikov" />
		<Paragraph :text=currentTagline />
		<Showcase />
	</Viewport>
</template>

<script>
	import Heading from "./components/Heading.vue";
	import Showcase from "./components/Showcase.vue";
	import Viewport from "./components/Viewport.vue";
	import Paragraph from "./components/Paragraph.vue";

	export default {
		components: {
			Viewport, Paragraph, Heading, Showcase
		},
		created: function() {
			var self = this;
			setInterval(function () {
				let currentTime = new Date();
				self.color = "#" + ("0" + currentTime.getHours()).slice(-2) + ("0" + currentTime.getMinutes()).slice(-2) + ("0" + currentTime.getSeconds()).slice(-2);
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
				"Trying to figure out how to find anything in JIRA",
				"Pick your battles. I mean I still lose all of mine, but at least I pick them...",
				"Maximum effort"]
			}
		},
		computed: {
			currentTagline: function() {
				return this.taglines[parseInt(Math.random() * this.taglines.length)];
			}
		}
	}
</script>