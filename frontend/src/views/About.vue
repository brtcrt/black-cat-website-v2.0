<template>
  <div class="about">
    <div class="about-container" :key="data.title" v-for="data in card_data">
      <AboutCard
        :left="data.left"
        :text="data.text"
        :title="data.title"
        :image="data.image"
      />
    </div>
    <Footer :sticky="false" />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import AboutCard from "../components/AboutCard.vue";
export default {
  name: "About",
  components: { Footer, AboutCard },
  data() {
    return {
      card_data: [
        {
          title: "About the Bot",
          text: "The aim with Bläck Cät was to make an all-in-one bot that could do everything. It needed to play music, have a leveling system, some minigames and anything that would make it fun and useful. So far, I think that Bläck Cät has most of the core functionality that it needs, however I'm always coming up with new command ideas on a regualar basis.",
          image: "cat.svg",
          left: true,
        },
        {
          title: "",
          text: "I started working on Bläck Cät about two years ago as a sort of fun project to have fun with my friends. I decided to write using with NodeJS even though I knew nothing about it so the start was a bit rough but eventually I got used to it and over time Bläck Cät became my main project.",
          image: "logo.svg",
          left: false,
        },
        {
          title: "About Me",
          text: "Hey! I'm brtcrt. I'm a Turkish student who likes anything code related. I started programming a little over 3 years ago. I started with HTML and moved on to Python, then C# and eventually landed on NodeJS. At first I didn't really care too much about programming, but one day I thought to myself, 'Damn, I think it'd be really cool to code a discord bot.' And so I did just that. ",
          image: "me.jpeg",
          left: true,
        },
        {
          title: "",
          text: "After some time working with NodeJS, getting comfortable with it, I decided to return to my roots and try web dev. I started with pure HTML and CSS before moving to Vue.js which is what I used to make this site. I still do write code in other languages, mostly Python and C#, however I do consider Node as the one I'm most comfortable with.",
          image: "me2.png",
          left: false,
        },
        {
          title: "",
          text: "Now let's get a little more personal. I spend most of my time either mashing away at my keyboard, adding some new sick feature to Bläck Cät or learning new things computer related like machine learning and computer vision or playing video games. I mostly play roguelike or rhythm games, but don't actually have a preferance. I'll happily play whatever I find. Those just happen to be the ones I enjoy the most at the moment.",
          image: "me4.jpg",
          left: true,
        },
        {
          title: "Thank you!",
          text: "Well, hey! Thanks for reading the about section. I spent like 2 hours trying to make a stupid box-shadow. Hopefully it was worth it! If you want to support me in any way, I do have a patreon. The link is in my github if you are interested.",
          image: "me3.png",
          left: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.about-container {
  text-align: center;
  margin: 60px;
  padding-left: 120px;
  padding-right: 120px;
  display: block;
  animation-name: pop-in;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
@keyframes pop-in {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@media screen and (max-width: 880px) {
  .about-container {
    display: inline-grid;
    grid-auto-flow: row;
    grid-gap: 2em;
    justify-items: center;
    margin: 40px;
    padding: 0;
    left: 0;
    animation-name: pop-in;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
}
</style>
