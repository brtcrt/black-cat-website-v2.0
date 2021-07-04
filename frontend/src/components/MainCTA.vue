<template>
  <div class="container">
    <p class="subhead">Fun, Fast &amp; Facile</p>
    <h1 class="heading">Bläck Cät</h1>
    <div class="stats">
      <p>{{ user }} Users &amp; {{ guild }} Servers</p>
    </div>
    <div class="hero-cta">
      <a
        href="https://discord.com/oauth2/authorize?client_id=670266777015549980&scope=bot&permissions=204532802"
        class="primary-cta"
      >
        Add the Bot
      </a>
      <a href="#" class="primary-cta"> Join the Server </a>

      <div class="features">
        <h2 class="subhead">Features</h2>
        <h4s class="subsubhead">The Three F's</h4s>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCTA",
  props: {
    guild: {
      type: String,
      default: "A lot of",
    },
    user: {
      type: String,
      default: "A lot of",
    },
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
.container {
  text-align: center;
}
.stats {
  margin-top: 1em;
  margin-bottom: 2em;
  color: gray;
}
.heading {
  color: var(--font-secondary);
  font-size: 2.8em;
  letter-spacing: 0.15em;
}

.features {
  align-content: center;
  justify-content: center;
  margin-bottom: 2em;
  margin-top: 3em;
}
.subsubhead {
  text-transform: uppercase;
  font-weight: bold;
  color: gray;
  letter-spacing: 0.7em;
  font-size: 0.7em;
}

.subhead {
  text-transform: uppercase;
  font-weight: bold;
  color: gray;
  letter-spacing: 1.3em;
  font-size: 0.9em;
}
.subhead2 {
  text-transform: uppercase;
  font-weight: bold;
  color: gray;
  letter-spacing: 0.15em;
  margin-top: 2em;
  font-size: 0.9em;
}
.hero-cta {
  display: inline-flexbox;
  align-content: center;
  justify-content: center;
  text-align: center;
}
.primary-cta {
  text-align: center;
  color: var(--nav-primary);
  text-decoration: none;
  background: var(--background-secondary);
  padding: 0.5em 0.5em;
  border-radius: 4em;
  font-size: 1.3em;
  margin: 1em;
  display: inline-flexbox;
  transition: color 0.5s;
}
a:hover {
  color: var(--nav-secondary);
}

@media screen and (max-width: 880px) {
  .features {
    margin-top: 2em;
    margin-bottom: 1em;
  }
  .subhead2 {
    font-size: 0.7em;
  }
  .subsubhead {
    letter-spacing: 0.3em;
  }
  .subhead {
    letter-spacing: 0.55em;
  }
  .primary-cta {
    text-align: center;
    background: none;
    display: inline-block;
    font-size: 0.9em;
    border-radius: 0;
    margin: 0%;
  }
  .heading {
    font-size: 2.3em;
    letter-spacing: 0.05;
  }
}
</style>
