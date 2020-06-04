<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <span>H</span>
      </div>
      <div class="search">
        <span class="search-icon">
          <img src="../assets/svg/search.svg" alt />
        </span>
        <input type="text"/>
      </div>
      <div class="setting">
        <div class="power-by">
          <span>by</span>
          <a href>
            <img class="by-icon" src="../assets/svg/logo-algolia.svg" alt />
          </a>
        </div>
        <div class="setting-icon">
          <router-link :to="'/login'"><img class src="../assets/svg/computer.svg" alt /></router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-component"
};
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  background-color: #fe742c;
  width: 100%;
  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
}
.logo {
  color: #ffffff;
  border: solid 1px #ffffff;
  padding: 8px 14px;
}
.search {
  width: 80%;
  display: inline-block;
  position: relative;
  &-icon {
    height: 20px;
    width: 20px;
    position: absolute;
    top: 8px;
    left: 10px;
    pointer-events: none;
  }
  input {
    height: 40px;
    width: 100%;
    border: none;
    padding-left: 40px;
    &:focus {
      box-shadow: none;
      outline: none;
    }
  }
}
.setting {
  height: 100%;
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .power-by {
    margin-left: 10px;
    display: flex;
    align-items: center;
    span {
      font-size: 14px;
    }
    a {
      display: flex;
      margin-left: 8px;
    }
    .by-icon {
      height: 15px;
    }
  }
  .setting-icon {
    cursor: pointer;
    img {
      height: 20px;
    }
  }
}

@media screen and (max-width: 320px) {
  .search {
    width: 60% !important;
  }
}

@media screen and (max-width: 450px) {
  .search {
    width: 70%;
  }
  .logo {
    padding: 7px 14px;
  }
  .setting {
    width: auto;
    .power-by {
      display: none;
    }
    .setting-icon {
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
  }
}

</style>