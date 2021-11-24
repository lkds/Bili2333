<script setup>

</script>
<template>
    <el-carousel
        ref="carousel"
        :interval="1000"
        type="card"
        height="300px"
        style="margin-top:30px"
        :autoplay="false"
        @change="onChangeCarouselVal"
    >
        <el-carousel-item v-for="url in pics" :key="url">
            <el-image :src="url" fit="contain"></el-image>
        </el-carousel-item>
    </el-carousel>
    <div class="slider">
        <el-slider v-model="value" :max="max_step" @change="changeSliderVal" :marks="marks"></el-slider>
    </div>
</template>
<script>
import { getCurrentInstance } from 'vue';
export default {
    name: 'Point',
    mounted() {
        // this.get_data()
    },
    data() {
        return {
            value: 0,
            last_value: 0,
            max_step: 10,
            marks: {
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
                9: {
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
            },
            pics: [
                'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
            ]
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
        changeBarShow(val) {
            // console.log(val)
            // console.log(this.last_value)
            // const old1 = this.last_value[0]
            // const old2 = this.last_value[1]
            // const new1 = val[0]
            // const new2 = val[1]
            // if (old1 == new1){
            //     this.value = [new2, new2]
            // }else if(old2 == new2){
            //     this.value = [new1, new1]
            // }
        },
        renderInfo() {
            console.log(this.value)
        },
        changePic(val) {
            const picIndexF = val / this.max_step * (this.pics.length - 1)
            const picIndex = Math.floor(picIndexF)
            this.$refs.carousel.setActiveItem(picIndex)
        },
        changeSliderVal(val) {
            this.changeBarShow(val)
            this.renderInfo()
            this.changePic(val)
        },
        onChangeCarouselVal(val, oldVal) {
            const valF = val * this.max_step / (this.pics.length - 1)
            const valN = Math.floor(valF)
            this.value = valN
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
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>