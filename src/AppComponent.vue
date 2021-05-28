<template>
  <Viewport v-bind:style="{backgroundColor: bgColor}">
    <Heading text="Ivan Melnikov" />
    <Paragraph />
    <Showcase />
  </Viewport>
</template>

<script>

  import { ref } from "vue";
  import Heading from "./components/Heading.vue";
  import Showcase from "./components/Showcase.vue";
  import Viewport from "./components/Viewport.vue";
  import Paragraph from "./components/Paragraph.vue";

  export default {
    name: "AppComponent",
    components: {
      Heading, Showcase, Viewport, Paragraph
    },
    setup(props) {
      const bgColor = ref("#000000");

      setInterval(() => {
        let currentTime = new Date();
        bgColor.value = "#" + ("0" + currentTime.getHours()).slice(-2) + ("0" + currentTime.getMinutes()).slice(-2) + ("0" + currentTime.getSeconds()).slice(-2);
      }, 1000);

      return { bgColor }
    }
  }

</script>