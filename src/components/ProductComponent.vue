<template>
    <div class="container proCon">
        <h1>Our Software Platforms</h1>
  <div class="row">
    <div class="col-lg-4 col-md-12 ">
        <img src="../assets/NordboMimic.png" class="image-responsive">
        <h2>Mimic Kit</h2>
        <p>Teach and guide your robot in real-time</p>
    </div>

    <div class="col-lg-4 col-md-6">
        <img src="../assets/NordboCraftMate.png" class="image-responsive">
        <h2>CraftMate Platform</h2>
        <p>Scan and construct a highly precise 3D<br>model of a surface to be processed</p>
    </div>

    <div class="col-lg-4 col-md-6">
        <img src="../assets/NordboQCLab.png" class="image-responsive">
        <h2>QC Platform</h2>
        <p>Apowerful vision-based software for <br>quality control</p>
    </div>
  </div>
</div>

</template>

<style scoped>
.proCon {
  text-align: center;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.col-lg-4,
.col-md-6,
.col-sm-6 {
  flex: 0 0 33.33%;
  max-width: 30%;
  box-sizing: border-box;
}

.image-responsive {
  width: 60%;
  height: auto;
}

h2 {
  font-size: 24px;
  font-weight: bold;
}

p {
  font-size: 16px;
}
</style>