<template>
  <div class="container">
    <div class="d-grid gap-2 col-10 mx-auto">
      <a
        class="btn btn-lg custom-btn"
        data-bs-toggle="collapse"
        :href="`#${command.name.replace('?', '')}`"
        role="button"
        aria-expanded="false"
        :aria-controls="command.name.replace('?', '')"
      >
        {{ command.name }}
      </a>
    </div>
    <div
      class="collapse col-10 mx-auto"
      :id="command.name.replace('?', '')"
      style=""
    >
      <div class="card-group">
        <div class="card custom-border card-body bg-transparent">
          <div class="card-title fs-4" style="text-align: left">
            Description
          </div>
          <div class="card-text fs-6" style="text-align: left">
            {{ command.description }}
          </div>
        </div>
        <div class="card custom-border card-body bg-transparent">
          <div class="card-title fs-4" style="text-align: left">Usage</div>
          <div class="card-text fs-6" style="text-align: left">
            {{ command.usage }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommandDropdown",
  props: {
    command: {
      name: { type: String },
      description: { type: String },
      usage: { type: String },
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
  --dropdown-primary: #8975d1;
  --dropdown-secondary: hsla(0, 0%, 55%, 0.959);
  --dropdown-trinary: hsla(0, 0%, 53%, 0.699);
}

.collapse-custom {
  display: flexbox;
  text-align: center;
  align-content: center;
  justify-items: center;
}

.card-title {
  color: hsla(0, 0%, 55%, 0.959);
}

.card-text {
  color: hsla(0, 0%, 53%, 0.699);
}

.custom-btn {
  color: #8975d1;
  font-size: 1em;
  border: 2px solid;
  border-color: #2b263d;
  border-radius: 8px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.custom-border {
  border: 2px solid;
  border-color: #2b263d;
  border-radius: 8px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
</style>
