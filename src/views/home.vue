<template>
  <div class="content-index">
    <div class="topImg">
      <img src="../assets/first.jpg" />
      <img src="../assets/socend.jpg" />
      <img src="../assets/third.jpg" />
      <img src="../assets/fourth.jpg" />
      <div class="firstFrame">
        <div class="btn" @click="showMsg">
          <span class="btnLab">Contact Us</span>
        </div>
      </div>
    </div>
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
        <el-collapse-item
          title="3.What are the key features of Talecast?"
          name="3"
        >
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
          <div>* Basic Plan: $/month</div>
          <div>* Professional Plan: $/month</div>
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
        <el-collapse-item
          title="6.How do I get started with Talecast?"
          name="6"
        >
          <div>
            To get started, simply visit the Talecast website and sign up for a
            free trial or choose the subscription plan that best fits your
            needs. The platform has an intuitive user interface, and there are
            plenty of tutorial resources available to help you get up and
            running quickly.
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="7.What kind of support does Talecast offer?"
          name="7"
        >
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
          <div class="labus"></div>
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
      margin-top: 160px;
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

