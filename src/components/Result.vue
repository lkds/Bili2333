<script setup>
import { side-bar } from '@/components/SideBar.vue'
</script>

<template>
<el-container>
    <el-aside width="150px">
        <side-bar></side-bar>
    </el-aside>
    <el-main>
        Main
    </el-main>
</el-container>
</template>