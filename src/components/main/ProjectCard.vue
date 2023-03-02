<script>
export default {
  name: "MainProjectCard",

  props: {
    projectDescription: String,
    projectTitle: String,
    projectImgPath: String,
  },
};
</script>

<template>
  <article class="card">
    <img class="card-img-top" :src="projectImgPath" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ projectTitle }}</h5>
      <p class="card-text">
        {{ projectDescription }}
      </p>
      <a href="#" class="btn btn-primary">View More</a>
    </div>
  </article>
</template>

<style lang="scss" scoped></style>
