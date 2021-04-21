<template>
  <div>
    <canvas id="canvas" width="100%" height="100%"></canvas>
  </div>
</template>

<script>
import { runStarrySky } from "../../component/start/start";
export default {
    mounted(){
        runStarrySky()
    }
}
</script>
<style lang="css" scoped>
#canvas {
  /* position: absolute; */
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
}
</style>