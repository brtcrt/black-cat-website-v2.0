<template>
  <ul>
    <li>ID: {{ guild.id }}</li>
    <li>Acronym: {{ guild.nameAcronym }}</li>
    <li>Member Count: {{ guild.memberCount }}</li>
    <li>Channel Count: {{ chan }}</li>
    <li>Emoji Count: {{ emj }}</li>
  </ul>
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
ul {
  list-style: none;
  color: gray;
}
</style>
