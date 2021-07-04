<template>
  <div class="container">
    <h2>{{ title }}</h2>

    <table>
      <tr class="keys">
        <th :key="key.id" v-for="key in keys">{{ key }}</th>
      </tr>
      <tr class="row" :key="elem.id" v-for="elem in elements || []">
        <td class="cmd-pos">{{ elem.position }}</td>
        <td class="cmd-name">{{ elem.username }}</td>
        <td class="cmd-lvl">{{ elem.level }}</td>
        <td class="cmd-xp">{{ elem.xp }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "GuildTable",
  props: {
    title: String,
    keys: Array,
    elements: Array,
  },
};
</script>

<style scoped>
:root {
  --font-primary: #5ac9da;
  --font-secondary: #7eeeff;
  --nav-primary: #4e9665;
  --nav-secondary: #69c686;
  --background-primary: #100e17;
  --background-secondary: #2b263d;
}

h2 {
  color: #8975d1;
}

.keys {
  font-weight: bolder;
  color: hsla(0, 0%, 55%, 0.959);
  font-size: 1.1em;
}
.row {
  font-weight: lighter;
  color: hsla(0, 0%, 53%, 0.699);
  font-size: 0.8em;
}
.container {
  margin: 40px;
}
table {
  text-align: center;
  width: 100%;
  border-collapse: collapse;
}
tr {
  height: 40px;
}

table,
th,
td {
  border: 1px var(--background-secondary) solid;
}
th,
td {
  padding: 0.5em;
}
.cmd-pos {
  width: 2%;
}
.cmd-lvl {
  width: 5%;
}
.cmd-xp {
  width: 10%;
}
.cmp-name {
  width: 100%;
}
@media screen and (max-width: 880px) {
  h2 {
    font-size: 0.9em;
  }
  table {
    font-size: 0.6em;
  }
  table {
    display: inline-flexbox;
    text-align: center;
    border-collapse: collapse;
    width: auto;
  }
}
</style>
