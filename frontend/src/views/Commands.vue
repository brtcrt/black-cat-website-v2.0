<template>
  <div>
    <div class="commands">
      <CommandsTable
        title="Simple Commands"
        :keys="keys"
        :elements="simple_commands"
      />
      <CommandsTable
        title="Music Commands"
        :keys="keys"
        :elements="music_commands"
      />
      <CommandsTable
        title="Photo/GIF Commands"
        :keys="keys"
        :elements="photo_commands"
      />
      <CommandsTable
        title="Minigame Commands"
        :keys="keys"
        :elements="minigame_commands"
      />
      <CommandsTable
        title="Other Commands"
        :keys="keys"
        :elements="other_commands"
      />
    </div>
    <Footer :sticky="false" />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import CommandsTable from "../components/Table.vue";

export default {
  name: "Home",
  components: { Footer, CommandsTable },
  data() {
    return {
      keys: ["Name", "Description", "Usage"],
      simple_commands: [
        {
          name: "bot?",
          description: "Shows the help command.",
          usage: "=bot?",
        },
        {
          name: "prefix",
          description:
            "Shows current prefix for the server. Will changes the bot's prefix if given a new one.",
          usage: "=prefix ${new prefix}",
        },
        {
          name: "level",
          description: "Shows level and xp info.",
          usage: "=level",
        },
        {
          name: "leaderboards",
          description: "Shows the leaderboard for the server.",
          usage: "=leaderboards",
        },
        {
          name: "clear",
          description: "Deletes x amount of messages.",
          usage: "=clear x",
        },
        {
          name: "votekick",
          description: "Opens a kicking poll.",
          usage: "=votekick @user",
        },
        {
          name: "poll",
          description:
            "Opens a poll. Either a multiple choice poll (up to 10 choices) or a yes/no type poll.",
          usage:
            "poll topic | opt | opt2 (if no options are given, opens a yes/no poll.)",
        },
        {
          name: "todo",
          description:
            "A small todo list. Use =helptodo for more info on how to use it (WIP)",
          usage: "=todo",
        },
        {
          name: "setreminder",
          description:
            "Sets a reminder for a specific date. Use =helpsetreminder for more info on how to use it (WIP)",
          usage: "=setreminder",
        },
        {
          name: "changename",
          description: "Changes user's nickname.",
          usage: "=changename @user",
        },
      ],
      music_commands: [
        {
          name: "play",
          description:
            "Play a track from a YouTube/Spotify link or search term.",
          usage: "=play ${ youtube / spotify link || term(s)}",
        },
        {
          name: "pause",
          description: "Pauses the track.",
          usage: "=pause",
        },
        {
          name: "queue",
          description: "Shows the current queue.",
          usage: "=queue",
        },
        {
          name: "loop",
          description: "Loops the track that is currently playing.",
          usage: "=loop",
        },
        {
          name: "skip",
          description: "Skips to the next track in queue.",
          usage: "=skip",
        },
        {
          name: "die",
          description: "Leaves the voice channel and clears the queue.",
          usage: "=die",
        },
        {
          name: "lyrics",
          description: "Searches for lyrics for the track that is playing.",
          usage: "=lyrics",
        },
      ],
      photo_commands: [
        {
          name: "gif",
          description: "Sends a random gif.",
          usage: "=gif",
        },
        {
          name: "gifsearch",
          description: "Search for a gif on Tenor.",
          usage: "=gifsearch ${term(s)} ${number}",
        },
        {
          name: "cat",
          description: "Sends a random cat photo.",
          usage: "=cat",
        },
        {
          name: "dog",
          description: "Sends a random dog photo.",
          usage: "=dog",
        },
        {
          name: "bird",
          description: "Sends a random bird photo.",
          usage: "=bird",
        },
        {
          name: "randompic",
          description: "Sends a random photo.",
          usage: "=randompic",
        },
      ],
      minigame_commands: [
        {
          name: "chess",
          description: "Play a game of chess with a friend.",
          usage: "=chess @user",
        },
        {
          name: "minesweeper",
          description: "Play a game of minesweeper.",
          usage:
            "=minesweeper (and then give the coords in a seperate message.)",
        },
        {
          name: "russianroulette",
          description:
            "Play a game of russian roulette. If you die you die. (WIP)",
          usage: "=rr",
        },
        {
          name: "rock, paper or scissors",
          description: "Play a game of rock,paper,scissors.",
          usage: "=${rock || paper || scissors}",
        },
        {
          name: "snake",
          description: "Play a game of snake.",
          usage: "=snake",
        },
        {
          name: "tic-tac-toe",
          description: "Play a game of tic-tac-toe.",
          usage: "=tic-tac-toe",
        },
        {
          name: "gameoflife",
          description: "Play Game of Life.",
          usage: '=gameoflife ${coordinates seperated with " , "}',
        },
      ],
      other_commands: [
        {
          name: "scp",
          description: "Get the wiki page of an scp in embed format.",
          usage: "=scp ${spc number}",
        },
        {
          name: "generatemarkov",
          description:
            "Generates a message similar to what it has seen in the last 100 messages using a markov chain.",
          usage: "=generatemarkov",
        },
        {
          name: "osu-pp",
          description:
            "Returns the possible pp values for a given osu! beatmap.",
          usage: "=osu-pp ${link} +${optional: mods}",
        },
        {
          name: "uwuify",
          description: "Uwuifys a given message.",
          usage: "=uwuify ${message}",
        },
        {
          name: "weather",
          description: "Get weather info abot a place.",
          usage: "=weather ${city || country || continent?}",
        },
        {
          name: "pokemon (name/id)",
          description: "Get basic information about a pokemon.",
          usage: "=pokemon ${name || id}",
        },
        {
          name: "ping",
          description: "Get an approximation of your ping.",
          usage: "=ping",
        },
      ],
    };
  },
};
</script>

<style></style>
