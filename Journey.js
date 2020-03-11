/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "José Luis Pomares",
                Photo: "man.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere hacer un viaje en las vacaciones de Semana Santa",
                touch1: "Calendario del móvil",
                feel1: "4",
                con1: "No tiene acompañantes para el viaje",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet posibles opciones para hacer viajes",
                touch2: "Móvil",
                feel2: "2",
                con2: "No hay muchas opciones ni aplicaciones para lo que José Luis quiere",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Encuentra Pazifiko, se registra y encuentra determinadas opciones",
                touch3: "Móvil",
                feel3: "4",
                con3: "Varias de las opciones no incluyen gran cantidad de fiestas",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Observa los viajes propuestos",
                touch4: "Móvil (WhatsApp)",
                feel4: "3",
                con4: "No le convence ningún viaje de los propuestos y decide organizarlo él",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "A través de la plataforma crea un viaje a Punta Cana",
                touch5: "Móvil (WhatsApp)",
                feel5: "4",
                con5: "Recibe pocas propuestas de compañeros",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "El viaje a Punta Cana queda fijado con otros 3 compañeros de viaje que tienen los mismos gustos",
                touch6: "Móvil (WhatsApp)",
                feel6: "5",
                con6: "No puede proponer un viaje a corto plazo ya que la plataforma no es muy conocida y no se reciben muchas respuestas",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "María Teresa Lozano",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con su familia para Verano, tiene sólo 15 dias libres",
                touch1: "agenda",
                feel1: "5",
                con1: "Quiere ir a un pais exotico pero que tenga atracciones para niños pequeños",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Ir a una agencia de viajes, y decirle sus preferencias y planes",
                touch2: "Servicio (agencia)",
                feel2: "3",
                con2: "Tiene que desplazarse a agencia, explica su intenciones, le llamaran porque no hay nada interesante",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Las opciones ofrecidas por la agencia no se adecuan a las preferencias de la familia",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Piensa que ha perdido el tiempo",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Una conocida le comenta que usó una plataforma hace 3 semanas para un viaje próximo",
                touch4: "Móvil (webapp)",
                feel4: "3",
                con4: "La plataforma no es muy conocida y no está muy segura de que vaya a funcionar pero le da una oportunidad",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Publica en la plataforma un viaje a Egipto",
                touch5: "Móvil (webapp)",
                feel5: "2",
                con5: "No hay ninguna opción para filtrar por matrimonio o para indicar que se viaja con niños, por lo que tiene que especificar esos detalles en la descripción del viaje",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "No llegan candidatos al viaje por la falta de filtros en la plataforma",
                touch6: "Móvil",
                feel6: "1",
                con6: "No ha sido buena opción para buscar viaje ya que carece de opciones básicas",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



