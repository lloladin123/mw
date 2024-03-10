<!-- ConfirmationBox.vue -->
<template>
  <div class="confirmation-box" v-if="show">
    <div class="confirmation-box-content">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
      <img class="blogImg m-2" :src="post.image" alt="Blog Image">
      <p>{{ post.date }}</p>
      <div class="confirmation-buttons">
        <router-link :to="'/Blog'" class="btn" @click="confirmDelete">Yes</router-link>
        <button class="btn" @click="cancelDelete">no</button>
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

p {
  color: black;
}

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
  padding: 2.5vh;
  border-radius: 5px;
}

.confirmation-buttons button {
  margin: 0 10px;
}

.blogImg{
  width: 20%;
}
</style>
