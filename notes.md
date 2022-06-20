npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

App style

.App {
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
}

.AppDark {
  background-image: url('../images/bg-mobile-dark.jpg');
}

.AppLight {
  background-image: url('../images/bg-mobile-light.jpg');
}

@media screen and (min-width: 376px){
  .AppDark {
    background-image: url('../images/bg-desktop-dark.jpg');
  } 

  .AppLight {
    background-image: url('../images/bg-desktop-light.jpg');
  }
}