<template>
<!-- 存放公共组件 -->
  <div class="box">
    <div class="boxclick"><el-button @click="show2 = !show2">Click Me</el-button></div>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-zoom-in-center">
        <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      show2: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .boxclick{
    width: 100%;
    border: 1px solid #409eff;
  }
  .box{
    width: 700px;
    height: 200px;
    border: 1px solid rgb(175, 12, 12);
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
