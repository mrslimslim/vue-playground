<template>
  <div>
    <h4>I am the second child component</h4>
    <div>
      <span>来自爸爸的话:</span>
      <span>{{wordsFromDad}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    dadControl: Function
  },
  data() {
    return {
      wordsFromDad: ''
    }
  },
  mounted(){
    this.$emit('dadControl',this.changeWordsFromDad)
  },
  methods: {
    changeWordsFromDad(val){
      this.wordsFromDad = val
    }
  }
}
</script>

<style lang="less" scoped>
  
</style>