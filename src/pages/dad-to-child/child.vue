<template>
  <div>
    <h4>I am the child component</h4>
    <div>
      <span>来自爸爸的话:</span>
      <span>{{wordsFromDad}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    wordsFromDad: String
  }
}
</script>

<style lang="less" scoped>
  
</style>