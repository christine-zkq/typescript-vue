<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>store 数据 ：{{ info }}</p>
    <myComponent @ComponentClick="onClick" text="myComponentClick"></myComponent>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import myComponent from './myComponent.vue'
import { Getter, Action } from 'vuex-class'
@Component({
  components: {
    myComponent
  }
})
export default class HelloWorld extends Vue {
  @Getter info: string

  @Action('updateInfo') update: Function

  msg: string = 'typescript-vue App'

  myComponentClick: string = 'myComponentClick'

  onClick (): void {
    // dispatchCheckout(updateInfo)
    this.update('O(∩_∩)O哈哈~')
  }

  mounted () {
    console.log(this.msg)
  }
}
</script>
