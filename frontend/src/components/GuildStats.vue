<template>
  <div class="custom-container">
    <ul>
      <li>ID: {{ guild.id }}</li>
      <li>Acronym: {{ guild.nameAcronym }}</li>
      <li>Member Count: {{ guild.memberCount }}</li>
      <li>Channel Count: {{ chan }}</li>
      <li>Emoji Count: {{ emj }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GuildStats",
  props: {
    guild: Object,
    chan: Number,
    emj: Number,
  },
};
</script>

<style scoped>
.custom-container {
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin-bottom: 1.5em;
  margin-top: 1.5em;
}
ul {
  display: inline-grid;
  grid-auto-flow: row;
  grid-auto-flow: column;
  grid-gap: 2em;
  list-style: none;
}

@media screen and (max-width: 1110px) {
  ul {
    display: inline-grid;
    grid-auto-flow: row;
    grid-gap: 1em;
    justify-items: center;
    list-style: none;
    font-size: 0.8em;
  }

  .footer {
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
}

li {
  color: ghostwhite;
  text-decoration: none;
}
</style>
