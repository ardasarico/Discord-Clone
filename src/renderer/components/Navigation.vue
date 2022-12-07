<template>
  <div class="navigation">
    <div class="navigation__home navigation-item">
      <nuxt-link to="/" class="navigation-button navigation-button-home"
        ><svg
          class="homeIcon-r0w4ny"
          aria-hidden="true"
          role="img"
          width="28"
          height="20"
          viewBox="0 0 28 20"
        >
          <path
            fill="currentColor"
            d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"
          ></path>
        </svg>
        <div class="navigation-button-tooltip">Direct Messages</div>
      </nuxt-link>
    </div>
    <div class="navigation__servers">
      <div class="navigation__item">
        <nuxt-link class="navigation-button server-ardasarico" to="/server">
          <div class="navigation-button-tooltip">Ardasari.co server</div>
        </nuxt-link>
      </div>
    </div>
    <div class="navigation__item">
      <button class="navigation-button navigation-button-green green-create">
        <svg
          class="circleIcon-3489FI"
          aria-hidden="true"
          role="img"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
          ></path>
        </svg>
        <span class="navigation-button-tooltip">Add a Server</span>
      </button>
    </div>
    <div class="navigation__item">
      <nuxt-link
        active-class="green-active"
        to="/explore"
        class="navigation-button navigation-button-green"
        ><svg
          aria-hidden="true"
          role="img"
          class="circleIcon-3489FI"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
          ></path>
        </svg>
        <div class="navigation-button-tooltip">Explore Public Servers</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation",
};
</script>

<style lang="scss" scoped>
.navigation {
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 72px;
  width: 72px;
  max-width: 72px;
  padding-top: 32px;
  height: calc(100vh - 32px);
  background: #202225;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &__servers {
    width: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      width: 32px;
      height: 2px;
      display: flex;
      background: #373a3f;
      margin-bottom: 8px;
      border-radius: 2px;
    }
  }
  &__item {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 48px;
  }
  &-button {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: none;
    background: #36393f;
    transition: 0.3s;
    &-tooltip {
      opacity: 0;
      z-index: 20;
      background-color: #17181a;
      color: #fff;
      border-radius: 6px;
      position: absolute;
      left: 80px;
      padding: 10px;
      font-size: 14px;
      font-weight: 700;
      display: none;
      align-items: center;
      &:before {
        opacity: 0;
        left: -6px;
        content: "";
        position: absolute;
        border-top: 10px solid transparent;
        border-right: 12px solid #17181a;
        border-bottom: 10px solid transparent;
        display: none;
      }
    }
    &:hover &-tooltip {
      display: flex;
      opacity: 1;
      &:before {
        display: flex;
        opacity: 1;
      }
    }
    &-home {
      svg {
        path {
          fill: #dcddde;
        }
      }
    }
    &:hover {
      border-radius: 16px;
      background: #4b5eeb;
      &::after {
        height: 30px;
        left: 0;
        transition: 0.3s;
      }
    }
    &::after {
      content: "";
      position: absolute;
      left: -5px;
      height: 25px;
      width: 4px;
      border-radius: 0 2px 2px 0;
      background: #fff;
    }
    &-green {
      cursor: pointer !important;
      svg {
        path {
          fill: #3ba55d;
        }
      }
      &:hover {
        background: #3ba55d;
        svg {
          path {
            fill: #fff;
          }
        }
      }
    }
  }
}
.nuxt-link-exact-active,
.green-active {
  border-radius: 16px;
  &::after {
    height: 40px !important;
    left: 0;
  }
}
.nuxt-link-exact-active {
  background: #4b5eeb;
}
.green-active {
  background: #3ba55d;
  svg {
    path {
      fill: #fff;
    }
  }
}
.green-create {
  &::after {
    opacity: 0 !important;
  }
}
.server-ardasarico {
  background-image: url("https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/6b8325dd7aee2ef07f72a83630585c04-1650999871948/3ba738ec-bd8d-4072-af9e-c4e847669740.png") !important;
  background-size: cover !important;
}
</style>
