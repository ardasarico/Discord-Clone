<template>
  <div class="hero">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
    <div class="hero__input">
      <div class="hero__input-search">
        <input
          v-model:value="Search"
          type="text"
          name="input"
          :placeholder="$props.input"
          @focus="onFocus"
          @blur="onBlur"
        />
        <button
          v-if="this.Search.length > 0"
          class="hero__input-search-clear"
          v-on:click="clear"
        >
          <svg
            class="clearIcon-TMIIUa closeIcon-BMGxx0"
            aria-hidden="true"
            role="img"
            width="24"
            height="24"
            viewBox="0 0 14 14"
          >
            <path
              fill="currentColor"
              d="M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
            ></path>
          </svg>
        </button>
        <p
          class="hero__input-search-info"
          v-if="this.Search.length > 1"
          :style="{ display: inputBackground }"
        >
          "ENTER" to Search
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: ["title", "subtitle", "input"],
  data() {
    return {
      Search: "",
      inputBackground: "0",
    };
  },
  methods: {
    onFocus() {
      this.inputBackground = "flex";
    },
    onBlur() {
      this.inputBackground = "none";
    },
    clear() {
      this.Search = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  aspect-ratio: 3.20331950207;
  margin-top: 32px;
  border-radius: 8px;
  background: url("https://cdn.discordapp.com/attachments/1040724137510977556/1050159095719665734/1a23068e966efce6fb32ca9fecc65eed_1.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  * {
    margin: 0;
    color: #fff;
  }
  h1 {
    font-size: 22px;
    line-height: 24px;
    font-weight: 500;
  }
  p {
    font-size: 15px;
    font-weight: 300;
    line-height: 24px;
  }
  &__input {
    min-width: 360px;
    width: 50%;
    max-width: 600px;
  }
  &__input-search {
    position: relative;
    margin-top: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    input {
      width: 100%;
      color: #202225;
      border-radius: 4px;
      border: none;
      font-size: 14px;
      font-weight: 500;
      -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
      padding: 0 12px;
      height: 40px;
      &:focus {
        outline: 2px solid #cbd2ff;
        outline-offset: 1px;
      }
    }
    &-clear {
      position: absolute;
      right: 0;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      padding: 0;
      cursor: pointer;
      svg {
        path {
          fill: #47494e;
        }
      }
      &:hover {
        svg {
          path {
            fill: #000;
          }
        }
      }
    }
    &-info {
      position: absolute;
      right: 42px;
      font-size: 12px !important;
      color: #4f545c;
    }
  }
}
</style>
