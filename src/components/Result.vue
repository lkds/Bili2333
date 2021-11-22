<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside>
      <el-menu
      default-active="intro"
      class="el-menu-vertical-demo"
      router
      >
        <el-menu-item index="intro" ><el-icon><video-play /></el-icon>基本信息</el-menu-item>
        <el-menu-item index="analysis" ><el-icon><postcard /></el-icon>总体分析</el-menu-item>
        <el-menu-item index="point" ><el-icon><aim /></el-icon>内容定点</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import { Message, Menu, Setting, VideoPlay, Postcard, Aim } from '@element-plus/icons'
export default {
    name: 'Result',
    components: {
        Message,
        Setting,
        'icon-menu': Menu,
        VideoPlay,
        Postcard,
        Aim
    },
    methods: {
        handleClick(index) {
            console.log(index);
        },
    },
    data() {
        return {
            activeIndex: '1',
            isCollapse: true,
        }
    },

}
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  line-height: 60px;
}

.el-aside {
  color: var(--el-text-color-primary);
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
</style>