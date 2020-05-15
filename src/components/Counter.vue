<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    value: 90000000000
  }),
  computed: {
    ...mapGetters(["getValue"])
  }
};
</script>
<template>
  <div class="counter bg-success">{{getValue}} left</div>
</template>

<style lang="sass">
.counter
  color: white
  font-size: 32px
  font-weight: bold
  text-align: center
  top: 0px
  position: sticky
  padding: 20px
  margin: 10px 0px
  z-index: 100
</style>