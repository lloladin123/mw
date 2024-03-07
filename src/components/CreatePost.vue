<!-- ConfirmationBox.vue -->
<template>
  <div class="confirmation-box" v-if="show">
    <div class="confirmation-box-content">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
      <div class="confirmation-buttons">
        <button @click="confirmDelete">Yes</button>
        <button @click="cancelDelete">No</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
  data() {
    return {
      show: true
    };
  },
  methods: {
    confirmDelete() {
      // Delete the post using the store
      this.$store.commit('deleteBlog', this.post.id);
      this.closeConfirmationBox();
    },
    cancelDelete() {
      this.closeConfirmationBox();
    },
    closeConfirmationBox() {
      this.show = false;
    }
  }
};
</script>

<style scoped>
.confirmation-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
}

.confirmation-box-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.confirmation-buttons button {
  margin: 0 10px;
}
</style>
