<template>
  <div class="home">
    <MainCTA :guild="guild_number" :user="user_number" />
    <TextWithImage />
    <Footer />
  </div>
</template>

<script>
import MainCTA from "../components/MainCTA.vue";
import TextWithImage from "../components/TextWithImage.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";

export default {
  name: "Home",
  components: { MainCTA, TextWithImage, Footer },
  data() {
    return {
      guild_number: "",
      user_number: "",
    };
  },
  methods: {
    async getGuildNumber() {
      const res = await axios({
        url: "/api/guilds",
        method: "GET",
      });
      let num = String(res.data.size);
      this.guild_number = num;
    },
    async getUserNumber() {
      const res = await axios({
        url: "/api/users",
        method: "GET",
      });
      this.user_number = String(res.data.size);
    },
  },
  async created() {
    await this.getUserNumber();
    await this.getGuildNumber();
  },
};
</script>

<style></style>
