<template>
  <div class="content-index">
    <div class="topFrame">
      <img
        src="../assets/bgColor.png"
        class="bgFrame" />
      <img
        src="../assets/Logo1.png"
        class="logImg" />
      <div class="topFont">
        <div class="fontLine">Screen Recording,</div>
        <div class="fontLine1">Simplified by AI</div>
      </div>
      <div class="FontCreat">Creating high quality
        videos as easy as taking a note</div>
      <div class="fontSingP">-Simple and Powerful</div>
      <div class="btnCs">
        <div class="imgCs" @click="showMsg">
          Contact Us
        </div>
      </div>
      <div class="midCs">
        <img src="../assets/Edit1.png" class="imgCCs" />
      </div>
    </div>

    <div class="midFrame">
      Trusted by over 2,000 podcasters,
      <br />
      creators and marketers
    </div>

    <div class="photo">
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


    <div class="socendFrame">
      <div class="mainFrame">
        <div class="max-md:max-w-full">
          <div class="imgFr">
            <div class="halfF">
              <div class="UseL">
                <div class="useLab">Simplicity and intuitiveness of
                  video editing</div>
                <div class="labR">Just edit the text to make changes
                  to the video</div>
              </div>
            </div>
            <div class="halfR">
              <img loading="lazy" src="../assets/midR1.png" class="imgR" />
            </div>
          </div>
        </div>
        <div class="socImgFr">
          <div class="frameBox">
            <div class="frameL">
              <img loading="lazy" src="../assets/midR2.png" class="frameLI" />
            </div>
            <div class="frameR">
              <div class="frameRI">
                <div class="frameRILab">Convenience of video removal</div>
                <div class="frameRILab1">Easily delete the corresponding text
                  without complex operations</div>
              </div>
            </div>
          </div>
        </div>
        <div class="thirdFr">
          <div class="thirdBox">
            <div class="thirdFrame">
              <div class="thirdLabBox">
                <div class="thirdLab">Innovative and practical AI voice cloning feature
                </div>
                <div class="thirdLab1">
                  Easily make your video localization
                  <br />
                  globally
                </div>
              </div>
            </div>
            <div class="thirdImg">
              <img loading="lazy" src="../assets/midR3.png" class="thimg" />
            </div>
          </div>
        </div>
        <div class="fourFr">
          <div class="fourBox">
            <div class="fourImg">
              <img loading="lazy" src="../assets/midR4.png" class="fourI" />
            </div>
            <div class="fourLab">
              <div class="fourL">
                <div class="fourthL">Fluency and efficiency of adding
                  video through a document</div>
                <div class="fourthL1">Editing videos has never been easier
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="aiGCs">
			<div class="aiGCslab">AI-Generated Subtitles</div>
			<div class="aiGimg">
				Leverage our advanced AI technology to automatically generate subtitles in your videos, making your content accessible to a global audience.
			</div>
			<img loading="lazy" src="../assets/bigFrame.png" class="aiGimgI" />
		</div>

    <!-- <div class="topImg">
      <img src="../assets/first.jpg" />
      <img src="../assets/focus.png" />
      <img src="../assets/socend.jpg" />
      <img src="../assets/third.jpg" />
      <img src="../assets/fourth.jpg" />
      <div class="firstFrame">
        <div class="btn" @click="showMsg">
          <span class="btnLab">Contact Us</span>
        </div>
      </div>
    </div> -->
    <div class="main-content">
      <div class="title">TaleCast FAQ Page</div>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="1.What is Talecast?" name="1">
          <div>
            Talecast is a tool that leverages AI capabilities to enhance video
            recording and editing. It's designed to make the video creation
            process more efficient and accessible for users.
          </div>
        </el-collapse-item>
        <el-collapse-item title="2.Who is Talecast for?" name="2">
          <div>
            Talecast is primarily targeted at content creators, marketers,
            educators, and businesses who need to produce high-quality video
            content regularly. It caters to users of all skill levels, from
            beginners to professional video editors.
          </div>
        </el-collapse-item>
        <el-collapse-item title="3.What are the key features of Talecast?" name="3">
          <div>
            * AI-powered video recording: Talecast's AI can automatically adjust
            camera settings, lighting, and framing to ensure optimal video
            quality.
          </div>
          <div>
            * Intelligent video editing: The AI can suggest edits, transitions,
            and effects to enhance the video's overall polish and impact.
          </div>
          <div>
            * Automated transcription and subtitles: Talecast can transcribe
            audio and generate subtitles in multiple languages, improving
            accessibility.
          </div>
          <div>
            * Collaborative tools: Users can invite team members to review,
            comment, and contribute to the video editing process.
          </div>
          <div>
            * Cloud-based storage and sharing: All videos are stored securely in
            the cloud, and users can easily share their creations with clients
            or audience.
          </div>
        </el-collapse-item>
        <el-collapse-item title="4.How much does Talecast cost?" name="4">
          <div>
            Talecast offers various subscription plans to cater to different
            user needs and budgets:
          </div>
          <div>* Basic Plan: 15$/month</div>
          <div>* Professional Plan: 33$/month</div>
          <div>* Enterprise Plan: Custom pricing (contact sales)</div>
          <div>
            The plans differ in the number of features, storage space, and team
            collaboration capabilities.
          </div>
        </el-collapse-item>
        <el-collapse-item title="5.Is there a free trial available?" name="5">
          <div>
            Yes, Talecast offers a 7-day free trial period, allowing users to
            explore the software's features and capabilities before committing
            to a subscription.
          </div>
        </el-collapse-item>
        <el-collapse-item title="6.How do I get started with Talecast?" name="6">
          <div>
            To get started, simply visit the Talecast website and sign up for a
            free trial or choose the subscription plan that best fits your
            needs. The platform has an intuitive user interface, and there are
            plenty of tutorial resources available to help you get up and
            running quickly.
          </div>
        </el-collapse-item>
        <el-collapse-item title="7.What kind of support does Talecast offer?" name="7">
          <div>
            Talecast provides comprehensive customer support, including:
          </div>
          <div>* 24/7 email and chat support</div>
          <div>* Extensive documentation and user guides</div>
          <div>* Video tutorials and training webinars</div>
          <div>* Dedicated account managers for enterprise customers</div>
        </el-collapse-item>
      </el-collapse>

      <div class="bottomFrame">
        <div class="leftBotm">
          <div class="imgCs">
            <img src="../assets/Logo1.png" alt="" />
            <div class="left-content">
              <div>Talecast is an innovative</div>
              <div>cloud-based video creation</div>
              <div>platform, that empowers</div>
              <div>individuals and businesses to</div>
              <div>produce high-quality video</div>
              <div>content with ease.</div>
            </div>
          </div>
        </div>
        <div class="mainBotm">
          <div class="mainBotm-title">About Us</div>
          <div class="mainBotm-content" @click="handleAbout">
            <div>About Talecast</div>
            <div>Our Mission</div>
            <div>Our Story</div>
            <div>Our Values</div>
          </div>
        </div>
        <div class="rightBotm">
          <div class="labT">Contact Us</div>
          <div class="labtitus">Email:</div>
          <div class="labus">business@talecast.ai</div>
          <div class="labtitus">Contact number:</div>
          <div class="labus">(307)301-7154</div>
          <div class="labtitus">
            The mailing address of the profit corporation is:
          </div>
          <div class="labus">312 W 2nd St Unit #A4184</div>
          <div class="labus">Casper, WY 82601</div>
        </div>
      </div>
      <div v-show="show" class="BgFrame">
        <div class="MeshBg"></div>
        <div class="titlebg">
          <div class="labEmail">
            E-mail: business@talecast.ai Contact number:(307)301-7154
          </div>
          <div class="fra">
            <div class="closeicon" @click="closeBtn"></div>
          </div>
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
      show: false,
    };
  },
  mounted() {
    document.documentElement.scrollTop = 0;
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    showMsg() {
      this.show = true;
    },
    closeBtn() {
      this.show = false;
    },
    handleAbout() {
      this.$router.push({
        path: "/details",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.content-index {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1200px;
  padding-bottom: 50px;

  .topFrame {
    display: flex;
    overflow: hidden;
    position: relative;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5rem;
    padding-left: 2rem;
    padding-right: 5rem;
    padding-top: 0.625rem;
    width: 100%;
    min-height: 1309px;

    .bgFrame {
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      max-width: 100%;
      height: 100%;
      display: block;
      overflow-clip-margin: content-box;
      overflow: clip;
    }

    .logImg {
      display: block;
      width: 150px;
      max-width: 100%;
      align-self: flex-start;
      overflow-clip-margin: content-box;
      overflow: clip;
      z-index: 99;
    }

    .topFont {
      display: flex;
      font-weight: 800;
      margin-top: 7rem;
      margin-left: 3rem;
      position: relative;
      font-size: 3.75rem;
      line-height: 1;

      .fontLine {
        flex: 1 1 auto;
        font-weight: 800;
        font-size: 3.75rem;
        line-height: 1;
        display: block;
        color: rgb(0 0 0 1);
      }

      .fontLine1 {
        font-size: 3.75rem;
        line-height: 1;
        font-weight: 800;
        flex: 1 1 auto;
        text-align: right;
        color: rgb(167 139 250 1);
      }
    }

    .FontCreat {
      color: rgb(0 0 0 1);
      font-size: 1.875rem;
      line-height: 2.25rem;
      position: relative;
      margin-top: 4rem;
      text-align: center;
      display: block;
      unicode-bidi: isolate;
    }

    .fontSingP {
      color: rgb(0 0 0 1);
      font-size: 1.875rem;
      line-height: 2.25rem;
      text-align: center;
      margin-top: 2.25rem;
      position: relative;
      display: block;
      unicode-bidi: isolate;
    }

    .btnCs {
      color: rgb(255 255 255 1);
      font-size: 1.5rem;
      line-height: 2rem;
      overflow: hidden;
      max-width: 100%;
      width: 276px;
      height: 80px;
      position: relative;
      display: block;
      unicode-bidi: isolate;
      margin-top: 50px;
    }

    .imgCs {
      background-image: url("../assets/bottom.png");
      max-width: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      overflow-clip-margin: content-box;
      overflow: clip;
      color: rgb(255 255 255 1);
      font-size: 1.5rem;
      line-height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .midCs {
      color: rgb(255 255 255 1);
      border-color: rgb(167 139 250 1);
      padding: 0.625rem;
      background-color: rgb(255 255 255 1);
      border-style: solid;
      border-width: 10px;
      border-radius: 30px;
      justify-content: center;
      flex-direction: column;
      max-width: 1020px;
      width: 100%;
      display: flex;
      margin-top: 3.5rem;
      margin-bottom: 2rem;
      position: relative;

      .imgCCs {
        width: 100%;
        max-width: 100%;
        height: auto;
        display: block;
        overflow-clip-margin: content-box;
        overflow: clip;
      }
    }


  }

  .midFrame {
    line-height: 60px;
    font-size: 1.875rem;
    text-align: center;
    margin-top: -0.75rem;
    font-size: 30px;
    font-weight: 400;
  }

  .photo {
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
        margin-top: 1.5rem;
      }
    }
  }

  .socendFrame {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(244 244 245 1);
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 5rem;
    padding-bottom: 5rem;

    .mainFrame {
      background-color: rgb(255 255 255 1);
      padding-top: 3rem;
      padding-bottom: 3rem;
      padding-left: 3rem;
      padding-right: 3rem;
      border-radius: 60px;
      flex-direction: column;
      max-width: 1200px;
      width: 100%;
      display: flex;

      .imgFr {
        display: flex;

        .halfF {
          display: flex;
          width: 46%;
          flex-direction: column;

          .UseL {
            display: flex;
            flex-direction: column;
            align-self: stretch;
            color: rgb(0 0 0 1);
            margin-top: auto;
            margin-bottom: auto;

            .useLab {
              font-size: 3rem;
              font-weight: 600;
              line-height: 54px;
            }

            .labR {
              font-size: 1.25rem;
              line-height: 2.25rem;
              margin-top: 2.75rem;
            }
          }
        }

        .halfR {
          display: flex;
          flex-direction: column;
          width: 54%;
          margin-left: 1.25rem;

          .imgR {
            flex-grow: 1;
            width: 100%;
            max-width: 100%;
            height: auto;
            display: block;
            overflow-clip-margin: content-box;
            overflow: clip;
          }
        }
      }

      .socImgFr {
        margin-top: 2.75rem;

        .frameBox {
          display: flex;

          .frameL {
            display: flex;
            flex-direction: column;
            width: 50%;

            .frameLI {
              flex-grow: 1;
              width: 100%;
              max-width: 100%;
              height: auto;
              display: block;
            }
          }

          .frameR {
            display: flex;
            width: 50%;
            margin-left: 1.25rem;

            .frameRI {
              display: flex;
              flex-direction: column;
              align-self: stretch;
              margin-top: auto;
              margin-bottom: auto;

              .frameRILab {
                font-weight: 600;
                font-size: 3rem;
              }

              .frameRILab1 {
                line-height: 2.25rem;
                font-size: 1.25rem;
                margin-top: 3.5rem;
              }
            }
          }
        }
      }

      .thirdFr {
        margin-top: 2.75rem;

        .thirdBox {
          display: flex;

          .thirdFrame {
            display: flex;
            width: 44%;
            flex-direction: column;

            .thirdLabBox {
              display: flex;
              flex-direction: column;
              align-self: stretch;
              color: rgb(0 0 0 1);
              margin-top: auto;
              margin-bottom: auto;

              .thirdLab {
                font-weight: 600;
                font-size: 3rem;
                line-height: 54px;
              }

              .thirdLab1 {
                margin-top: 2.75rem;
                font-size: 1.25rem;
                line-height: 2.25rem;
              }
            }
          }

          .thirdImg {
            width: 56%;
            display: flex;
            margin-left: 1.25rem;
            flex-direction: column;

            .thimg {
              flex-grow: 1;
              width: 100%;
              max-width: 100%;
              aspect-ratio: 1.37;
              height: auto;
              display: block;
            }
          }
        }
      }

      .fourFr {
        margin-top: 2.75rem;

        .fourBox {
          display: flex;

          .fourImg {
            display: flex;
            width: 50%;
            flex-direction: column;

            .fourI {
              max-width: 100%;
              height: auto;
              display: block;
              width: 100%;
              flex-grow: 1;
              aspect-ratio: 1.37;
            }
          }

          .fourLab {
            display: flex;
            margin-left: 1.25rem;
            width: 50%;
            flex-direction: column;

            .fourL {
              color: rgb(0 0 0 1);
              display: flex;
              flex-direction: column;
              align-self: stretch;
              margin-top: auto;
              margin-bottom: auto;

              .fourthL {
                font-size: 3rem;
                font-weight: 600;
                line-height: 54px;
              }

              .fourthL1 {
                font-size: 1.25rem;
                margin-top: 2.75rem;
                line-height: 2.25rem;
              }
            }
          }
        }
      }
    }
  }

  .aiGCs{
        color: rgb(0 0 0 1);
        padding: 5rem;
        background-color: rgb(255 255 255 1);
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        .aiGCslab{
          font-weight: 600;
          margin-top: 3.5rem;
          line-height: 54.12px;
          font-size: 3rem;
        }
        .aiGimg{
          line-height: 2.25rem;
          font-size: 1.25rem;
          text-align: center;
          width: 722px;
          margin-top: 2.75rem;
          .aiGimgI{
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


  .topImg {
    position: relative;

    img {
      width: 100%;
    }

    .firstFrame {
      position: absolute;
      top: 7.8%;
      left: 50%;
      transform: translate(-50%, -7.8%);
      z-index: 1;

      .btn {
        width: 270px;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("../assets/bottom.png");
        cursor: pointer;

        .btnLab {
          font-size: 24px;
          color: #fff;
        }
      }
    }
  }

  /deep/.main-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 100px;

    .title {
      margin-top: 50px;
      margin-bottom: 50px;
      font-size: 44px;
      font-weight: bold;
    }

    .el-collapse {
      width: 100%;
      border: 0;

      .el-collapse-item {
        text-align: left;
        border: 0;
        width: 100%;
        border-radius: 10px;
        font-weight: bold;
        font-size: 20px;
        background-color: #f4f4f4;
        margin-bottom: 20px;

        .el-collapse-item__header {
          border-radius: 10px;
          border: 0;
          background-color: #f4f4f4;
          padding: 0px 20px;
          font-size: 20px;
          font-weight: 700px;
          font-weight: bold;
        }

        .el-collapse-item__wrap {
          border: 0;
        }

        .el-collapse-item__content {
          border: 0;
          padding: 0px 30px 20px 30px;
          border-radius: 0px 0px 10px 10px;
          background-color: #f4f4f4;
          font-weight: 400;
          font-size: 20px;
        }
      }
    }
  }

  .bottomFrame {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 150px;

    .leftBotm {
      height: 100%;
      line-height: 35px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      /* margin-left: 60px; */
      .left-content {
        padding: 0px 10px;
      }

      .imgCs {
        width: 100%;
        cursor: pointer;
      }
    }

    .mainBotm {
      line-height: 40px;
      margin-top: 10px;

      .mainBotm-title {
        font-size: 24px;
        font-weight: bold;
      }

      .mainBotm-content {
        div {
          cursor: pointer;
        }
      }
    }

    .rightBotm {
      margin-top: 10px;
      line-height: 35px;

      .labT {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .labus {
        font: 20px;
        font-weight: 400;
        color: #000;
        margin-bottom: 10px;
      }

      .labtitus {
        font: 20px;
        color: #363636;
        margin-bottom: 10px;
      }
    }
  }

  .BgFrame {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 999;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;

    .MeshBg {
      width: 100%;
      height: 100%;
      background: #000;
      opacity: 0.5;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .titlebg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 541px;
      height: 390px;
      background-image: url("../assets/titlebg.png");
      position: fixed;
    }

    .labEmail {
      width: 319px;
      font-size: 20px;
      font-weight: 700;
      color: #000;
      margin-top: 190px;
      text-align: center;
    }

    .fra {
      width: 0px;
      height: 0px;
    }

    .closeicon {
      background-image: url("../assets/close.png");
      width: 24px;
      height: 24px;
      margin-left: 75px;
      margin-top: -176px;
      cursor: pointer;
    }
  }
}
</style>
