<template>
	<view>
		<!-- 搜索 -->
		<search />

		<!-- 分类 -->
		<view class="category">
			<!-- 一级导航 -->
			<view class="sup">
				<scroll-view scroll-y>
					<!-- class="active" -->
					<text v-for="(el,index) in allList" :key="el.cat_id">{{el.cat_name}}</text>
				</scroll-view>
			</view>


			<!-- 二三级别 -->
			<view class="sub">
				<scroll-view scroll-y>
					<!-- 封面图 -->
					<image src="http://static.botue.com/ugo/uploads/category.png" class="thumb"></image>

					<!-- 二级 -->
					<view class="children">
						<view class="title">电视</view>

						<!-- 三级 -->
						<view class="brands">
							<navigator url="/pages/list/index">
								<image src=""></image>
								<text>长虹</text>
							</navigator>
							<navigator url="/pages/list/index">
								<image src=""></image>
								<text>海信</text>
							</navigator>
							<navigator url="/pages/list/index">
								<image src=""></image>
								<text>小米</text>
							</navigator>
						</view>
					</view>

					<!-- 二级 -->
					<view class="children">
						<view class="title">空调</view>

						<!-- 三级 -->
						<view class="brands">
							<navigator url="/pages/list/index">
								<image src=""></image>
								<text>长虹</text>
							</navigator>
							<navigator url="/pages/list/index">
								<image src=""></image>
								<text>海信</text>
							</navigator>
							<navigator url="/pages/list/index">
								<image src=""></image>
								<text>小米</text>
							</navigator>
						</view>
					</view>

				</scroll-view>
			</view>

		</view>

	</view>
</template>


<script>
	import search from "@/components/search/index.vue";
	export default {
		components: {
			search,
		},
		data() {
			return {
				allList: []
			}
		},
		onLoad() {
			this.getAllList()
		},
		methods: {
			async getAllList() {
				const res = await this.$request({
					url: '/categories'
				})
				this.allList = res.message
			}
		}
	};
</script>


<style scoped lang="less">
	scroll-view {
		height: 100%;
	}

	.category {
		display: flex;
		width: 100%;
		position: absolute;
		top: 100rpx;
		bottom: 0;

		.sup {
			width: 196rpx;
			background-color: #f4f4f4;

			text {
				display: block;
				height: 100rpx;
				text-align: center;
				line-height: 100rpx;
				font-size: 27rpx;
				color: #333;
				border-bottom: 1rpx solid #eee;

				&:last-child {
					border-bottom: none;
				}

				&.active {
					background-color: #fff;
					color: #ea4451;
					position: relative;

					&::before {
						content: "";
						display: block;
						width: 8rpx;
						height: 60rpx;
						transform: translateY(-50%);
						background-color: #ea4451;

						position: absolute;
						left: 0;
						top: 50%;
					}
				}
			}
		}

		.sub {
			flex: 1;
			padding: 20rpx 18rpx;

			.thumb {
				width: 100%;
				height: 180rpx;
			}

			.children {
				text-align: center;
				color: #333;

				.title {
					display: inline-block;
					margin: 40rpx 0 20rpx;
					font-size: 30rpx;

					&::before {
						content: "/";
						margin-right: 20rpx;
						color: #666;
					}

					&::after {
						content: "/";
						margin-left: 20rpx;
						color: #666;
					}
				}
			}

			.brands {
				display: flex;
				flex-wrap: wrap;

				navigator {
					width: 33%;
					margin-bottom: 20rpx;
				}

				image {
					width: 120rpx;
					height: 120rpx;
				}

				text {
					display: block;
					font-size: 24rpx;
				}
			}
		}
	}
</style>