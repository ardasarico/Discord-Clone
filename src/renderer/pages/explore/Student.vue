<template>
  <div>
    <div class="hero">
      <h1>Find your people</h1>
      <p>
        From clubs, to study groups, to game nights, there's a place for you.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Student",
};
</script>

<style scoped lang="scss">
.hero {
  width: 100%;
  aspect-ratio: 3.20331950207;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: url("https://cdn.discordapp.com/attachments/1040724137510977556/1050866395933581363/Frame.png");
  * {
    color: #fff;
    margin: 0;
  }
  h1 {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 12px;
  }
  p {
    line-height: 20px;
    font-size: 14px;
  }
}
</style>
