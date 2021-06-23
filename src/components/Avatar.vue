<template>
  <div :class="`c-avatar ${getBg} text-white font-bold`" :style="`
    width: ${size}px;
    height: ${size}px;
    background-image: url('${src}');
    background-color: ${src ? 'transparent' : ''}
  `">
    <span class="c-avatar__initial" v-show="!src">{{ getInitial }}</span>
  </div>
</template>  

<script>
export default {
  name: "Avatar",
  props: {
    name: {
      required: true,
      type: String
    },
    src: {
      required: false,
      type: String
    },
    size: {
      required: false,
      type: Number,
      default: 50
    }
  },
  computed: {
    getInitial: function() {
      return this.name
        .split(/\s|-/g)
        .map(item => {
          return item[0].toUpperCase()
        })
        .join("")
    },
    getBg: function() {
      let bgs = [
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "purple",
        "indigo",
        "pink"
      ];
      let lightness = ["500", "600", "700"]

      let randomBgs = parseInt(this.name.length % bgs.length),
        randomLightness = parseInt(this.name.length % lightness.length);

      return `bg-${bgs[randomBgs]}-${lightness[randomLightness]}`
    }
  }
};
</script>

<style lang="scss" scoped>
.c-avatar {
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-align: center;
  user-select: none;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  &__initial {
    color: inherit;
    font-size: inherit;
  }
}
</style>