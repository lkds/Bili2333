<script setup>

</script>
<template>
    <div class="slider">
        <el-slider 
        v-model="value"
        range
        :max="max_step"
        @change="changeVal"
        :marks="marks"
        > </el-slider>
    </div>
    <div>
        <div id="t1" style="height:300px; width:100%"></div>
        <div id="t2" style="height:300px; width:100%"></div>
    </div>
</template>
<script>
import { getCurrentInstance } from 'vue';
export default {
    name: 'Point',
    mounted() {
        this.get_data()
    },
    data() {
        return {
            value: [0, 0],
            last_value: [0, 0],
            max_step: 20,
            marks:{
                0: {
                    label: '0',
                    style: {
                        color: 'red'
                        }
                    },
                4: {
                    label: '争议',
                    style: {
                        color: 'blue'
                        }
                    },
                15: {
                    label: '弹幕密集',
                    style: {
                        color: 'green'
                        }
                    },
                },
            init_data: {
                xAxis: {
                    data: ['A', 'B', 'C', 'D', 'E']
                },
                yAxis: {},
                series: [
                    {
                        data: [10, 22, 28, 43, 49],
                        type: 'bar',
                        stack: 'x'
                    },
                    {
                        data: [5, 4, 3, 5, 10],
                        type: 'bar',
                        stack: 'x'
                    }
                ]
            }
        };
    },
    methods: {
        get_data() {
            const { proxy } = getCurrentInstance()
            console.log(proxy)
            let mycharts = proxy.$echarts.init(document.getElementById('t1'))
            let mycharts2 = proxy.$echarts.init(document.getElementById('t2'))
            mycharts.setOption(this.init_data);
            mycharts2.setOption(this.init_data);
        },
        changeBarShow(val){
            // console.log(val)
            // console.log(this.last_value)
            const old1 = this.last_value[0]
            const old2 = this.last_value[1]
            const new1 = val[0]
            const new2 = val[1]
            if (old1 == new1){
                this.value = [new2, new2]
            }else if(old2 == new2){
                this.value = [new1, new1]
            }
        },
        renderInfo(){
            console.log(this.value)
        },
        changeVal(val) {
            this.changeBarShow(val)
            this.renderInfo()
        }
    },
    watch: {
        value(val, oldVal) {
            this.last_value = oldVal
        }
    }
        
}
</script>
<style>
.slider {
    margin-top: 20px;
}
</style>