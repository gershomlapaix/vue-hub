<template>
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      id="new-todo-input"
      name="new-todo"
      autocomplete="off"
      v-model.lazy.trim="label"
      class="input__lg"
    />
    <button type="submit" class="btn btn__primary btn__lg">Add</button>
  </form>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      if (this.label === "") {
        return;
      }
      //else
      this.$emit("todo-added", this.label);
      this.label = "";
    },
  },

  data: function () {
    return {
      label: "",
    };
  },
};
</script>
