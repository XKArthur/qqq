<template>
	<div class="content">
		<div class="frameTop">
			<div class="mt-2 topbar">
				<div class="wrapper">
					<div class="logo">
						<img src="../assets/Logo1.png" class="" />
					</div>
					<div class="navs items-center">
						<div class="nav-item">Pricing</div>
						<div class="nav-item">Log in</div>
						<div class="nav-item py-3 px-4 bg-violet-500 text-white rounded-xl">Sign up</div>
					</div>
				</div>
			</div>
			<h1 class="mt-32 text-6xl inter-black tracking-tight">
				Screen Recording,
				<span class="colored"
					>Simplified by AI
					<div id="floaticon_ai"></div
				></span>
			</h1>
			<h2 class="text-2xl mt-8 text-center text-slate-700 leading-10">
				Creating high quality videos as easy as taking a note <br />
				Simple and Powerful
			</h2>
			<div class="button-main inter-bold shadow-lg shadow-violet-500/20" @click="showMsg">Try it for free</div>
			<div class="hero-video">
				<video src="../assets/video/hero.mp4" width="100%" muted loop autoplay="true"></video>
			</div>
		</div>

		<div class="text-2xl text-center text-slate-900"><strong class="text-4xl inter-black">Trusted by </strong><br />over 2,000 podcasters, creators and marketers</div>

		<div class="frameTrustedBy">
			<div class="itemPhoto">
				<img loading="lazy" src="../assets/icon1.png" class="photoimg" />
				<div class="photolab">jck Torr</div>
			</div>
			<div class="itemPhoto">
				<img loading="lazy" src="../assets/icon2.png" class="photoimg" />
				<div class="photolab">Nikita Bauer</div>
			</div>
			<div class="itemPhoto">
				<img loading="lazy" src="../assets/icon3.png" class="photoimg" />
				<div class="photolab">Razvan Vezeteu</div>
			</div>
			<div class="itemPhoto">
				<img loading="lazy" src="../assets/icon4.png" class="photoimg" />
				<div class="photolab">Alexandra</div>
			</div>
			<div class="itemPhoto">
				<img loading="lazy" src="../assets/icon5.png" class="photoimg" />
				<div class="photolab">Coric Design</div>
			</div>
			<div class="itemPhoto">
				<img loading="lazy" src="../assets/icon6.png" class="photoimg" />
				<div class="photolab">Roman Klco</div>
			</div>
			<div class="itemPhoto">
				<img loading="lazy" src="../assets/icon7.png" class="photoimg" />
				<div class="photolab">Mark Johnston</div>
			</div>
		</div>

		<div class="frameSecond">
			<div class="mainFrame">
				<div class="floor">
					<div class="halfF">
						<div class="lines">
							<h3 class="line-main">Simple and intuitive video editing</h3>
							<div class="line-sub">
								Just edit the text to make <br />
								changes to the video
							</div>
						</div>
					</div>
					<div class="halfR bg-purple-50">
						<video src="../assets/video/floor_img_01.mp4" width="100%" muted loop autoplay></video>
					</div>
				</div>

				<div class="floor">
					<div class="halfR bg-teal-50">
						<video src="../assets/video/floor_img_02.mp4" width="100%" muted loop autoplay></video>
					</div>
					<div class="halfF">
						<div class="lines">
							<h3 class="line-main">Convenient video removal</h3>
							<div class="line-sub">Easily delete the corresponding text without complex operations</div>
						</div>
					</div>
				</div>

				<div class="floor">
					<div class="halfF">
						<div class="lines">
							<h3 class="line-main">Innovative and practical AI voice cloning</h3>
							<div class="line-sub">Easily make your video localization globall</div>
						</div>
					</div>
					<div class="halfR bg-sky-50">
						<video src="../assets/video/floor_img_03.mp4" width="100%" muted loop autoplay></video>
					</div>
				</div>

				<div class="floor">
					<div class="halfR bg-red-50">
						<video src="../assets/video/floor_img_04.mp4" width="100%" muted loop autoplay></video>
					</div>
					<div class="halfF">
						<div class="lines">
							<h3 class="line-main">Fluent and efficient text to video feature</h3>
							<div class="line-sub">Editing videos has never been easier</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="frameAIGS">
			<h2 class="text-6xl inter-black">AI-Generated Subtitles</h2>
			<div class="mt-8 mb-16 text-xl text-center leading-8">
				Leverage our advanced AI technology to automatically generate subtitles <br />
				in your videos, making your content accessible <br />
				to a global audience.
			</div>
			<img loading="lazy" src="../assets/bigFrame.png" class="aiGimgI" />
		</div>

		<div class="frameFunc flex flex-col items-center">
			<div class="mt-40 text-6xl inter-black text-center text-black max-md:max-w-full max-md:text-4xl">Make your video stand out</div>
			<div class="mt-6 text-2xl font-medium text-center text-black">Edit video super easy</div>
			<div class="mt-20 w-full max-w-[1200px] max-md:mt-10 max-md:max-w-full">
				<div class="flex gap-5 max-md:flex-col max-md:gap-0">
					<div class="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
						<div class="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
							<div class="info-block zoom" :class="showFuncIndex === 0?'active':''" @click="showFunc(0)">
								<div class="relative text-2xl inter-bold">Zoom easily</div>
								<div class="relative mt-4 text-base font-medium leading-6">
									This feature uses AI to automatically adjust the camera framing and zoom level, ensuring your videos have a polished, professional look.
								</div>
							</div>
							<div class="info-block layout mt-10" :class="showFuncIndex === 1?'active':''" @click="showFunc(1)">
								<div class="relative text-2xl inter-bold">Multi Layouts</div>
								<div class="relative mt-4 text-base font-medium leading-6">
									Access a library of pre-built, visually appealing layout templates and smooth transition effects to elevate the production value of your videos.
								</div>
							</div>
							<div class="info-block branding mt-10" :class="showFuncIndex === 2?'active':''" @click="showFunc(2)">
								<div class="relative text-2xl inter-bold">Customize your branding</div>
								<div class="relative mt-4 text-base font-medium leading-6">Incorporate your company's logo, colors, and branding assets seamlessly into your video.</div>
							</div>
						</div>
					</div>
					<div class="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
						<div class="shrink-0 mx-auto max-w-full bg-neutral-50 h-[620px] rounded-[32px] w-[680px] max-md:mt-10">
							<div class="func-image" :class="showFuncIndex === 0?'active':''" >
								<img src="../assets/frameFunc/zoom.png" alt="" />
							</div>
							<div class="func-image" :class="showFuncIndex === 1?'active':''" >
								<img src="../assets/frameFunc/layout.png" alt="" />
							</div>
							<div class="func-image" :class="showFuncIndex === 2?'active':''" >
								<img src="../assets/frameFunc/branding.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="frameFAQ">
			<h2 class="title text-6xl inter-black">FAQ</h2>
			<el-collapse v-model="activeNames" @change="handleChange">
				<el-collapse-item title="1.What is Talecast?" name="1" style="width: 100%">
					<div>
						Talecast is a tool that leverages AI capabilities to enhance video recording and editing. It's designed to make the video creation process more efficient and accessible for
						users.
					</div>
				</el-collapse-item>
				<el-collapse-item title="2.Who is Talecast for?" name="2">
					<div>
						Talecast is primarily targeted at content creators, marketers, educators, and businesses who need to produce high-quality video content regularly. It caters to users of all
						skill levels, from beginners to professional video editors.
					</div>
				</el-collapse-item>
				<el-collapse-item title="3.What are the key features of Talecast?" name="3">
					<div>* AI-powered video recording: Talecast's AI can automatically adjust camera settings, lighting, and framing to ensure optimal video quality.</div>
					<div>* Intelligent video editing: The AI can suggest edits, transitions, and effects to enhance the video's overall polish and impact.</div>
					<div>* Automated transcription and subtitles: Talecast can transcribe audio and generate subtitles in multiple languages, improving accessibility.</div>
					<div>* Collaborative tools: Users can invite team members to review, comment, and contribute to the video editing process.</div>
					<div>* Cloud-based storage and sharing: All videos are stored securely in the cloud, and users can easily share their creations with clients or audience.</div>
				</el-collapse-item>
				<el-collapse-item title="4.How much does Talecast cost?" name="4">
					<div>Talecast offers various subscription plans to cater to different user needs and budgets:</div>
					<div>* Basic Plan: 15$/month</div>
					<div>* Professional Plan: 33$/month</div>
					<div>* Enterprise Plan: Custom pricing (contact sales)</div>
					<div>The plans differ in the number of features, storage space, and team collaboration capabilities.</div>
				</el-collapse-item>
				<el-collapse-item title="5.Is there a free trial available?" name="5">
					<div>Yes, Talecast offers a 7-day free trial period, allowing users to explore the software's features and capabilities before committing to a subscription.</div>
				</el-collapse-item>
				<el-collapse-item title="6.How do I get started with Talecast?" name="6">
					<div>
						To get started, simply visit the Talecast website and sign up for a free trial or choose the subscription plan that best fits your needs. The platform has an intuitive user
						interface, and there are plenty of tutorial resources available to help you get up and running quickly.
					</div>
				</el-collapse-item>
				<el-collapse-item title="7.What kind of support does Talecast offer?" name="7">
					<div>Talecast provides comprehensive customer support, including:</div>
					<div>* 24/7 email and chat support</div>
					<div>* Extensive documentation and user guides</div>
					<div>* Video tutorials and training webinars</div>
					<div>* Dedicated account managers for enterprise customers</div>
				</el-collapse-item>
			</el-collapse>
		</div>

		<div class="frameBottom flex gap-5 justify-between items-start pt-24 pb-10 bg-white max-md:flex-wrap max-md:px-5">
			<div class="flex flex-col text-base leading-10 text-black">
				<img loading="lazy" srcset="../assets/Logo1.png" class="w-40 max-w-full aspect-[3.23]" />
				<div class="mt-8 font-bold">ⓒ 2024 Talecast. All rights reserved</div>
				<div class="flex gap-5">
					<div class="flex-auto">Privacy Policy</div>
					<div class="flex-auto">Terms of Service</div>
				</div>
			</div>
			<div class="flex flex-col">
				<div class="flex gap-5 self-end">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b3f285d5eb3e3195b7cdd9b110da6e5b258ce49eb1be13407c01d15f45f70dd?"
						class="shrink-0 aspect-square w-[50px]"
					/>
					<div class="flex justify-center items-center rounded-full bg-zinc-300 h-[50px] w-[50px]">
						<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f918163ce3b02b183c6a1de94516f4b0b55572991092c620eccb820aae92846a?" class="aspect-square w-[50px]" />
					</div>
				</div>
				<div class="mt-8 text-base leading-10 text-right text-black">
					Feel free to contact us
					<br />
					<span class="font-bold">business@talecast.ai</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeNames: [],
			showFuncIndex: 0,
			show: false
		}
	},
	mounted() {
		document.documentElement.scrollTop = 0
	},
	methods: {
		handleChange(val) {
			console.log(val)
		},
		showMsg() {
			this.show = true
		},
		closeBtn() {
			this.show = false
		},
		handleAbout() {
			this.$router.push({
				path: "/details"
			})
		},
		showFunc(val) {
			this.showFuncIndex = val

		}
	}
}
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 1200px;
	padding-bottom: 50px;

	.frameTop {
		display: flex;
		overflow: hidden;
		position: relative;
		flex-direction: column;
		align-items: center;
		width: 100%;
		min-height: 1309px;
		background-size: cover;
		background-image: url("../assets/bgColor.png");

		.topbar {
			width: 100%;

			.wrapper {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 0 auto;
				width: 1200px;
				height: 60px;

				.logo {
					width: 150px;
					height: 46px;

					img {
						width: 100%;
					}
				}

				.navs {
					display: flex;

					.nav-item {
						margin-left: 2rem;
						font-size: 1.1rem;
						font-family: "Inter-bold", sans-serif;
					}
				}
			}
		}

		.topFont {
			display: flex;
			font-weight: 800;
			margin-top: 7rem;
			margin-left: 3rem;
			position: relative;
			font-size: 3.75rem;
			line-height: 1;
		}

		.button-main {
			display: block;
			position: relative;
			margin-top: 2rem;
			width: 276px;
			max-width: 100%;
			color: #fff;
			font-size: 1.5rem;
			line-height: 64px;
			text-align: center;
			overflow: hidden;
			unicode-bidi: isolate;
			border-radius: 50px;
			background: linear-gradient(251deg, #fc5eff 0%, #9f25ff 30%, #2961ff 60%, #367aff 100%), #a670ff;
			cursor: pointer;
		}

		.colored {
			position: relative;
			background-image: linear-gradient(251deg, #fc5eff 0%, #9f25ff 30%, #2961ff 60%, #367aff 100%);
			background-clip: text;
			-webkit-background-clip: text;
			color: transparent;
			font-family: "Inter-black", sans-serif;

			#floaticon_ai {
				position: absolute;
				right: -30px;
				top: -10px;
				width: 40px;
				height: 40px;
				background-image: url("../assets/icon/AI.png");
				background-size: cover;
			}
		}

		.hero-video {
			position: relative;
			display: flex;
			justify-content: center;
			flex-direction: column;
			margin-top: 6rem;
			margin-bottom: 2rem;
			width: 100%;
			max-width: 960px;
			border-style: solid;
			border-width: 10px;
			border-radius: 30px;
			border-color: rgba(166, 112, 255, 0.1);
			overflow: hidden;
		}
	}

	.frameTrustedBy {
		padding-left: 1.25rem;
		padding-right: 1.25rem;
		font-size: 1.25rem;
		line-height: 60px;
		color: rgb(39 39 42 1);
		text-align: center;
		justify-content: space-between;
		align-items: flex-start;
		max-width: 1157px;
		width: 100%;
		display: flex;
		margin-top: 4rem;

		.itemPhoto {
			display: flex;
			flex-direction: column;
			align-items: center;
			align-self: stretch;

			.photoimg {
				width: 100px;
				aspect-ratio: 1 / 1;
				max-width: 100%;
				text-align: center;
				font-size: 1.25rem;
				line-height: 60px;
				color: rgb(39 39 42 1);
				height: auto;
			}

			.photolab {
				font-size: 1rem;
			}
		}
	}

	.frameSecond {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 5rem;
		padding-bottom: 5rem;

		.mainFrame {
			display: flex;
			flex-direction: column;
			padding: 3rem 0;
			max-width: 1200px;
			width: 100%;
			border-radius: 60px;

			.floor {
				display: flex;
				justify-content: space-between;
				margin-bottom: 4rem;

				.halfF {
					display: flex;
					width: 33%;
					flex-direction: column;
					background-color: #fafafa;
					border-radius: 3rem;
					align-items: center;

					.lines {
						display: flex;
						flex-direction: column;
						align-items: center;
						color: rgb(0 0 0 1);
						margin-top: auto;
						margin-bottom: auto;
						width: 80%;

						.line-main {
							font-size: 2.5rem;
							font-family: "Inter-black", sans-serif;
							text-align: center;
							line-height: 54px;
						}

						.line-sub {
							margin-top: 2.75rem;
							color: #475569;
							font-size: 1.25rem;
							line-height: 1.75rem;
							text-align: center;
						}
					}
				}

				.halfR {
					display: flex;
					justify-content: center;
					width: 64%;
					height: 400px;
					border-radius: 3rem;

					.img {
						height: 100%;
					}
				}
			}
		}
	}

	.frameAIGS {
		color: rgb(0 0 0 1);
		padding: 5rem;
		background-color: rgb(255 255 255 1);
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;

		.aiGimg {
			.aiGimgI {
				max-width: 1200px;
				width: 100%;
				margin-bottom: 0.5rem;
				margin-top: 5rem;
				height: auto;
				display: block;
				aspect-ratio: 1.67;
			}
		}
	}

	.frameFunc {
		width: 1200px;

		.info-block {
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0 4rem 0 2.5rem;
			width: 480px;
			height: 180px;
			background-color: #fafafa;
			border-radius: 2rem;
			opacity: 0.4;
			transition: 0.5s ease;
			cursor: pointer;

			&.active {
				opacity: 1.0;
			}

			&:hover {
				opacity: 1.0;
			}

			&.zoom {
				background-image: url("../assets/frameFunc/Background/zoom.jpg");
				background-size: cover;
			}

			&.layout {
				background-image: url("../assets/frameFunc/Background/Layouts.jpg");
				background-size: cover;
			}

			&.branding {
				background-image: url("../assets/frameFunc/Background/Logo.jpg");
				background-size: cover;
			}
		}

		.func-image {
			position: absolute;
			opacity: 0;
			transition: 0.5s ease;

			&.active {
				opacity: 1;
			}
		}
	}

	/deep/.frameFAQ {
		width: 100%;
		max-width: 1200px;
		display: flex;
		flex-direction: column;
		align-items: center;

		.title {
			margin-top: 10rem;
			margin-bottom: 50px;
		}

		.el-collapse {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			width: 100%;
			border: 0;

			.el-collapse-item {
				display: inline-block;
				margin-bottom: 20px;
				width: 49%;
				text-align: left;
				font-weight: bold;
				font-size: 20px;
				border: 0;
				border-radius: 10px;
				background-color: #f4f4f4;

				.el-collapse-item__header {
					padding: 20px 40px;
					height: auto;
					font-size: 20px;
					font-weight: bold;
					border: 0;
					border-radius: 10px;
					background-color: #f4f4f4;
				}

				.el-collapse-item__wrap {
					border: 0;
				}

				.el-collapse-item__content {
					border: 0;
					padding: 0px 60px 20px 60px;
					border-radius: 0px 0px 10px 10px;
					background-color: #f4f4f4;
					font-weight: 400;
					font-size: 1rem;
				}
			}
		}
	}

	.frameBottom {
		width: 1200px;
	}
}
</style>
