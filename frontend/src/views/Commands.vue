<template>
  <div>
    <div class="commands">
      <div
        class="command"
        :key="command.name"
        v-for="command in commands || [{ name: 'Loading Commands' }]"
      >
        <CommandDropdown :command="command || { name: 'Loading Commands' }" />
      </div>
    </div>
    <Footer :sticky="false" />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import CommandDropdown from "../components/CommandDropdown.vue";
import axios from "axios";

export default {
  name: "Home",
  components: { Footer, CommandDropdown },
  methods: {
    async getCommands() {
      const res = await axios({
        url: `/api/commands`,
        method: "GET",
      });
      console.log(res.data.commands);
      let sent_commands = [];
      for (const command of res.data.commands) {
        if (command.category !== "Hidden") {
          sent_commands.push(command);
        }
      }
      this.commands = sent_commands.reverse();
    },
  },
  async created() {
    await this.getCommands();
  },
  data() {
    return {
      commands: [],
      keys: ["Name", "Description", "Usage"],
    };
  },
};
</script>

<style scoped>
.command {
  padding: 0.5em;
}
</style>
