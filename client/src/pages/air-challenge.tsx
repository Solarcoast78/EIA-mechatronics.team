import ChallengeBlog from "@/components/challenge-blog";

export default function AirChallenge() {
  const content = {
    conceive: [
      "Identificar la necesidad de drones multirotor autónomos con capacidades de vuelo inteligente avanzadas, navegación GPS de precisión y evasión automática de obstáculos aéreos.",
      "Definir requisitos para sistemas de visión computacional que permitan reconocimiento de patrones, seguimiento de objetivos y capacidades de búsqueda y rescate en tiempo real.",
      "Conceptualizar sistema de control de vuelo adaptativo que compense automáticamente condiciones climáticas adversas incluyendo vientos cruzados y turbulencias.",
      "Establecer especificaciones para integración de inteligencia artificial que permita toma de decisiones autónoma durante misiones complejas y optimización de rutas de vuelo."
    ],
    design: [
      "Diseñar marco aerodinámico utilizando simulaciones CFD para optimizar eficiencia energética, estabilidad de vuelo y resistencia a perturbaciones externas.",
      "Crear arquitectura del sistema integrando controlador de vuelo Pixhawk, motores sin escobillas, ESCs, hélices de fibra de carbono y sistema de telemetría de largo alcance.",
      "Desarrollar sistema de navegación con GPS RTK, IMU de 9 ejes, barómetro de precisión y sensores de flujo óptico para estabilización en interiores.",
      "Diseñar algoritmos de control de vuelo utilizando PX4 Autopilot con misiones MAVLink personalizadas e integración de estación de control terrestre."
    ],
    implement: [
      "Construir prototipo físico con marco aerodinámico optimizado y sistemas de vuelo integrados.",
      "Programar algoritmos de control de vuelo con ajuste fino de parámetros PID y sistemas de amortiguación de vibraciones IMU.",
      "Implementar sistema de visión con cámara gimbal estabilizada, procesamiento de imágenes en tiempo real y algoritmos de detección de objetos con aprendizaje profundo.",
      "Integrar y probar todos los subsistemas incluyendo navegación, control de vuelo, comunicación y ejecución de misiones."
    ],
    operate: [
      "Desplegar prototipo funcional de dron autónomo con capacidades de vuelo avanzadas, navegación de precisión y ejecución exitosa de misiones programadas complejas.",
      "Operar sistema de reconocimiento visual con capacidad de detectar y rastrear objetos específicos, útil para aplicaciones de búsqueda y rescate.",
      "Utilizar plataforma completa de control de misiones con interfaz gráfica para planificación de vuelos, monitoreo en tiempo real y análisis de datos de telemetría post-vuelo.",
      "Mantener documentación técnica detallada incluyendo manuales de vuelo, procedimientos de seguridad, análisis de rendimiento y videos de demostración de capacidades del sistema."
    ]
  };

  const processImages = [
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1548558811-14d3e3de6d45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  ];

  return (
    <ChallengeBlog
      title="Reto Aire"
      description="Sistemas aéreos no tripulados con inteligencia avanzada"
      heroImage="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600"
      colorClass="air-color"
      bgColor="bg-gradient-to-r from-cyan-900/70 to-cyan-600/50"
      challengeType="air"
      content={content}
      processImages={processImages}
    />
  );
}
