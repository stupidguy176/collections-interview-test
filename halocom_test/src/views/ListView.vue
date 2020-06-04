<template>
  <div class="container">
    <div class="list-options">
      <div class="search">
        <span class="title">Search</span>
        <div class="options">
          <select class="selectpicker" data-style="btn-primary">
            <option>Stories</option>
            <option>Comments</option>
          </select>
        </div>
        <span class="title">by</span>
        <div class="options">
          <select class="selectpicker" data-style="btn-primary">
            <option>Popularity</option>
            <option>Date</option>
          </select>
        </div>
        <span class="title">for</span>
        <div class="options">
          <select class="selectpicker" data-style="btn-primary">
            <option>All time</option>
            <option>Last 24h</option>
          </select>
        </div>
      </div>
      <div class="sort">
        <span class="title">Sort by</span>
        <div class="options">
          <select class="selectpicker" data-style="btn-primary" v-model="sort_by">
            <option value="created_at">Time</option>
            <option value="points">Point</option>
          </select>
        </div>
      </div>
    </div>
    <div class="list-items">
      <item v-for="item in items" :key="item.id" :item="item"></item>
      <pagination
        :total-pages="4"
        :total="39"
        :per-page="10"
        :current-page="currentPage"
        @pagechanged="onPageChange"
      />
    </div>
  </div>
</template>

<script>
import Item from "../components/Item.vue";
import Pagination from "../components/Pagination.vue";
import axios from "axios";
import _ from "lodash";

export default {
  name: "list-view",
  components: {
    Item,
    Pagination
  },
  data() {
    return {
      items: [],
      currentPage: 1,
      pageSize: 10,
      sort_by: "created_at",
      keyword: ""
    };
  },
  watch: {
    sort_by: function(new_val) {
      this.items = _.orderBy(this.items, [`${new_val}`], ["desc"]);
    }
  },
  computed: {},
  methods: {
    async onGetData(page) {
      let start = 0,
        end = 10;

      if (page !== 1 && page > 1) {
        end = page * this.pageSize + (page - 1);
        start = end - this.pageSize;
      }
      let url = `http://localhost:3000/news?_start=${start}&_end=${end}`;
      try {
        const res = await axios.get(url);
        this.items = _.orderBy(res.data, [`${this.sort_by}`], ["desc"]);
      } catch (e) {
        console.error(e);
      }
    },
    onPageChange(page) {
      if (page <= 0 || page == 1 || page >= 10) {
        if (page >= 10) {
          this.currentPage = 10;
        } else {
          this.currentPage = 1;
        }
      } else {
        this.currentPage = page;
      }
      this.onGetData(this.currentPage);
    }
  },
  async created() {
    this.onGetData(0);
  }
};
</script>

<style scoped lang="scss">
.list-options {
  display: flex;
  margin-top: 20px;
  .search {
    display: flex;
    align-items: center;
    .title {
      &:not(:first-child) {
        margin-left: 10px;
      }
    }
    .options {
      margin-left: 5px;
    }
  }
  .sort {
    display: flex;
    align-items: center;
    margin-left: 20px;
    .title {
      margin-left: 10px;
    }
    .options {
      margin-left: 5px;
    }
  }
}
.list-items {
  margin-top: 20px;
}
select {
  word-wrap: normal;
  border-radius: 5px;
  padding: 4px 8px;
  font-size: 15px;
  color: #7f7f7f;
  cursor: pointer;
  &:focus {
    box-shadow: none;
    outline: none;
  }
}
@media screen and (max-width: 450px) {
  .list-options {
    display: block;
    margin-top: 10px;
    .search {
      .title {
        display: none;
      }
      .options {
        margin-left: 0;
        margin-right: 5px;
      }
    }
    .sort {
      margin-left: 0;
      margin-top: 5px;
      .title {
        margin-left: 0;
        font-size: 13px;
      }
    }
  }
  .list-items {
    margin-top: 10px;
  }
  select {
    padding: unset;
  }
}
</style>