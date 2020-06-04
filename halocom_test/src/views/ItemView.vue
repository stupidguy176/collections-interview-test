<template>
  <div class="container">
    <item v-if="item" :item="item"></item>
    <template>
      <span class="no-comment" v-if="comments.length == 0">No Comment yet :(</span>
      <comment v-for="comment in comments" :key="comment.id" :item="comment"></comment>
    </template>
  </div>
</template>

<script>
import Item from "../components/Item.vue";
import Comment from "../components/Comment.vue";
import axios from "axios";

export default {
  name: "item-view",
  components: {
    Comment,
    Item
  },
  data() {
    return {
      item: null,
      comments: []
    };
  },
  watch: {},
  computed: {},
  async created() {
    this.onGetData();
  },
  methods: {
    async onGetData() {
      let parent_id = this.$route.params.id;
      console.log("this.$route", this.$route);
      let url = `http://localhost:3000/news`;
      try {
        const res = await axios.get(url);
        let data = res.data;
        this.item = data.find(i => i.objectID == parent_id);
        console.log("data", data);
      } catch (e) {
        console.error(e);
      }
      // params.id
      let url_cmt = `http://localhost:3000/comments`;
      try {
        const res = await axios.get(url_cmt);
        let data = res.data;
        this.comments = data.filter(i => i.parent == parent_id);
        console.log("data this.comments", this.comments);
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>

<style scoped>
.no-comment {
  font-family: Verdana, Geneva, sans-serif;
  color: #828282;
}
</style>