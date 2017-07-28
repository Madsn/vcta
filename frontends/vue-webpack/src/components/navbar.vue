<template>
<el-menu theme="dark" :default-active="activeIndex" class="el-menu" mode="horizontal" router>
  <el-menu-item index="/">VCTA</el-menu-item>
  <el-menu-item index="dashboard">Dashboard</el-menu-item>
  <el-menu-item index="scoreboard">Scoreboard</el-menu-item>
</el-menu>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>

</style>
