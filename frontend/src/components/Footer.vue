<template>
  <div :class="sticky ? 'footer-sticky' : 'footer'">
    <ul>
      <li>
        <a href="https://www.youtube.com/channel/UCA_M_1EqrrM8AL6LT5LbN7A"
          >YouTube</a
        >
      </li>
      <li><a href="https://github.com/brtcrt">Github</a></li>
      <li><a href="https://www.reddit.com/user/brtcrt">Reddit</a></li>
      <li><a href="https://discord.com/invite/jXQvBj4tup">Discord</a></li>
      <li><a href="https://twitter.com/brt_crt">Twitter</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    sticky: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin-bottom: 1em;
}
.footer-sticky {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin-bottom: 1em;
}
ul {
  display: inline-grid;
  grid-auto-flow: row;
  grid-auto-flow: column;
  grid-gap: 2em;
  list-style: none;
}

@media screen and (max-width: 880px) {
  ul {
    display: inline-grid;
    grid-auto-flow: row;
    grid-gap: 2em;
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
  .footer-sticky {
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
}

a {
  color: white;
  text-decoration: none;
  box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, 0.4);
}

a:hover {
  box-shadow: inset 0 -1.2em 0 hsla(0, 0%, 100%, 0.4);
}

li:last-child {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
</style>
