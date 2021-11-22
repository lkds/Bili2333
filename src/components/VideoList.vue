<script setup>
const urlList = [
    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
]
</script>

<template>
<el-row v-for="url in urlList" :key="url">
        <el-col :span=6>
            <el-image
            style="width: 100px; height: 100px"
            :src= "url"
            fit= "fill"
        ></el-image>
        </el-col>
        <el-col :span=16>
            <div>ddd</div>
        </el-col>
</el-row>
</template>