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
        <div class="labEmail">E-mail: business@talecast.ai</div>
        <div class="fra">
          <div class="closeicon"></div>
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
      show: false,
    }
  },

  methods: {
    showMsg() {
      this.show = true
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
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin-top: 160px;
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
}
</style>
