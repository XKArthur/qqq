<template>
  <div ref="details" class="details">
    <!-- <img @click="handleGo" class="log" src="../assets/Logo1.png" alt="" />
    <img class="imgs" src="../assets/seek1.png" alt="" />
    <img class="imgs" src="../assets/seek2.png" alt="" />
    <img class="imgs" src="../assets/seek3.png" alt="" /> -->
    <div class="topFrame">
      <img loading="lazy" src="../assets/Logo1.png" class="frameImg" @click="handleGo"/>
      <div class="topLab">About Talecast</div>
      <div class="topLab1">
        Talecast is an innovative cloud-based video creation platform,
        <br />
        that empowers individuals and businesses to produce high-quality video content with ease.
        <br />
        Leveraging the power of artificial intelligence (AI),
        <br />
        Talecast streamlines the video recording and editing process,
        <br />
        allowing users to focus on their creative vision without getting bogged down by technical complexities.
      </div>
      <img loading="lazy" src="../assets/frameSoc.png" class="topImg" />
    </div>

    <div class="midFrame">
      <div class="frameBox">
        <div class="frameLab">
          <div class="frameL">
            <div class="frameL1">
              <div class="frameitem">Our Mission</div>
            </div>
            <div class="frameL2">
              <div class="frameitem1">
                At Talecast, our mission is to democratize video production and make it accessible to everyone. We
                believe that the ability to create engaging, professional-looking
                videos should not be limited to those with extensive technical expertise or hefty budgets. By harnessing
                the latest advancements in AI technology, we aim to
                revolutionize the way people approach video creation, making it a seamless and enjoyable experience for
                users of all skill levels.
              </div>
            </div>
          </div>
        </div>
        <div class="frameMid">
          <div class="frameBox1">
            <div class="frameBox2">
              <div class="frameBox3">
                Talecast was founded by a team of passionate entrepreneurs and technologists who recognized the growing
                demand for video content across various industries. Frustrated
                by the steep learning curve and time-consuming nature of traditional video editing tools, they set out
                to develop a solution that would empower creators, businesses,
                and professionals to bring their ideas to life with ease.
                <br />
                Through extensive research, prototyping, and collaboration with industry experts, the Talecast team has
                developed a cutting-edge platform that combines the power of AI
                with an intuitive, user-friendly interface. Our goal is to remove the barriers to video production,
                allowing our users to focus on their creativity and express their
                unique stories and messages.
              </div>
            </div>
            <div class="frameBox5">
              <div class="frameBox4">
                Our Story</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottomFrame">
      <div class="bottomBig">Our Values</div>
      <div class="sceFrame">
        <div class="sceFrame1">
          <div class="sceFrame2">
            <div class="sceFrame3">
              <div>Innovation:</div>
              <div class="sceFrame4">Simplicity:</div>
            </div>
          </div>
          <div class="thirdFrame1">
            <div class="thirdFrame2">
              <div>
                We are committed to continuously pushing the boundaries of what's possible in video creation. Our team
                of AI and software engineers work tirelessly to integrate the
                latest advancements in technology into our platform, ensuring that our users have access to the most
                powerful and efficient tools available.
              </div>
              <div class="thirdFrame3">
                We understand that complex software can be daunting, which is why we've designed Talecast to be
                remarkably easy to use. Our intuitive interface and AI-driven features
                are designed to streamline the video creation process, making it accessible to users of all backgrounds
                and skill levels.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="thirdBox">
        <div class="thirdBox1">
          <div class="thirdBox2">
            <div
              class="thirdBox3">
              <div>Collaboration:</div>
              <div class="thirdBox4">Empowerment:</div>
            </div>
          </div>
          <div class="thirdBox5">
            <div class="thirdBox6">
              <div>
                We believe that great things happen when people work together. Talecast's collaborative features allow
                teams to share ideas, provide feedback, and collectively bring
                their creative visions to life, fostering a sense of unity and shared accomplishment.
              </div>
              <div class="thirdBox7">
                At the heart of Talecast is a deep-rooted desire to empower our users. By eliminating the technical
                barriers to video production, we aim to give content creators,
                marketers, educators, and businesses the tools they need to amplify their voices and reach their
                audiences more effectively.
                <br />
                Join us on our mission to transform the world of video creation. Experience the power of Talecast and
                unlock your full creative potential.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="fourBox">
        Join us on our mission to transform
        <br />
        the worldof video creation.
        <br />
        Experience the power of Talecast and unlock your full creative potential.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.documentElement.scrollTop = 0;
  },
  methods: {
    handleGo() {
      this.$router.push({
        path: "/home",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.details {
  width: 100%;
  height: 100%;
  position: relative;

  .log {
    width: 150px;
    position: absolute;
    cursor: pointer;
    top: 10px;
    left: 10px;
  }

  img {
    width: 100%;
  }
}

.topFrame {
  color: rgb(0 0 0 1);
  padding-top: 0.625rem;
  padding-right: 5rem;
  padding-left: 2rem;
  padding-bottom: 3rem;
  background-color: rgb(255 255 255 1);
  align-items: center;
  flex-direction: column;
  width: 100%;
  display: flex;

  .frameImg {
    align-self: flex-start;
    max-width: 100%;
    width: 150px;
    aspect-ratio: 2.5;
    height: auto;
    display: block;
    cursor: pointer;
  }

  .topLab {
    margin-top: 6rem;
    font-size: 3rem;
    font-weight: 600;
    line-height: 54px;
  }

  .topLab1 {
    line-height: 2.25rem;
    font-size: 1.25rem;
    text-align: center;
    width: 899px;
    margin-top: 6rem;
  }

  .topImg {
    display: block;
    margin-top: 5rem;
    height: auto;
    width: 100%;
    max-width: 1200px;
  }
}

.midFrame {
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 4rem;
  padding-right: 4rem;
  background-color: rgb(255 255 255 1);
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;

  .frameBox {
    display: flex;
    width: 100%;
    max-width: 1112px;
    flex-direction: column;

    .frameLab {
      align-self: center;
      max-width: 1068px;
      width: 100%;

      .frameL {
        display: flex;

        .frameL1 {
          display: flex;
          width: 42%;
          flex-direction: column;

          .frameitem {
            color: rgb(0 0 0 1);
            line-height: 54px;
            font-weight: 600;
            font-size: 3rem;
            align-self: stretch;
            margin-top: auto;
            margin-bottom: auto;
          }
        }

        .frameL2 {
          margin-left: 1.25rem;
          display: flex;
          width: 58%;
          flex-direction: column;

          .frameitem1 {
            font-size: 1.25rem;
            line-height: 2.25rem;
            color: rgb(0 0 0 1);
          }
        }
      }
    }

    .frameMid {
      margin-top: 10rem;

      .frameBox1 {
        display: flex;

        .frameBox2 {
          display: flex;
          width: 72%;
          flex-direction: column;

          .frameBox3 {
            line-height: 2.25rem;
            font-size: 1.25rem;
            color: rgb(0 0 0 1);
          }
        }

        .frameBox5 {
          display: flex;
          margin-left: 1.25rem;
          flex-direction: column;
          width: 28%;

          .frameBox4 {
            margin-top: auto;
            margin-bottom: auto;
            align-self: stretch;
            font-size: 3rem;
            font-weight: 600;
            line-height: 54px;
            color: rgb(0 0 0 1);
          }
        }
      }
    }
  }
}

.bottomFrame {
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 5rem;
  padding-right: 5rem;
  background-color: rgb(255 255 255 1);
  align-items: center;
  flex-direction: column;
  width: 100%;
  display: flex;

  .bottomBig {
    color: rgb(0 0 0 1);
    line-height: 54px;
    font-weight: 600;
    font-size: 3rem;
  }

  .sceFrame {
    margin-top: 7rem;
    width: 100%;
    max-width: 1138px;

    .sceFrame1 {
      display: flex;

      .sceFrame2 {
        display: flex;
        width: 15%;

        .sceFrame3 {
          display: flex;
          margin-top: auto;
          margin-bottom: auto;
          flex-direction: column;
          align-self: stretch;
          text-align: right;
          font-size: 1.875rem;
          font-weight: 700;
          line-height: 2.25rem;
          color: rgb(0 0 0 1);

          .sceFrame4 {
            margin-top: 12rem;

          }
        }
      }

      .thirdFrame1 {
        display: flex;
        margin-left: 1.25rem;
        width: 85%;
        flex-direction: column;

        .thirdFrame2 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          font-size: 1.25rem;
          line-height: 2.25rem;
          color: rgb(0 0 0 1);

          .thirdFrame3 {
            margin-top: 5rem;
          }
        }
      }
    }
  }

  .thirdBox {
    margin-top: 6rem;
    width: 100%;
    max-width: 1203px;

    .thirdBox1 {
      display: flex;

      .thirdBox2 {
        display: flex;
        width: 20%;
        flex-direction: column;

        .thirdBox3 {
          display: flex;
          margin-top: auto;
          margin-bottom: auto;
          flex-direction: column;
          align-self: stretch;
          white-space: nowrap;
          text-align: right;
          font-size: 1.875rem;
          line-height: 2.25rem;
          font-weight: 700;
          color: rgb(0 0 0 1);

          .thirdBox4 {
            margin-top: 14rem;
          }
        }
      }
      .thirdBox5{
        display: flex;
        width: 80%;
        flex-direction: column;
        margin-left: 1.25rem;
        .thirdBox6{
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          font-size: 1.25rem;
          line-height: 2.25rem;
          color: rgb(0 0 0 1);
          .thirdBox7{
            margin-top: 5rem;
          }
        }
      }
    }
  }

  .fourBox{
    margin-bottom: 2.75rem;
    margin-top: 10rem;
    width: 858px;
    text-align: center;
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 60px;
    color: rgb(0 0 0 1);
  }
}
</style>