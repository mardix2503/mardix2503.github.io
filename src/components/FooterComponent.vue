<template>
      <div class="container my-5">
<footer class="text-black bg-white text-center text-lg-start bg-light">
    <a class="navbar-brand-footer" href="#" >
                <img src="../assets/NordboRoboticLogo.png" class="logoFooter">
            </a>
  <!-- Grid container -->
  <div class="container p-4">
    <!--Grid row-->
    <div class="row mt-4 justify-content-center">
      <!--Grid column-->
      <div class="col-lg-4 col-md-12 mb-4 mb-md-0 Wrappersolutionh5">
        <div class="col-6 solutionh5">
            <h5 class="row-4 solutionh5">Solutions</h5>
            <p class="row-6">Mimic Kit</p>
            <p class="row-6">CraftMate</p>
            <p class="row-6">Al-Powerd QC</p>
            <p class="row-6">Components</p>
        </div>
      </div>
        
        <div class="col-lg-4 col-md-12 mb-4 mb-md-0 Wrappersolutionh5">
            <h4 class="row-4 solutionh5">Solutions</h4>
            <div class="col-6 solutionh5">
            <p class="row-6">About us</p>
            <p class="row-6">Career</p>
            <p class="row-6">Meet the Team</p>
            <p class="row-6">Get in Touch</p>
        </div>
      </div>

      <div class="col-lg-4 col-md-12 mb-4 mb-md-0 Wrappersolutionh5">
        <form>
  <fieldset>
    <legend><font-awesome-icon :icon="['far', 'envelope']" />&#160;&#160;&#160;Join our newsletter</legend>
    <div class="mb-">
      <label for="disabledTextInput" class="form-label"></label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="First Name*">
    </div>
    
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label"></label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Email*">
    </div>

    <button type="submit" class="btn btn-primary">Subscribe Now</button>
    <div class="mb-3"><br>
     <p class="subtext">* Will send you regularly updates</p>
    </div>
  </fieldset>
  <br><br>
</form>
        </div>
        <hr class="hr" /><br><br>
        <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
        <div class="col-6">
            <p class="row-4">CVR/VAT:DK<br>34697728</p>
            <p class="row-6">Copyright&copy;2020<br>Norbo Robotic A/S</p>
            <p class="row-6">All rights Reserved</p>
        </div>
      </div>
        <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
            <div class="col-6">
            <p class="row-6">Noatunvej 2, 5000 Odense -<br> Denmark</p>
            <p class="row-6">+45 81 81 98 81</p>
            <p class="row-6">contact@nordbo-robotics.com</p>
            </div>
        </div>
        <div class="col-lg-4 col-md-12 mb-4 mb-md-0 some">
            <ul class="list-unstyled d-flex flex-row justify-content-center">
            <li>
              <a class="text-black px-2" href="#!">
                <font-awesome-icon :icon="['fab', 'facebook-f']" size="xl"/>
              </a>&#160;&#160;&#160;
            </li>
            <li>
              <a class="text-black px-2" href="#!">
                <font-awesome-icon icon="fa-brands fa-twitter" size="xl"/>
                
              </a>&#160;&#160;&#160;
            </li>
            <li>
              <a class="text-black ps-2" href="#!">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" size="xl"/>
              </a>&#160;&#160;&#160;
            </li>

            <li>
              <a class="text-black ps-2" href="#!">
                <font-awesome-icon :icon="['fab', 'square-instagram']" size="xl"/>
              </a>
            </li>
          </ul>
        </div>
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="px-2 mt-3">
    <a class="text-black" href="#">Cookie Policy |</a>
    <a class="text-black" href="#">Terms of User |</a>
    <a class="text-black" href="#">Privacy Policy |</a>
  </div>
</div>
  <!-- Copyright -->
</footer>

</div>
<!-- End of .container -->
</template>

<style scoped>
  .container {
    max-width: 1170px;
    margin: auto;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  ul {
    list-style: none;
  }

  .footer {
    background-color: #24262b;
    padding: 70px 0;
  }

  .footer-col {
    width: 25%;
    padding: 0 15px;
  }

  .footer-col h4 {
    font-size: 18px;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 35px;
    font-weight: 500;
    position: relative;
  }

  .footer-col h4::before {
    content: '';
    left: 0;
    bottom: -10px;
    background-color: #e91e63;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
  }

  .footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
  }

  .footer-col ul li a {
    font-size: 16px;
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
  }

  .footer-col ul li a:hover {
    color: #ffffff;
    padding-left: 8px;
  }

  .footer-col .social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;
  }

  .footer-col .social-links a:hover {
    color: #24262b;
    background-color: #ffffff;
  }

  .newsletter-input {
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 4px;
    margin-right: 4px;
  }

  .newsletter-btn {
    background-color: #e91e63;
    color: #ffffff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }

  p {
    margin-top: 15px;
    color: #bbbbbb;
  }
</style>