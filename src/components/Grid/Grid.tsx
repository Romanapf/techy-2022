import { Card } from "../Card"


export const Grid: React.FC = () => {
 const horario = [
        {
            date: "10:00",
            title: "☕️ 🥐 Desayuno y acreditaciones",
            description: "¡Te invitamos a que te unas al desayuno en el que entregaremos las acreditaciones para el día de la tecnología!",
        },
        {
            date: "10:30",
            title: "🚀 Apertura",
            description: "Introducción y presentación de los temas de la jornada en Techy 2022.",
            autor: "Javi Villa",
        },
        {
            date: "11:00",
            title: "✨ Equipos Ágiles, peopleware y management",
            description: "La verdadera clave de la agilidad, y la más profunda de entender, son los equipos y las personas. Conocermos las prácticas que son clave para lograr verdaderamente equipos ágiles.",
            autor: "Judith Saez" 
        },
        {
            date: "11:30",
            title: "✨ El comienzo en Venlo",
            description: "El equipo de sistemas nos explicará cómo prepararon el almacén de Venlo desde 0.",
            autor: "Miguel Contreras y Manuel Nieto"
        },
        {
            date: "12:00",
            title: "🧊 Dinámica de grupo",
            description: "Romperemos el hielo con una dinámica de grupo.",   
        },
        {
            date: "12:15",
            title: "✨ Mejorar Experimentando",
            description: "Conoceremos la técnica de experimentación de Atida y para qué sirve el A/B testing.",
            autor: "Román APF"
        },
        {
            date: "13:00",
            title: "✨ CLOUD NATIVE, Docker, Kubernetes y Openshift",
            description: "Conocermoes el modelo de desarrollo de software según el cual las aplicaciones se diseñan para ejecutarse en la nube desde el principio.",
            autor: "Rubén Dario Galán Martín de Telefónica"
        },
         {
            date: "14:00",
            title: "🍔 NOS VAMOS A COMER",
            description: "Nos nutriremos para poder continuar con la jornada."
        },
        {
            date: "16:00",
            title: "✨ TRYTON ERP vs DINAMICS 365 BC",
            description: "DATAlife DIH es el Hub de Innovación Digital para aplicar inteligencia artificial y big data en PYMES de los sectores primario, biotecnológico y salud.",
            autor: "Sergio Morillo & Nicolás López (Datalife)"
        },
         {
            date: "16:30",
            title: "✨ Bussines Intelligence",
            description: "El equipo de BI nos contará cómo ayudar a las organizaciones a tomar decisiones basadas en los datos.",
            autor: "Sonia Quintanar & Oscar Nicolás"
        },
        {
            date: "17:00",
            title: "✨ La metodología de desarrollo web en Atida",
            description: "El equipo de Front nos contará cómo es el día a día dentro del equipo de desarrollo web.",
            autor: "Anthony Guido"
        },
        {
            date: "17:30",
            title: "✨ Roadmap, equipos, formaciones y organigrama",
            description: "Javi nos hablará sobre los futuros planes de la compañía y de los equipos. Planes de carrera y formación.",
            autor: "Javi Villa"
        },
         {
            date: "18:00",
            title: "🎉 Cierre",
            description: "Finalizamos la jornada, aprovechamos para ir al hotel, descansar y prepararnos para la cena.",
        },
        {
            date: "20:00",
            title: "🍻 Cañas y Tapas",
            description: "Networking en forma de cerveza y tapas por Albacete.",
            autor: "Departamento de Tecnología"
        }
    ]

    
    return (
        <>
        
        <ol className="grid grid-cols-1 gap-10">
            
            {horario.map((ponencia, index) => {
              return (
                  <Card key={index} title={ponencia.title} description={ponencia.description} date={ponencia.date} autor={ponencia.autor} />
            )})}
            
        </ol>
        </>

    )
}

