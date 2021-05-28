<template>
  <p class="uk-width-1-1">{{currentTagline}}</p>
</template>

<script>

export default {
  data() {
    return {
      tagLines: [
        "I do the thing with the keyboard and the typing and the git reset --hard HEAD",
        "Less than useless",
        "Everyone's favorite headache",
        "I wear several hats",
        "Probably having yet another cup of coffee",
        "How does Teflon stick to the pan?",
        "Stay tuned for my next abandoned side project",
        "Programming the next thing you will never use",
        "Life may have closed doors, which is why I always carry a battering ram",
        "Trying to figure out how to find anything in JIRA",
        "Pick your battles. I mean I still lose all of mine, but at least I pick them...",
        "Maximum effort"
      ]
    }
  },
  computed: {
    currentTagline: function() {
      return this.tagLines[parseInt(Math.random() * this.tagLines.length)];
    }
  }
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