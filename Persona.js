/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "José Luis Pomares",
				Photo: "man.png",
				Quote: "Siempre feliz, con pico y pala",
				Age: 21,
				Occupation: "Estudiante de Bellas Artes",
				Family: "Soltero",
				Location: "Granada",
				Character: "Lee 3 o 4 libros al mes",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Viajar mucho. Descubrir nuevos países y culturas.", "Disfrutar de fiestas con conocidos", "Ser feliz con su trabajo"],
				Frustrations: ["Sus amistades no suelen durar debido a sus cambios constantes de gustos", "Le gustaría dejar de fumar", "No ha tenido oportunidad de probar la comida tailandesa y le gustaría hacerlo"],
				Bio: "Original y residente de Granada. Actualmente está estudiando el grado de Bellas Artes. Le gusta salir mucho por Pedro Antonio a explorar los diversos pubs los viernes noches y hacer nuevas amistades con las que explorar los diferentes espacios de consumo de Granada. Le encanta viajar cuando se puede.",
				Tech: [
					{ Name: "Diseño Gráfico", Value: 3 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Le gusta disfrutar de una buena fiesta en compañía de gente de su edad. Turismo nocturno.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "María Teresa Lozano",
				Photo: "woman.png",
				Quote: "Vive y se feliz, porque solo cuando eres feliz podrás vivir",
				Age: 33,
				Occupation: "Fisioterapeuta",
				Family: "Vive con su pareja y su hijo. Sus padres viven en Salamanca.",
				Location: "Madrid",
				Character: "Dulce, sensible y tranquila",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Visitar Egipto", "Comprarle una caravana a sus padres", "Tener 3 hijos", "Ver la aurora boreal"],
				Frustrations: ["Tiene demasiado trabajo", "La mayoría de sus amigas tiene hijos y no se pueden adaptar a sus planes", "No tiene tiempo para aprender a tocar la guitarra"],
				Bio: "Nacida en Extremadura y viviendo en Madrid. Desde pequeña siempre le han gustado los libros y los instrumentos, pero sus padres le han puesto mucho empeño en sus estudios. Está casada y tiene un hijo llamado Hugo de 4 años.",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Mobile", Value: 2 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos:   "Quiere vivir una vida plena y tranquila. Explorar mundo y naturaleza. Le gustaría aprender nuevos idiomas y a tocar nuevos instrumentos. Apasionada de la lectura, en concreto la novela romántica." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 3 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])