 <template>
  <div>
    <h2>Contact Us</h2>
    <form>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" id="name">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email">
      </div>
      <div class="form-group">
        <label for="subject">Subject:</label>
        <input type="text" class="form-control" id="subject">
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea class="form-control" id="message" rows="5"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
};
</script>

<style scoped>

p {
  color: black;
}

a {
  color: black;
}
.card {
  margin-bottom: 20px;
}

</style>
