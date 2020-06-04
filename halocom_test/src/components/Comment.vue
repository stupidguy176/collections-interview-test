<template>
  <div class="comment">
    <div class="author">
      <span>{{item.by}}</span>
      <span class="time">{{item.time | timeAgo}}</span>
    </div>
    <div class="comment-text">text{{item.text}}</div>
  </div>
</template>

<script>
export default {
  name: "comment-component",
  props: ["item"]
};
</script>

<style lang="scss" scoped>
.comment {
  padding-top: 10px;
  font-family: Verdana, Geneva, sans-serif;
  .author {
    font-size: 8pt;
    color: #828282;
  }
  .comment-text {
    font-size: 13px;
  }
  .time {
    margin-left: 10px;
  }
}
</style>