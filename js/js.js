
// funcion que calcula si tiene entre 18 y 65 años segun fecha de nacimiento
function calculate_age(fechaNacimiento) {
  var autoriza=true  
  var fechaNace = new Date(FechaNacimiento);
  birth_day = fechaNace.getFullYear();
  birth_month = fechaNace.getMonth();
  birth_day = fechaNace.getDate();

  today_date = new Date();
  today_year = today_date.getFullYear();
  today_month = today_date.getMonth();
  today_day = today_date.getDate();

  birth_day = fechaNace.getFullYear();
  birth_month = fechaNace.getMonth();
  birth_day = fechaNace.getDate();

  age = today_year - birth_year;

  if (today_month < birth_month - 1) {
    age--;
  }
  if (birth_month - 1 == today_month && today_day < birth_day) {
    age--;
  }
  if ((age <= 18) || (age => 65))
   {
     alert(`Ud. tiene ${age} NO PUEDE DONAR SANGRE`);
     autoriza=false;
  }
  return(autoriza)
}

//funcion que conrola que la ultima fecha de donación sea menor a la fecha del día

function fecha_don(f_dona){
    var day_dona=new Date(f_dona);
    var hoy=new Date();
    if (day_dona>hoy) {
        return false;
    }
}

function salir() {
  var confirmar = confirm('Estas por salir de nuestro sitio web! ¿Continuar?');
  if (confirmar) {
      window.location.href = ('https://www.google.com');
  } else {

  }
}