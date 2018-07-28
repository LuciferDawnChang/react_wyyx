<template>
  <!--Personal个人中心-->
  <div>
    <login/>
  </div>
</template>

<script>
  import login from "../login/login.vue"
  export default {
    components:{
      login
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/mixins";

</style>
