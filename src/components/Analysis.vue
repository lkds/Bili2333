<script setup></script>
<template>
    <el-descriptions title="总体分析" column="2">
        <el-descriptions-item label="情感倾向">{{ sentiment }}</el-descriptions-item>
        <el-descriptions-item label="争议指数">{{ argurment }}</el-descriptions-item>
        <el-descriptions-item label="负面指数">{{ neg_ratio }}</el-descriptions-item>
        <el-descriptions-item label="类别">
            <el-tag size="medium">{{ type }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="关键词">
            <el-tag size="medium" v-for="item in keywords" :key="item">{{ item }}</el-tag>
        </el-descriptions-item>
    </el-descriptions>
    <div id='chart1' style="width:100%; height:500px"></div>
    <el-image
        :src="word_cloud"
        fir="conver"
    >

    </el-image>
</template>
<script>
import * as echarts from 'echarts'
export default {
    name: 'Analysis',
    mounted() {
        this.render_data()
    },
    data() {
        return {
            sentiment: 0.67,
            argurment: 0.23,
            neg_ratio: '23%',
            type: 'A',
            keywords: [
                '村霸',
                '王刚',
                '摇头',
                '哈哈哈哈哈'
            ],
            charts_data: {
                xAxis: {
                    data: ['A', 'B', 'C', 'D', 'E']
                },
                yAxis: {},
                series: [
                    {
                        data: [10, 22, 28, 23, 19],
                        type: 'line',
                        smooth: true,
                        stack: 'x'
                    },
                    {
                        data: [14, 32, 18, 3, 29],
                        type: 'line',
                        smooth: true,
                        stack: 'x'
                    }
                ]
            },
            "word_cloud":"https://img2.baidu.com/it/u=3805475494,789599953&fm=26&fmt=auto"
        }
    },
    methods: {
        render_data() {
            let myChart = echarts.init(document.getElementById('chart1'))
            myChart.setOption(this.charts_data)
        }
    },
}
</script>