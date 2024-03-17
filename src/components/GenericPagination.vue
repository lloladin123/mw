<template>
  <div class="d-flex justify-content-center blogPagination">
    <!-- Skip backward 7 pages button -->
    <a class="paginationButton" :class="{ disabled: currentPage <= 7 }" @click="skipBackward">&lt;&lt;</a>

    <!-- Previous page button -->
    <a class="paginationButton" :class="{ disabled: currentPage === 1 }" @click="previousPage">&lt;</a>

    <!-- Generate pagination links -->
    <a v-for="(page, index) in visiblePages" :key="index" :class="{ paginationLink: true, active: currentPage === page }"
      @click="goToPage(page)">
      <!-- Display three dots at the beginning if there are pages behind the first visible page -->
      <span v-if="index === 0 && currentPage > 7">...</span>
      {{ page }}
      <!-- Display three dots on the last element if there are more elements after -->
      <span v-if="index === visiblePages.length - 1 && lastVisiblePage < totalPages">...</span>
    </a>

    <!-- Next page button -->
    <a class="paginationButton" :class="{ disabled: currentPage === totalPages }" @click="nextPage">&gt;</a>

    <!-- Skip forward 7 pages button -->
    <a class="paginationButton" :class="{ disabled: currentPage >= totalPages - 6 }" @click="skipForward">&gt;&gt;</a>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    visiblePageCount: {
      type: Number,
      default: 7 // Number of visible pages in each set
    },
  },
  computed: {
    lastVisiblePage() {
      let startPage = 1;
      let endPage = Math.min(this.totalPages, this.visiblePageCount);

      if (this.currentPage > this.visiblePageCount) {
        const setIndex = Math.ceil(this.currentPage / this.visiblePageCount);
        startPage = (setIndex - 1) * this.visiblePageCount + 1;
        endPage = Math.min(this.totalPages, startPage + this.visiblePageCount - 1);
      }

      return endPage;
    },
    visiblePages() {
      let startPage = 1;
      const endPage = this.lastVisiblePage;

      if (this.currentPage > this.visiblePageCount) {
        const setIndex = Math.ceil(this.currentPage / this.visiblePageCount);
        startPage = (setIndex - 1) * this.visiblePageCount + 1;
      }

      return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    }
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.$emit('previousPage');
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('nextPage');
      }
    },
    goToPage(page) {
      // Emit an event to set the currentPage to the clicked page
      this.$emit('goToPage', page);
    },
    skipBackward() {
      // Skip backward by 7 pages
      const newPage = Math.max(1, this.currentPage - this.visiblePageCount);
      this.goToPage(newPage);
    },
    skipForward() {
      // Skip forward by 7 pages
      const newPage = Math.min(this.totalPages, this.currentPage + this.visiblePageCount);
      this.goToPage(newPage);
    }
  }
};
</script>

<style scoped>
.paginationButton,
.paginationLink {
  color: black;
}

.paginationButton {
  cursor: pointer;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.paginationLink:hover,
.paginationLink.active {
  color: #886588ff;
  /* Adjust the color as needed */
}
</style>
