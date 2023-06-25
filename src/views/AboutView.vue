<script setup>

</script>

<template>
  <div>
    <img src="@/assets/NordboHeroBanner.png" class="image-responsive">
 <div class="mask">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">Which product fits</h1>
          <h6 class="mb-3">With this test, you’ll figure out which of our<br> products that is most compatible with the<br> needs you have for your problem.</h6>

         
          <router-link to="/questionnaire" class="btn btn-primary">Start Test</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.image-responsive {
  width: 100%;
  height: auto;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 200px;
  color: #ffffff;
}


h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

h6 {
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 1.4;
}

.btn {
  border-radius: 4px;
  padding: 10px 20px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background-color: #021f5f;
  border: none;
}
</style>