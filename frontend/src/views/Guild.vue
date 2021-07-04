<template>
  <div class="guild">
    <h1 class="heading">Welcome to {{ guild_name }}'s page</h1>
    <GuildStats :guild="guild" :chan="chan" :emj="emj" />
    <GuildTable :elements="lb" :keys="keys" title="Leaderboards" />
    <Footer :sticky="true" />
  </div>
</template>

<script>
import GuildTable from "../components/GuildTable.vue";
import GuildStats from "../components/GuildStats.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";

export default {
  name: "Guild",
  components: { GuildTable, GuildStats, Footer },
  data() {
    return {
      guild_id: this.$route.params.guild_id,
      guild: {},
      lb: [],
      keys: ["Position", "Username", "Level", "XP"],
      guild_name: "",
      chan: 0,
      emj: 0,
    };
  },
  methods: {
    async getGuild() {
      const res = await axios({
        url: `/api/guild/${this.guild_id}`,
        method: "GET",
      });
      let guild = res.data.results[0];
      this.guild_name = guild.name;
      this.guild = guild;
      this.chan = guild.channels.length;
      this.emj = guild.emojis.length;
    },
    async getLb() {
      const res = await axios({
        url: `/api/lb/${this.guild_id}`,
        method: "GET",
      });
      let new_lb = [];
      res.data.results[0].forEach((user) => {
        new_lb.push({
          username: `${user.username}#${user.discriminator}`,
          position: user.position,
          level: user.level,
          xp: user.xp,
        });
      });
      this.lb = new_lb;
    },
  },

  async created() {
    await this.getGuild();
    await this.getLb();
  },
};
</script>

<style scoped>
h1 {
  padding-top: 0;
  font-size: 2em;
}
</style>
