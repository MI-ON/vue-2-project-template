<template>
  <div>
    <div>Count: {{ count }}</div>
    <input type="button" value="Increase" @click="increaseCount" />
    <input type="button" value="Decrease" @click="decreaseCount" />
  </div>
</template>

<script lang="ts" src="./vuex-sample.component.ts"></script>
<style lang="scss" src="./vuex-sample.component.scss"></style>
