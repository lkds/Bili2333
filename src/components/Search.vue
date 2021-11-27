<template>
    <el-row justify="center" align="middle">
        <el-col :span=16 >
            <el-image
                class="icon"
                :src="url"
                fit="cover"
            >
            </el-image>
            <el-input v-model="keyword" placeholder="搜一搜">
                <template #prepend>
                    <el-select v-model="select" placeholder="类别" style="width: 110px">
                        <el-option label="网址" value="1"></el-option>
                        <el-option label="BV" value="2"></el-option>
                    </el-select>
                </template>
                <template #append>
                    <el-button :icon="Search" v-on:click="search">搜索</el-button>
                </template>
            </el-input>
        </el-col>
    </el-row>
    {{res}}
</template>

<script setup>
// import {ref} from 'vue'
import { Search } from '@element-plus/icons'
// const keyword = ref('')
// const select = ref('')
</script>
<script>
import axios from '../network'
export default {
    name: 'Search',
    data() {
        return {
            keyword: '',
            select: '1',
            res: '',
            url: ''
        }
    },
    methods: {
        process_input(){
            if(this.select == '1' & this.keyword.length > 0){
                let prefix = this.keyword.split('?')[0]
                const bv = prefix.split('/')[4]
                this.keyword = bv
            }
        },
        search() {
            this.process_input()
            // axios.get('/api/video_info', {
            //     params: {
            //         keyword: this.keyword,
            //     }
            // }).then(res => {
            //     console.log(res)
            //     this.res = res.data
            //     this.url = res.data.pic
            // }).catch(err => {
            //     console.log(err)
            // })
            this.$router.push({
                path: '/result',
                query: {
                    keyword: this.keyword
                }
            })
        }
    }
}
</script>
<style>
.icon {
    width: 100px;
    height: 100px;
    margin: 0 auto;
}
</style>