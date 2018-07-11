<template>
  <div id="app">
    <div class="moor-item">
      <label>Title:</label> 
      <moor-hello-world :color="color" :msg="msg"></moor-hello-world>
    </div>

    <div class="moor-item">
      <label>Button:</label> 
      <moor-button class="moor-btn" @click="onClick">确定</moor-button>
      <moor-button class="moor-btn" @click="onClick" bgcolor="#409eff" color="#fff">确定</moor-button>
      <moor-button class="moor-btn" @click="onClick" bgcolor="#67c23a" color="#fff">成功</moor-button>
      <moor-button class="moor-btn" @click="onClick" bgcolor="#e6a23c" color="#fff">警告</moor-button>
      <moor-button class="moor-btn" @click="onClick" bgcolor="#f56c6c" color="#fff">危险</moor-button>
    </div>
    
    <div class="moor-item">
      <label>Select: </label>
      <moor-select 
        class="moor-select"
        label="label"
        value="value"
        v-model="selectValue"
        :options="options">
      </moor-select>
    </div>

    <div class="moor-item">
      <label>Input: </label>
      <moor-input
      v-model="input1"
      placeholder="请输入信息">
      </moor-input>

      <moor-input
        v-model="input2"
        placeholder="请输入信息">
      </moor-input>

      <moor-input
        placeholder="输入框禁用"
        :disabled="inputDisabled">
      </moor-input>
    </div>

    <div class="moor-item">
      <label>Switch: </label>

      <moor-switch
      v-model="lightSwitch">开关(开):</moor-switch>

      <moor-switch
      v-model="switchLight">开关(关):</moor-switch>
    </div>
    
    <moor-button class="moor-btn" @click="handlePrint">打印选项值</moor-button>
  </div>  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // HelloWorld
      msg: 'Welcome to moor UI!',
      color: 'red',
      // Select
      selectValue: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }
      ],
      // input
      input1: '',
      input2: '这是默认值',
      inputDisabled: true,
      // switch
      lightSwitch: false,
      switchLight: true
    }
  },
  methods: {
    onClick: function (e) {
      console.log('click', e);
    },
    handlePrint() {
      console.log('selectValue', this.selectValue);
      console.log('input1:', this.input1);
      console.log('input2:', this.input2);
    }
  },
  watch: {
    lightSwitch: newValue => console.log('开关：', newValue),
  }
}
</script>

<style lang="scss">
.moor-select, .moor-btn, .moor-switch, .moor-input {
  margin: 10px 6px;
}
.moor-item {
  display: flex;
  align-items: center;

  label {
    width: 100px;
    display: inline-block;
  }
}
</style>
