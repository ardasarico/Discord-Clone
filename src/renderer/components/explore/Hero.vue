<template>
  <div class="hero">
    <h1>Find your community on discord</h1>
    <p>From gaming, to music, to learning, there's a place for you.</p>
    <input type="text" name="input" placeholder="Explore communities" />
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: ["test"],
};
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  aspect-ratio: 3.20331950207;
  margin-top: 32px;
  border-radius: 8px;
  background: url("https://cdn.discordapp.com/attachments/1040724137510977556/1050159095719665734/1a23068e966efce6fb32ca9fecc65eed_1.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  * {
    margin: 0;
  }
  h1 {
    color: #fff;
    font-size: 24px;
    font-weight: 600;
  }
  p {
    color: #fff;
  }
  input {
    width: 525px;
    height: 36px;
    border-radius: 4px;
    border: none;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
