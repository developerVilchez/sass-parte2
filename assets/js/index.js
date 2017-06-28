const get = url => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', _ => {
      if (xhr.status !== 200) {
        reject(new Error(xhr.statusText));
      }
      resolve(xhr.response);
    });
    
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
  })
}


const Laboratoria = {
  alumna : null
}


$( _ => {
  get('http://laboratoria.cuadra.co:9339/api/v1/students/').then(response => {
    console.log("Success! Estableciste conexion");
    Laboratoria.alumna =  response;
    jQuery.each(Laboratoria.alumna, function(i,val){
      $("ol").append('<li class="alumna"></li>');
      $('li.alumna').eq(i).text(val.name + " " + val.pLastName + " " +  val.mLastName);
      $('li.alumna').eq(i).append('<input type="checkbox"/>')
    })

  }).catch(error => {
      console.error("Failed! No se estableció conexíón", error);
      });

});