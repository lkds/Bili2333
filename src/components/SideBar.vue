<script setup>
</script>

<template>
    <div class="collapse-btn" @click="collapseChange">
        <i v-if="!isCollapse" class="el-icons-s-fold"></i>
        <i v-else class="el-icons-s-unfold" style="height:50px"></i>
    </div>
    <el-menu
    default-active
    unique-opened
    router
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    >
        <el-submenu index="1">
            <template v-slot:span>
                <i class="el-icon-pie-chart"></i>
                <span>岗位信息</span>
            </template>
            <el-menu-item-group v-model="value" @change="lineTo" router="true">
            <el-menu-item index="/occupation/differOccupation">不同岗位薪资</el-menu-item>
            <el-menu-item index="/occupation/differIndustry">不同行业平均薪资</el-menu-item>
            <el-menu-item index="/occupation/differOccuEduBack">不同岗位的学历要求</el-menu-item>
            <el-menu-item index="/occupation/differEduBackSalary">不同学历平均薪资</el-menu-item>
            <el-menu-item index="/occupation/differSa_Edu_Exp">薪资-学历-经验</el-menu-item>
            </el-menu-item-group>
        </el-submenu>

    </el-menu>
</template>

<script>
export default {
  // eslint-disable-next-line no-undef
  data() {
    return {
      isCollapse: true,
      value: "1-1"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    collapseChange() {
      this.isCollapse = !this.isCollapse;
    },
    lineTo() {}
  }
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.collapse-btn {
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
</style>