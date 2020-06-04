<template>
  <article class="item">
    <div class="title">
      <router-link :to="`/item/${item.objectID}`">{{ item.title }}</router-link>
    </div>
    <div class="meta">
      <span>
        <a href>{{ item.points }} points</a>
      </span>
      <span class="line_separator"></span>
      <span>
        <a href>{{ item.author }}</a>
      </span>
      <span class="line_separator"></span>
      <span>
        <a href>{{ item.created_at_i | timeAgo }}</a>
      </span>
      <span class="line_separator"></span>
      <span>
        <a href>{{ item.num_comments }} comments</a>
      </span>
      <span class="line_separator line_separator_sm_none"></span>
      <span class="item_link">
        <a href>({{item.url}})</a>
      </span>
    </div>
  </article>
</template>

<script>
export default {
  name: "item-component",
  props: ["item"]
};
</script>

<style lang="scss" scoped>
.item {
  margin: 4px 0;
}
.title {
  a {
    color: #000;
    font-size: 14px;
    &:hover {
      text-decoration: none;
    }
  }
}
.meta {
  a {
    color: #696969;
  }
  font-size: 11px;
}
.line_separator {
  border-left: 1px solid #a29b9b;
  height: 100%;
  margin: 0px 10px;
}
@media screen and (max-width: 450px) {
  .item_link {
    display: block;
    word-break: break-all;
    font-size: 12px;
  }
  .line_separator_sm_none {
    display: none;
  }
}
</style>