<template>
  <button @click="btnClick">{{text}}!</button>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class HelloDecorator extends Vue {
  @Prop() text: string

  btnClick ():void {
    this.$emit('ComponentClick')
  }
}
</script>
