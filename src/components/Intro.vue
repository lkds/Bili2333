<template >
    <el-row :gutter="0" class="el-title-row" id='intro'>
        <el-col class="el-title-col">
            <el-card shadow="hover" class="text">{{ title }}</el-card>
        </el-col>
    </el-row>

    <el-row :gutter="0" class="el-infolists" justify="start" align="top">
        <el-col :span="15">
            <div class="el-cover">
                <el-image :src="cover_img" style="width: 100%;" fit=""></el-image>
            </div>
        </el-col>
        <el-col :span="8">
            <el-descriptions
    	        title="视频信息"
    	        :column="1"
                border
            >
    	        <el-descriptions-item label="UP" label-align="center">
                    <el-col><el-avatar :size="50" :src="face_url"></el-avatar></el-col>
                    <el-col class="text" style="transform: translateY(50%)">{{ up_name }}</el-col></el-descriptions-item>
    	        <el-descriptions-item label="视频简介" label-align="center" width="0px"><el-col class="text">{{ description }}</el-col></el-descriptions-item>
    	        <el-descriptions-item label="播放量" label-align="center"><el-col><el-icon size='25px'><video-play /></el-icon></el-col><el-col class="text"> {{ play_volume }} </el-col></el-descriptions-item>
    	        <el-descriptions-item label="弹幕数" label-align="center"><el-col><el-icon size='25px'><comment /></el-icon></el-col><el-col class="text"> {{ num_danmu }} </el-col></el-descriptions-item>
    	        <el-descriptions-item label="投稿时间" label-align="center"><el-col><el-icon size='25px'><calendar /></el-icon></el-col><el-col class="text"> {{ time }} </el-col></el-descriptions-item>
    	        <el-descriptions-item label="一键三连" label-align="center">
    	            <el-col><el-icon size='25px'><pointer /></el-icon></el-col><el-col class="text" > {{ favorite }} </el-col>
    	            <el-col><el-icon size='25px'><coin /></el-icon></el-col><el-col class="text" > {{ coin }} </el-col>
	                <el-col><el-icon size='25px'><star-filled /></el-icon></el-col><el-col class="text" > {{ favorite }} </el-col>
    	        </el-descriptions-item>
            </el-descriptions>
        </el-col>
    </el-row>
</template>

<style scoped>
.el-infolists {
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
}
/* .info-card {
    width: 480px;
    margin-left: 200px;
} */
.el-title-row {
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    flex-wrap: wrap;
}
.el-title-col {
    margin-left: 50px;
    display: flex;
    flex-wrap: wrap;
}
/* .el-cover { */
    /* margin-left: 100px; */
    /* display: flex;
    flex-wrap: wrap; */
/* } */
.text {
    font-size: 18px;
}
.el-col {
    margin-left: 11px;
}
</style>


<script lang="ts">
import { ref, defineComponent } from "vue"
import axios from '../network'
import { Coin, Pointer, VideoPlay, StarFilled, Comment, Calendar } from '@element-plus/icons'
export default defineComponent({
    name: "Intro",
    props: {
        result: {
            type: Object,
            required: true
        }
    },
    components: {
        Coin, Pointer, VideoPlay, StarFilled, Comment, Calendar
    },
    mounted() {
        // this.get_videoinfos()
        // console.log(this.$route.query)
        this.render_result()
    },
    data() {
        return {
            // keyword: this.$route.query.keyword,
            title: "bilibili干杯~",
            face_url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
            up_name: "蒙古上单",
            description: "这个UP很懒，什么都没有写呢~",
            play_volume: 0,
            num_danmu: 0,
            time: "1970/01/01 上午0:00",
            cover_img: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            favorite: 0,
            coin: 0,
            like: 0,
            fcl_img: 'https://img1.baidu.com/it/u=1544353566,2990526187&fm=26&fmt=auto'
        }
    },
    methods: {
        render_video_info(videoinfos) {
                this.title = videoinfos.data['title'],
                    this.face_url = videoinfos.data['owner_face'],
                    this.up_name = videoinfos.data['owner_name'],
                    this.description = videoinfos.data['desc'],
                    this.play_volume = videoinfos.data['view'],
                    this.cover_img = videoinfos.data['pic'],
                    this.time = new Date(parseInt(videoinfos.data['pubdate']) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ')
                this.like = videoinfos.data['like'],
                    this.favorite = videoinfos.data['favorite'],
                    this.coin = videoinfos.data['coin'],
                    this.num_danmu = videoinfos.data['danmaku']
        },
        render_result() {
                this.title = this.result['title'],
                this.face_url = this.result['owner_face'],
                this.up_name = this.result['owner_name'],
                this.description = this.result['desc'],
                this.play_volume = this.result['view'],
                this.cover_img = this.result['pic'],
                this.time = new Date(parseInt(this.result['pubdate']) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ')
            // this.like = videoinfos.data['like'],
                //     this.favorite = videoinfos.data['favorite'],
                //     this.coin = videoinfos.data['coin'],
                //     this.num_danmu = videoinfos.data['danmaku']
        },
        get_videoinfos() {
            axios.get('/video_info', {
                params: {
                    keyword: this.keyword,
                }
            }).then(videoinfos => {
                console.log(videoinfos)
                this.render_video_info(videoinfos)
            }).catch(err => {
                console.log(err)
            })
        },
    }
})
</script>