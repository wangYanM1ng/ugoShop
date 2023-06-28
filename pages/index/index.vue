<template>
	<view>
		<template lang="wxml">
			<view class="home">
				<search />
				<!-- 轮播图 -->
				<swiper class="swiper">
					<swiper-item v-for="item in imgList" :key="item.goods_id">
						<navigator url="">
							<image :src="item.image_src" />
						</navigator>
					</swiper-item>
				</swiper>


				<!-- 导航区 -->
				<view class="nav">
					<navigator url="">
						<image src="../../static/uploads/icon_index_nav_1@2x.png" />
					</navigator>
					<navigator url="">
						<image src="../../static/uploads/icon_index_nav_2@2x.png" />
					</navigator>
					<navigator url="">
						<image src="../../static/uploads/icon_index_nav_3@2x.png" />
					</navigator>
					<navigator url="">
						<image src="../../static/uploads/icon_index_nav_4@2x.png" />
					</navigator>
				</view>


				<!-- 楼层数据 -->
				<view class="floors">
					<view class="floor">
						<view class="title">
							<image src="../../static/uploads/pic_floor01_title.png" />
						</view>
						<view class="imgs">
							<navigator url="" class="item">
								<image src="../../static/uploads/pic_floor01_1@2x.png" />
							</navigator>
							<navigator url="" class="item">
								<image src="../../static/uploads/pic_floor01_2@2x.png" />
							</navigator>
							<navigator url="" class="item">
								<image src="../../static/uploads/pic_floor01_3@2x.png" />
							</navigator>
							<navigator url="" class="item">
								<image src="../../static/uploads/pic_floor01_4@2x.png" />
							</navigator>
							<navigator url="" class="item">
								<image src="../../static/uploads/pic_floor01_5@2x.png" />
							</navigator>
						</view>
					</view>


					<view class="floor">
						<view class="title">
							<image src="../../static/uploads/pic_floor02_title.png" />
						</view>
						<view class="imgs">
							<navigator url="" class="item">
								<image src="../../static/uploads/pic_floor02_1@2x.png" />
							</navigator>
							<navigator url="" class="item">
								<image src="../../static/uploads/pic_floor02_2@2x.png" />
							</navigator>
							<navigator url="" class="item">
								<image src="../../static/uploads/pic_floor02_3@2x.png" />
							</navigator>
							<navigator url="" class="item">
								<image src="../../static/uploads/pic_floor02_4@2x.png" />
							</navigator>
							<navigator url="" class="item">
								<image src="../../static/uploads/pic_floor02_5@2x.png" />
							</navigator>
						</view>
					</view>
					<view class="floor">
						<view class="title">
							<image src="../../static/uploads/pic_floor03_title.png" />
						</view>
						<view class="imgs">
							<navigator url="" class="item">
								<image src="../../static/uploads/pic_floor03_1@2x.png" />
							</navigator>
							<navigator url="" class="item">
								<image src="../../static/uploads/pic_floor03_2@2x.png" />
							</navigator>
							<navigator url="" class="item">
								<image src="../../static/uploads/pic_floor03_3@2x.png" />
							</navigator>
							<navigator url="" class="item">
								<image src="../../static/uploads/pic_floor03_4@2x.png" />
							</navigator>
							<navigator url="" class="item">
								<image src="../../static/uploads/pic_floor03_5@2x.png" />
							</navigator>
						</view>
					</view>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	import search from '../../components/search/index.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				imgList: []
			}
		},
		onLoad() {
			this.getBannerList()
		},
		components: {
			search
		},
		methods: {
			// 获取轮播数据接口
			async getBannerList() {
				// 请求后端接口
				const res = await uni.request({
					url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'
				});
				console.log(res.data);
				// 更新初始数据
				this.imgList = res.data.message;
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
<style lang="less">
	.swiper {
		height: 340rpx;

		image {
			width: 750rpx;
			height: 340rpx;
		}
	}


	.nav {
		display: flex;

		navigator {
			flex: 1;
			text-align: center;

			image {
				width: 128rpx;
				height: 140rpx;
				margin: 20rpx 0;
			}
		}
	}


	.floors {

		// 公共楼层
		.floor {
			.title {
				box-sizing: border-box;
				padding-top: 20rpx;
				padding-left: 16rpx;
				background-color: #f4f4f4;

				image {
					width: 100%;
					height: 60rpx;
				}
			}

			.imgs {
				padding: 20rpx 12rpx;
				overflow: hidden;

				.item {
					float: left;
					margin-right: 10rpx;
					margin-bottom: 10rpx;
				}

				.item image {
					width: 100%;
					height: 100%;
				}

				.item:nth-child(1) {
					width: 232rpx;
					height: 386rpx;
				}

				.item:nth-child(2),
				.item:nth-child(5) {
					width: 273rpx;
					height: 188rpx;
				}

				.item:nth-child(3),
				.item:nth-child(4) {
					width: 203rpx;
					height: 188rpx;
				}

				// 3 5 没有右侧margin
				.item:nth-child(3),
				.item:nth-child(5) {
					margin-right: 0;
				}
			}
		}

		// 第一楼层：less嵌套结构，在下面覆盖上面样式的话，注意嵌套结构一样；
		.floor:nth-child(1) {
			.imgs {

				// n:0; 2 3 4 5
				.item:nth-child(n+2) {
					width: 236rpx;
					height: 188rpx;
				}
			}
		}
	}
</style>