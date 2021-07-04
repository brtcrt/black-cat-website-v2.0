<template>
  <div class="textwithimage">
    <div class="cards">
      <div class="card">
        <h2 class="card-title">Fun</h2>
        <img src="./../assets/cat_fun.svg" alt="" />
        <p class="card-desc">
          Well, what can I say? This thing's got everything you need to have
          fun. You like chess? We got it. You want something simpler? Why not
          try searching for some random gifs, or looking at some cute puppy
          photos.
        </p>
      </div>
      <div class="card">
        <h2 class="card-title">Fast</h2>
        <img src="./../assets/cat_fast.svg" alt="" />
        <p class="card-desc">
          Thanks to state-of-the-art technology, Bläck Cät responds to every
          command in an instant, making sure everyone has the most enjoyable
          time using it.
        </p>
      </div>
      <div class="card">
        <h2 class="card-title">Facile</h2>
        <img src="./../assets/cat.svg" alt="" />
        <p class="card-desc">
          With its simplistic design, Bläck Cät is really easy and intuitive to
          use! With descriptive command names and a help command that explains
          how to use every command in detail, using Bläck Cät is an absolute
          breeze.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextWithImage",
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

.cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  margin: 40px;
  position: relative;
  width: 17em;
  max-height: 270px;
  box-shadow: 0 40px 60px -6px black;
}

.card:hover {
  animation-name: shake;
  animation-duration: 0.2s;
}

.card-title {
  display: block;
  text-align: center;
  color: #fff;
  background-color: var(--background-secondary);
  padding: 2%;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}

.card img {
  width: 100%;
  height: 50%;
  object-fit: fill;
  display: block;
  position: relative;
}

.card-desc {
  display: block;
  font-size: 0.9em;
  position: absolute;
  height: 0;
  top: 0;
  opacity: 0;
  padding: 18px 8%;
  background-color: var(--background-secondary);
  overflow-y: scroll;
  transition: 0.8s ease;
}

.card:hover .card-desc {
  opacity: 1;
  height: 100%;
}

h1 {
  font-size: 2.8rem;
  color: #fff;
  margin: 40px 0 20px 0;
  text-align: center;
}
@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
