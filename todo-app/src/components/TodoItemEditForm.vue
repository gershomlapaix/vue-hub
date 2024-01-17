<template>
  <form @submit.prevent="onSubmit">
    <div class="">
      <label for="edit-label">Edit Name for &quot;{{ label }}&quot;</label>
      <input
        type="text"
        :id="id"
        ref="labelInput"
        autocomplete="off"
        v-model.lazy.trim="newLabel"
      />
    </div>

    <div class="">
      <button type="button" class="btn" @click="onCancel">
        Cancel <span class="visually-hidden">{{ label }}</span>
      </button>

      <button type="submit" class="btn btn-submit">
        Save <span class="visually-hidden">edit for {{ label }}</span>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      newLabel: this.label,
    };
  },

  methods: {
    onSubmit() {
      if (this.newLabel && this.newLabel !== this.label) {
        this.$emit("item-deleted", this.newLabel);
      }
    },
    onCancel() {
      this.$emit("edit-cancelled");
    },
  },
  mounted() {
    const labelInputRef = this.$refs.labelInput;
    labelInputRef.focus();
  },
};
</script>

<style scoped>
input {
  display: inline-block;
  margin-top: 0.4rem;
  width: 100%;
  min-height: 4.4rem;
  padding: 0.4rem 0.8rem;
  border: 2px solid #565656;
}
form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

form > * {
  flex: 0 0 100%;
}
</style>
