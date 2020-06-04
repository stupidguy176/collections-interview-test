
<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a
          class="page-link"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in pages"
        :key="page.name"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
      >
        <a class="page-link" @click="onClickPage(page.name)">{{page.name}}</a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="onClickNextPage" :disabled="isInLastPage" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 10
    },
    totalPages: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }
      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }
      // When in between
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (let i = 1; i <= this.totalPages; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        });
      }
      // for (
      //   let i = this.startPage;
      //   i <=
      //   Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
      //   i += 1
      // ) {
      //   range.push({
      //     name: i,
      //     isDisabled: i === this.currentPage
      //   });
      // }
      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    }
  },
  methods: {
    isPageActive(page) {
      return this.currentPage === page;
    },
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  padding: 8px 0;
  margin-top: 0;
}
.page-item {
  font-size: 12px;
  color: #9d9d9d;
  &.active {
    .page-link {
      color: #ff742b;
      border: 1px solid #ff742b;
      background-color: transparent;
    }
  }
}
</style>