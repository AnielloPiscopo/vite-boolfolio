<script>
export default {
  name: "HomePage",
};
</script>

<template>
  <section id="home">
    <div class="container-fluid">
      <h1 class="my_title">Aniello Piscopo</h1>
      <div class="my_subtitle">
        <em><span>Boolean</span> Developer Student</em>
      </div>
      <div class="my_btns-container">
        <router-link :to="{ name: 'profile' }" class="btn btn-primary"
          >Scopri di più</router-link
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss"></style>
