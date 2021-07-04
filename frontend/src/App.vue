<template>
  <div>
    <div id="nav" class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/commands">Commands</router-link> |
      <router-link to="/about">About</router-link> |

      <a
        href="https://discord.com/oauth2/authorize?client_id=670266777015549980&scope=bot&permissions=204532802"
      >
        Add The Bot
      </a>
      |
      <a href="https://discord.com/invite/jXQvBj4tup">Support Server</a>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

:root {
  --font-primary: #5ac9da;
  --font-secondary: #7eeeff;
  --nav-primary: #4e9665;
  --nav-secondary: #69c686;
  --background-primary: #100e17;
  --background-secondary: #2b263d;
}

* {
  left: 0;
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 0.4rem;
}
::-webkit-scrollbar-track {
  background: var(--background-secondary);
}
::-webkit-scrollbar-thumb {
  background: #3e2b82;
}
::-webkit-scrollbar-thumb:hover {
  background: #615196;
}
body {
  background-color: var(--background-primary);
  background-image: url(assets/cat_background.svg);
}
.heading {
  color: var(--font-secondary);
  font-size: 2em;
}
#app {
  font-family: "Poppins", sans-serif;
  font-size: 1.3em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--font-primary);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: var(--nav-primary);
  transition: color 0.5s;
}

#nav a:hover {
  color: var(--nav-secondary);
}

#nav a.router-link-exact-active {
  color: var(--nav-secondary);
}

@media screen and (max-width: 883px) {
  body {
    background-color: var(--background-primary);
    background-image: none;
  }
  #nav {
    font-size: 0.8em;
    padding: 20px;
    padding-bottom: 10px;
  }
}
</style>
