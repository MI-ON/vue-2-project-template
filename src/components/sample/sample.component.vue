<template>
  <div>
    <div>This is sample component.</div>
    <div>This is a message: {{ message }}</div>
    <div>The message from mixin1: {{ mixinMessage1 }}</div>
    <div>The message from mixin2: {{ mixinMessage2 }}</div>
    <OtherComponent />
  </div>
</template>

<script lang="ts" src="./sample.component.ts"></script>
<style lang="scss" src='./sample.component.scss'></style>
