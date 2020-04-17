<template>
  <div id="div1" @mouseenter="ondiv()" @mouseleave="leavediv()" :style="{width:imgwidth+'px'}">
    <!-- 图片展示位置 -->
    <ul ref="nana">
      <li v-for="(imgsitem,index) in imgs" :key="index">
        <a v-for="(item,index) in imgsitem" :key="index" href="javascript:;">
          <img :src="image.img" alt v-for="(image,index) in item" :key="index" />
        </a>
      </li>
    </ul>
    <ol>
      <li
        v-for="(item,itemindex) in imgs"
        :key="itemindex"
        @click="checkclick(itemindex)"
        :class="{'current':index===itemindex}"
      >{{itemindex+1}}</li>
    </ol>
    <!-- {{imgs}} -->
    <a href="javascript:;" class="goPrev" @click="goPrevclick()">&laquo;</a>
    <a href="javascript:;" class="goNext" @click="goNextclick()">&raquo;</a>
  </div>
</template>

<script>
export default {
  name: "SolideShow",
  data() {
    return {
      index: 0, //当前img的索引
      lastIndex: 0, //上一张图片的索引
      timer: null, //定时器
      imglth: 0, //图片的长度
      ultop: 0 ,//移动的距离
      imgwidth:850//
    };
  },
  props: {
    imgs: Array,
  },
  methods: {
    lunbo() {
      // 设置定时器，定时播放
      this.timer = setInterval(() => {
        this.goNextclick();
      }, 2000);
    },
    // 鼠标放上去的时候关闭定时器
    ondiv() {
      clearInterval(this.timer);
    },
    // 鼠标离开时打开定时器
    leavediv() {
      this.lunbo();
    },
    // 按钮切换事件
    checkclick(index) {
      this.index = index;
      this.changeimg(this.index);
    },
    // 下一张
    goNextclick() {
      this.index++;
      if (this.index === this.imglth) {
        this.index = 0;
        this.$refs.nana.style.left = "0px";
      }
      this.changeimg(this.index);
    },
    // 上一张
    goPrevclick() {
      this.index--;
      if (this.index < 0) {
        this.index = this.imglth - 1;
        this.$refs.nana.style.left = this.index * this.imgwidth + "px";
      }
      this.changeimg(this.index);
    },
    // 切换图片
    changeimg(index) {
      this.index = index;
      let ul = document.querySelector("ul");
      this.linearMove(ul, "left", this.index * this.imgwidth, 1000, this);
    },
    //运动函数
    linearMove(obj, attr, end, time, that) {
      clearInterval(obj.timer);
      var start = -parseInt(this.getStyle(obj, attr));
      var distance = end - start;
      var steps = parseInt(time / 20);
      var speed = distance / steps;
      obj.timer = setInterval(function() {
        start += speed;
        that.$refs.nana.style.left = -start + "px";
        if (Math.abs(start - end) < Math.abs(speed)) {
          clearInterval(obj.timer);
          that.$refs.nana.style.left = -end + "px";
        }
      }, 20);
    },
    //获取元素当前的样式
    getStyle(obj, attr) {
      return obj.currentStyle
        ? obj.currentStyle[attr]
        : getComputedStyle(obj, false)[attr];
    }
  },
  mounted() {
    this.imglth = this.imgs.length;
    this.lunbo();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
#div1 {
  display: block;
  height: 500px;
  white-space: nowrap;
  margin: 50px auto;
  overflow: hidden;
  position: relative;
  ul {
  position: absolute;
  width: auto;
  left: 0;
  height: 500px;
  li {
    display: inline-block;
    height: 500px;
    left: 0;
    top: 0;
    z-index: 0;

    transition: opacity 3s;
    a {
      display: inline-block;
    }
  }
}
ol {
  position: absolute;
  right: 10%;
  bottom: 10px;
  z-index: 6;
  li {
  width: 20px;
  height: 20px;
  filter:alpha(Opacity=80);-moz-opacity:0.5;opacity: 0.5;
  background: #fff;
  margin-left: 5px;
  float: left;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 100%;
}
}
}


.current {
  color: red;
}
#div1 > a {
  text-decoration: none;
  position: absolute;
  top: 50%;
  margin-top: -10px;
  height: 40px;
  line-height: 32px;
  text-align: center;
  width: 40px;
  font-size: 40px;
  vertical-align: middle;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  z-index: 6;
}
.goPrev {
  left: 0;
}
.goNext {
  right: 0;
}
img {
  width: 425px;
  height: 500px;
}
</style>
