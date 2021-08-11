<template>
  <div class="custom-container">
    <h2>{{ title }}</h2>

    <table>
      <tr class="keys">
        <th :key="key.id" v-for="key in keys">{{ key }}</th>
      </tr>
      <tr class="custom-row" :key="elem.id" v-for="elem in elements">
        <td class="cmd-name">{{ elem.name }}</td>
        <td class="cmd-desc">{{ elem.description }}</td>
        <td class="cmd-usage">{{ elem.usage }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    title: String,
    keys: Array,
    elements: Array,
  },
};
</script>

<style scoped>
* {
  left: 0;
  margin: 0;
  padding: 0;
}

:root {
  --font-primary: #5ac9da;
  --font-secondary: #7eeeff;
  --nav-primary: #4e9665;
  --nav-secondary: #69c686;
  --background-primary: #100e17;
  --background-secondary: #2b263d;
}

.custom-container {
  text-align: center;
  margin: 2em;
}

h2 {
  color: #8975d1;
  display: inline-flexbox;
}

.keys {
  font-weight: bolder;
  color: hsla(0, 0%, 55%, 0.959);
  font-size: 1.1em;
}
.custom-row {
  font-weight: lighter;
  color: hsla(0, 0%, 53%, 0.699);
  font-size: 0.8em;
}
table {
  text-align: center;
  width: 100%;
  border-collapse: collapse;
}
tr {
  height: 60px;
}

table,
th,
td {
  border: 1px var(--background-secondary) solid;
}

.cmd-name {
  width: 10%;
}
.cmd-description {
  width: max-content;
}
.cmd-usage {
  width: 20%;
}

@media screen and (max-width: 880px) {
  .custom-container {
    margin: 0.5em;
  }
  h2 {
    font-size: 0.9em;
  }
  table {
    font-size: 0.6em;
  }
  tr {
    height: 35px;
  }
  table {
    text-align: center;
    border-collapse: collapse;
    width: auto;
  }
}
</style>
