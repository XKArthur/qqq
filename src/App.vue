<template>
  <div class="main">
    <div id="app">
      <div class="firstFrame">
        <div class="btn" @click="showMsg">
          <span class="btnLab">Contact Us</span>
        </div>
      </div>
      <div>
        <img src="./assets/first.jpg">
      </div>
      <div>
        <img src="./assets/socend.jpg">
      </div>
      <div>
        <img src="./assets/third.jpg">
      </div>
      <div>
        <img src="./assets/fourth.jpg">
      </div>
      <el-collapse v-model="activeNames" @change="handleChange" class="collapseSc">
        <el-collapse-item class="titleTxt" title="1.What is Talecast?" name="1">
          <div>Talecast is a tool that leverages AI capabilities to enhance video recording and editing. It's designed
            to make</div>
          <div>the video creation process more efficient and accessible for users.</div>
        </el-collapse-item>
        <el-collapse-item class="titleTxt" title="2.Who is Talecast for?" name="2">
          <div>Talecast is primarily targeted at content creators, marketers, educators, and businesses who need to
            produce</div>
          <div>high-quality video content regularly. It caters to users of all skill levels, from beginners to
            professional video</div>
          <div>editors.</div>
        </el-collapse-item>
        <el-collapse-item class="titleTxt" title="3.What are the key features of Talecast?" name="3">
          <div>*AI-powered video recording: Talecast's AI can automatically adjust camera settings, lighting, and
            framing</div>
          <div> to ensure optimal video quality.</div>
          <div>*Intelligent video editing: The AI can suggest edits, transitions, and effects to enhance the video's
            overall</div>
          <div> polish and impact.</div>
          <div>*Automated transcription and subtitles: Talecast can transcribe audio and generate subtitles in multiple
          </div>
          <div> languages, improving accessibility.</div>
          <div>*Collaborative tools: Users can invite team members to review, comment, and contribute to the video</div>
          <div> editing process.</div>
          <div>*Cloud-based storage and sharing: All videos are stored securely in the cloud, and users can easily share
          </div>
          <div> their creations with clients or audience.</div>
        </el-collapse-item>
        <el-collapse-item class="titleTxt" title="4.How much does Talecast cost?" name="4">
          <div>Talecast offers various subscription plans to cater to different user needs and budgets:</div>
          <div>*Basic Plan: $/month</div>
          <div>*Professional Plan: $/month</div>
          <div>*Enterprise Plan: Custom pricing (contact sales)</div>
          <div>The plans differ in the number of features, storage space, and team collaboration capabilities.</div>
        </el-collapse-item>
        <el-collapse-item class="titleTxt" title="5.Is there a free trial available?" name="5">
          <div>Yes, Talecast offers a 7-day free trial period, allowing users to explore the software's features and
            capabilities</div>
          <div>before committing to a subscription.</div>
        </el-collapse-item>
        <el-collapse-item class="titleTxt" title="6.How do I get started with Talecast?" name="6">
          <div>To get started, simply visit the Talecast website and sign up for a free trial or choose the subscription
            plan</div>
          <div>that best fits your needs. The platform has an intuitive user interface, and there are plenty of tutorial
          </div>
          <div>resources available to help you get up and running quickly.</div>
        </el-collapse-item>
        <el-collapse-item class="titleTxt" title="7.What kind of support does Talecast offer?" name="7">
          <div>Talecast provides comprehensive customer support, including:</div>
          <div>*24/7 email and chat support</div>
          <div>*Extensive documentation and user guides</div>
          <div>*Video tutorials and training webinars</div>
          <div>*Dedicated account managers for enterprise customers</div>
        </el-collapse-item>
      </el-collapse>
      <div class="bottomFrame">
        <div class="leftBotm">
          <div class="imgCs">
            <img src="./assets/Logo1.png" alt="">
          </div>
        </div>
        <div class="rightBotm">
          <div class="labT">Contact Us</div>

          <div class="labtitus">Email:</div>
          <div class="labus">business@talecast.ai</div>
          <div class="labtitus">Contact number:</div>
          <div class="labus">(307)301-7154</div>
          <div class="labtitus">The mailing address of the profit corporation is:</div>
          <div class="labus">312 W 2nd St Unit #A4184</div>
          <div class="labus">Casper, WY 82601</div>
        </div>
      </div>
    </div>
    <div v-if="show" class="BgFrame">
      <div class="MeshBg"></div>
      <div class="titlebg">
        <div class="labEmail">E-mail: business@talecast.ai
          Contact number:(307)301-7154</div>
        <div class="fra">
          <div class="closeicon" @click="closeBtn"></div>
        </div>
      </div>
    </div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      activeNames: ['1'],
      show: false,
    }
  },

  methods: {
    handleChange(val) {
      console.log(val);
    },
    showMsg() {
      this.show = true
    },
    closeBtn() {
      this.show = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main {
  position: relative;
  width: 100%;
  /* height: 100%; */
  height: calc(100vh - 200px);
}

.firstFrame {
  height: 0px;
  z-index: 3;
}

.btn {
  width: 270px;
  height: 75px;
  display: flex;
  justify-content: center;
  margin-top: 455px;
  align-items: center;
  background-image: url('./assets/bottom.png');
  cursor: pointer
}

.btnLab {
  font-size: 24px;
  color: #fff;

}

.bottomFrame {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;

  justify-content: center;
}

.leftBotm {
  width: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* margin-left: 60px; */
}

.imgCs {
  margin-left: 170px;
}

.rightBotm {
  width: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 120px;
}

.labT {
  font-size: 24px;
  color: #000;
  margin-bottom: 20px;
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
}

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
  background-image: url('./assets/titlebg.png');
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
  background-image: url('./assets/close.png');
  width: 24px;
  height: 24px;
  margin-left: 75px;
  margin-top: -176px;
  cursor: pointer;
}

.titleTxt {
  text-align: left;
  width: 100%;
  /* height: 90px; */
  border-radius: 20px;
  border: 1px;
  font-weight: 700px;
  font-size: 20px;
  background-color: #f4f4f4;
  margin-top: 20px;
  left: 100px;
}

.collapseSc {
  border-top: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
}
</style>
