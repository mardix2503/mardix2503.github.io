<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<header>
    <div>
      <div class="navWrapper">
        <div class="navheader">
          <p class="text-white TopContainer">join us for an exciting webinar as we launsh our latest innvation - Mimic Sander</p> 
          <button type="button" class="headerbtn">see more</button>
        </div>
        
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">

            <a class="navbar-brand" href="#" >
              <router-link to="/" ><img src="@/assets/NordboRoboticLogo.png" class="image-responsive"></router-link>
            </a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">


                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                      <a class="nav-link" href="">Solutions&#160;&#160;<font-awesome-icon :icon="['fas', 'angle-down']" /></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="">Partners&#160;&#160;<font-awesome-icon :icon="['fas', 'angle-down']" /></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="">Resources&#160;&#160;<font-awesome-icon :icon="['fas', 'angle-down']" /></a>
                  </li>
                
                  <li class="nav-item">
                      <router-link to="/partner" class="btn btn-primary btnfirst">Partner Portal</router-link>
                    </li>  

                    <li class="nav-item">
                      <router-link to="/about" class="btn btn-primary btnsecond">Get in Touch</router-link>  
                    </li>
                    
                    <li class="nav-item">
                      <router-link to="/products" class="btn btn-primary btnthree ">Find product</router-link>
                    </li>                    
                </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
  
    <RouterView />
  </template>
  
  <style scoped>
  .navWrapper {
      background-color: #194fc8;
      color: #ffffff;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
      margin: 0;
      font-weight: 400;
  }
  
  .navheader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .navheader p {
    margin: 0;
  }
  
  .headerbtn {
    background-color: #ffffff;
    color: #333;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .container {
    display: flex;
  }

  .navbar {
    background-color: #ffffff;
    padding: 10px 0;
    display: flex;
    justify-content: center;
  }
  
  .navbar-brand img {
    width: 100px;
    height: auto;
  }
  
  .navbar-toggler {
    border: none;
  }
  
  .navbar-nav {
    display: flex;
    align-items: center;
  }
  
  .nav-item {
    margin-right: 10px;
  }
  
  .nav-link {
    color: #333;
    font-weight: bold;
  }
  
  .btn {
    border-radius: 4px;
    padding: 8px 16px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
  }
  
  .btn-primary {
    background-color: #007bff;
    border: none;
  }
  
  .btnfirst {
    background-color: #f2f2f2;
    color: #021f5f;
  }
  
  .btnsecond {
    background-color: #021f5f;
  }
  
  .btnthree {
    background-color: #f2f2f2;
    color: #021f5f;
  }
  </style>