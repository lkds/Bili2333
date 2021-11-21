<template>
    <el-row justify="center" align="middle">
        <el-col :span=16 >
            <el-input v-model="keyword" placeholder="搜一搜">
                <template #prepend>
                    <el-select v-model="select" placeholder="类别" style="width: 110px">
                        <el-option label="网址" value="1"></el-option>
                        <el-option label="UP主" value="2"></el-option>
                        <el-option label="关键词" value="3"></el-option>
                    </el-select>
                </template>
                <template #append>
                    <el-button :icon="Search" v-on:click="search">搜索</el-button>
                </template>
            </el-input>
        </el-col>
    </el-row>
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
        }
    },
    methods: {
        search() {
            axios.get('/api/search', {
                params: {
                    keyword: this.keyword,
                    select: this.select,
                }
            }).then(res => {
                this.$emit('search', res.data)
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>