<template>
  <div class="custom-container">
    <div
      :class="left ? 'image-custom-container-left' : 'image-custom-container'"
    >
      <img class="card-image" :src="require(`@/assets/${image}`)" alt="image" />
    </div>
    <div :class="left ? 'text-custom-container-left' : 'text-custom-container'">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCard",
  props: {
    title: String,
    text: String,
    image: String,
    left: {
      type: Boolean,
      default: true,
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

* {
  box-sizing: border-box;
}
.image-custom-container {
  width: 25%;
  float: right;
}
.text-custom-container {
  padding: 1em;
  text-align: left;
  width: 75%;
  float: right;
}

.image-custom-container-left {
  width: 25%;
  float: left;
}
.text-custom-container-left {
  padding: 1em;
  text-align: left;
  width: 75%;
  float: left;
}

img {
  max-height: 200px;
  max-width: 300px;
}
h3 {
  background: none;
  color: white;
  font-size: 1.3em;
}
p {
  color: #acacac;
  font-size: 1.1em;
}
.custom-container {
  display: inline-table;
  box-shadow: 0px 0.4em 1em 0.6em #0f062c;
}

@media screen and (max-width: 950px) {
  .custom-container {
    text-align: center;
  }
  .image-custom-container {
    display: none;
  }
  .text-custom-container {
    text-align: left;
    width: 100%;
    float: right;
  }
  .image-custom-container-left {
    display: none;
  }
  .text-custom-container-left {
    text-align: left;
    width: 100%;
    float: left;
  }
  img {
    display: none;
  }
  p {
    font-size: 0.6em;
  }
  h3 {
    font-size: 0.7em;
  }
}

@media screen and (min-width: 3000px) {
  p {
    font-size: 1.6em;
  }
  h3 {
    font-size: 2em;
  }
}
</style>
