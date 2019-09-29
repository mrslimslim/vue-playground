<template>
  <div class="dad">
    <h1>{{title}}</h1>
    <span>爸爸的话：</span>
    <el-input v-model="dadWords"></el-input>
    <child :wordsFromDad="dadWords"></child>
    <span>爸爸的话：</span>
    <el-input v-model="dadWords" @input="handleInput"></el-input>
    <child-second @dadControl="func => childMethod = func"></child-second>
  </div>
</template>

<script>
import Child from './child'
import ChildSecond from './child2'
export default {
  components: { Child, ChildSecond },
  name:"dad",
  data(){
    return {
      title:'I am the dad component',
      dadWords:"",
      childMethod: null
    }
  },
  methods: {
    handleInput(val){
      this.childMethod(val)
    }
  }
}
</script>

<style lang="less" scoped>
  .dad{
    border: 2px solid skyblue;
  }
</style>