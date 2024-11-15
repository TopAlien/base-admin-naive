<script setup>
  import { Canvas } from 'fabric'

  const props = defineProps({
    id: {
      type: Number,
      default: 0
    }
  })

  console.log('🚀 ~ props:', props)
  const emit = defineEmits(['close', 'confirm'])

  const canvas = new Canvas()
  const getA = async () => {
    await canvas.loadFromJSON(
      '{"objects":[{"type":"rect","left":50,"top":50,"width":20,"height":20,"fill":"green","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"rx":0,"ry":0},{"type":"circle","left":100,"top":100,"width":100,"height":100,"fill":"red","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"radius":50}],"background":"rgba(0, 0, 0, 0)"}'
    )
    const svg = canvas.toSVG({ height: '500px' })
    console.log('=>(test2.vue:19) svg', svg)
  }
  getA()
</script>
<template>
  <card title="Test2">
    <h1>test2</h1>
  </card>
  <n-button @click="emit('close')">取消</n-button>
  <n-button
    type="primary"
    @click="emit('confirm', { a: 1, b: 2, name: 'ealien' })"
  >
    确定
  </n-button>
</template>
