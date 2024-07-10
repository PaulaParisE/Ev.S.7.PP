function option1(){
    let option = prompt("Seleccione una opción.\n1.Ver boleta.\n2.Pagar cuenta");
    if (option === "1") {
      alert("Descargue su boleta aquí.");
    } else if (option === "2") {
      alert("Usted está siendo transferido. Espere por favor...");
    }
  }
  
  function option2(){
    let option = prompt("Seleccione una opción.\n1.Problemas con la señal.\n2.Problemas con las llamadas");
    if (option === "1") {
      let solicitud = prompt("Escriba su solicitud");
      alert("Estimado usuario. Su solicitud " + solicitud + ".Ha sido ingresada con éxito. un ejecutivo se contactará con usted.");
    } else {
        let solicitud = prompt("Escriba su solicitud");
        alert("Estimado usuario. Su solicitud " + solicitud + ".Ha sido ingresada con éxito. un ejecutivo se contactará con usted.");;
    }
  }
  
  function option3 () {
    let option = prompt ("¡Mentel tiene una oferta acorde a tus necesidades! para conocer más información y ser asesorado personalmente por un de nuestros ejecutivos escriba 'SI' y un ejecutivo lo  llamará. De lo contrario ingrese 'NO'.");
    if (option === "SI") {
      alert("Un ejecutivo se contactará con usted.");
    } else if (option === "NO") {
      alert("Gracias por preferir nuestros servicios.");
    } else {
      alert("Opción no válida.");
    }
  }
  
  function option4 () {
    let consulta = prompt ("A continuación escriba su consulta");
    alert("Estimado usuario su consulta " + consulta + "Ha sido ingresada con exito. Un ejecutivo se contactará con usted.");
  }
  
  //switch
  function menu(){
    let option = prompt("Hola! soy eva, tu asistente virtual del servicio al cliente de Mentel. Estoy aquí para ayudarte en lo que necesites.\nEscribe el número de la opción que buscas: \n1.- Boletas y pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas");
    switch (option) {
      case "1":
        option1();
        break;
      case "2":
        option2();
        break;
      case "3":
        option3();
        break;
      case "4":
        option4();
        break;
      default:
        alert('opcion no valida');
        break;
    }
  }
  
  menu();