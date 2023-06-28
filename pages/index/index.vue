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
					<navigator url="" v-for="(item,index) in navList" :key="item.name">
						<image :src="item.image_src" />
					</navigator>
				</view>

				<!-- 楼层数据 -->
				<view class="floors">
					<view class="floor" v-for="(item,index) in floorList" :key="index">
						<view class="title">
							<image :src="item.floor_title.image_src" />
						</view>
						<view class="imgs">
							<navigator url="" class="item" v-for="(el,index) in item.product_list">
								<image :src="el.image_src" />
							</navigator>
						</view>
					</view>
				</view>
				<!-- 回到顶部 -->
				<view class="goTop icon-top" v-show="goTopShow" @tap="goTop"></view>
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
				imgList: [],
				navList: [],
				floorList: [],
				goTopShow: false
			}
		},
		onLoad() {
			this.getBannerList()
			this.getNavList()
			this.getFloorList()
		},
		components: {
			search
		},
		methods: {
			// 获取轮播数据接口
			async getBannerList() {
				const data = await this.$request({
					url: '/home/swiperdata'
				});
				// 更新初始数据
				this.imgList = data.message;
			},
			// 获取导航数据接口
			async getNavList() {
				const res = await this.$request({
					url: '/home/catitems'
				})
				console.log(res);
				this.navList = res.message
			},
			// 获取楼层数据接口
			async getFloorList() {
				const res = await this.$request({
					url: '/home/floordata'
				})
				console.log(res);
				this.floorList = res.message
			},
			//下拉刷新
			async onPullDownRefresh() {
				await Promise.all([this.getBannerList(), this.getNavList(), this.getFloorList()])
				uni.stopPullDownRefresh()
			},
			//回到顶部的显隐
			onPageScroll(e) {
				this.goTopShow = e.scrollTop > 300
			},
			//点击回到顶部
			goTop() {
				uni.pageScrollTo({
					scrollTop: 0
				})
			}
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
	.goTop {
		position: fixed;
		bottom: 30rpx;
		/* #ifdef H5 */
		bottom: 65px;
		/* #endif */
		right: 30rpx;

		display: flex;
		justify-content: center;
		align-items: center;
		width: 100rpx;
		height: 100rpx;
		font-size: 48rpx;
		color: #666;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.8);
	}

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