<script setup>

</script>
<template>
    <div>
        <div id="t1" style="height:100%; width:100%"></div>
        <div id="t2" style="height:100%; width:100%"></div>
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
        }
    },
}
</script>