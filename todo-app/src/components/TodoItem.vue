<template>
  <div v-if="!isEditing">
    <div class="">
      <input
        type="checkbox"
        class="checkbox"
        :id="id"
        :checked="isDone"
        @change="$emit('checkbox-changed')"
      />
      <label :for="id">{{ label }}</label>
    </div>

    <div class="btn">
      <button
        type="button"
        class="btn-sub"
        ref="editButton"
        @click="toggleTodoItemEditForm"
      >
        Edit <span class="visually-hidden">{{ label }}</span>
      </button>

      <button type="button" class="btn btd-delete" @click="deleteTodo">
        Delete <span class="visually-hidden">{{ label }}</span>
      </button>
    </div>
  </div>

  <todo-item-edit-form
    v-else
    :id="id"
    :label="label"
    @item-edited="itemEdited"
    @edit-cancelled="editCancelled"
  ></todo-item-edit-form>
</template>

<script>
import TodoItemEditForm from "./TodoItemEditForm.vue";
export default {
  components: {
    TodoItemEditForm,
  },
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
    id: { required: true, type: String },
  },
  data() {
    return {
      isEditing: false,
    };
  },
  computed: {
    isDone() {
      return this.done;
    },
  },
  methods: {
    deleteTodo() {
      this.$emit("item-deleted");
    },
    toggleTodoItemEditForm() {
      console.log(this.$refs.editButton);
      this.isEditing = true;
    },
    itemEdited(newLabel) {
      this.$emit("item-edited", newLabel);
      this.isEditing = false;
      this.focusOnEditButton();
    },
    editCancelled() {
      this.isEditing = false;
      this.focusOnEditButton();
    },
    focusOnEditButton() {
      this.$nextTick(() => {
        const editButtonRef = this.$refs.editButton;
        editButton.focus();
      });
    },
  },
};
</script>
