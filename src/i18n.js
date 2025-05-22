import { createI18n } from 'vue-i18n';

const messages = {
  //INGLES
  en: {
    tittle: 'DOER',
    title_navbar: 'Welcome',
    isw_tittle: 'Software Engineer',
    webDevelop_tittle: 'Web Development',
    softwareConfig_tittle: 'SCM',
    select_language_text: 'Select Language...',
    contact_title:'Contact',
    language_1: 'Spanish',
    language_2: 'English',
    principal_page: {
      first_card_tittle: 'Introduction',
      first_card_bold_text: '¡Welcome to the Open Digital Educational Resource on Management and Configuration of the Software and Web Development as part of Software Engineering!',
      first_card_text: 'This open digital educational resource is a valuable tool for anyone interested in Software Engineering. It will help you understand the Management and Software Configuration, as well as Web Development, in the context of a project successful software. Upon completion, you will be equipped with the knowledge and skills necessary to manage and configure the software effectively and develop robust and secure web applications.',
      last_card_bold_text: 'We hope you enjoy this course and learn a lot!',
      image_url: '/assets/images/phrasepresentation-en.png',
      created_card_text: 'Last edition in ',
      mini_game_text: '¿What will the content of this educational resource be about?',
      mini_game_url: 'https://es.educaplay.com/juego/15063522-.html',
    },
    isw_page: {
      main_title:'Software Engineering',
      main_body:'Training professionals to design and develop high-quality, reliable, and scalable software solutions for the challenges of the digital age.',
      first_card_tittle: '¿What is Software Engineering?',
      middle_card_text: '"Software engineering is a discipline of computer science that focuses on the development and maintenance of high-quality software systems and reliability. This discipline is based on a set of methods, tools and techniques for the construction and evolution of software that meets customer requirements, be easy to maintain and free from bugs. Software engineering involves the use of formal models and processes for the software development. These models and processes include the specification of requirements, the design of software architectures, the implementation of software, the verification and validation of the software and the management of the configuration of the software."',
      created_card_text: 'Last edition in ',
      mini_game_text: 'Basic Principles',
      mini_game_url: 'https://es.educaplay.com/juego/15050959-principios_basicos_de_la_ingenieria_de_software.html',
      swebok_tittle: 'SWEBOK Book',
      swebok_first_text: '"The SWEBOK (Software Engineering Body of Knowledge) is a guide that compiles fundamental knowledge in software engineering. The SWEBOOK book provides an overview of the main concepts, principles and practices that make up software engineering. The book is organized into ten areas of knowledge, which are:',
      swebok_list_1: 'Software Requirements',
      swebok_list_2: 'Software Design',
      swebok_list_3: 'Software Construction',
      swebok_list_4: 'Software Testing',
      swebok_list_5: 'Software Maintenance',
      swebok_list_6: 'Software Configuration Management',
      swebok_list_7: 'Model-Based Software Engineering',
      swebok_list_8: 'Software Quality',
      swebok_list_9: 'Software Engineering Process',
      swebok_last_text: 'Each area of knowledge is covered in detail, including a description of key concepts, relevant principles and practices, and the techniques and tools commonly used in each one."',
      swebok_url: '/assets/pdf/swebokv3.pdf',
      last_edited_in: 'Last edition in ',
    },
    dev_web: {
      options: [
        { title: 'Opción 1', to: '/opcion1' },
        { title: 'Opción 2', to: '/opcion2' },
        { title: 'Opción 3', to: '/opcion3' }
      ]
    },
    footer_page: {
      footer_social_networks: 'Social Networks',
      footer_credits: 'Credits',
      footer_copyright: 'DOER (Digital Open Educational Resource) Software Engineering - Copyright '
    },
    paginator: {
      page: 'Page',
      of: 'of'
    }
  },
  //ESPAÑOL
  es: {
    tittle: 'DOER',
    title_navbar: 'Bienvenido',
    isw_tittle: 'Ingeniería de Software',
    webDevelop_tittle: 'Desarrollo Web',
    softwareConfig_tittle: 'GCS',
    select_language_text: 'Seleccione Idioma...',
    contact_title:'Contacto',
    language_1: 'Español',
    language_2: 'Inglés',
    principal_page: {
      first_card_tittle: 'Presentación',
      first_card_bold_text: '¡Bienvenidos al Recurso Educativo Digital Abierto sobre Gestión y Configuración del Software y Desarrollo Web como parte de la Ingeniería de Software!',
      first_card_text: 'Este recurso educativo digital abierto es una herramienta valiosa para cualquier persona interesada en la Ingeniería de Software. Te ayudará a comprender la Gestión y Configuración del Software, así como el Desarrollo Web, en el contexto de un proyecto de software exitoso. Al finalizar, estarás equipado con los conocimientos y habilidades necesarias para gestionar y configurar el software de manera efectiva y desarrollar aplicaciones web robustas y seguras.',
      last_card_bold_text: '¡Esperamos que disfrutes de este curso y aprendas mucho!',
      image_url: '/assets/images/phrasepresentation.png',
      created_card_text: 'Última edición en ',
      mini_game_text: '¿De qué tratará el contenido de este recurso educativo?',
      mini_game_url: 'https://es.educaplay.com/juego/14775635-de_que_tratara_realmente_el_contenido.html',
    },
    isw_page: {
      main_title:'Ingeniería de Software',
      main_body:'Formando profesionales para diseñar y desarrollar soluciones de software de alta calidad, confiables y escalables para los desafíos de la era digital.',
      first_card_tittle: '¿Qué es la Ingeniería de Software?',
      middle_card_text: '"La ingeniería de software es una disciplina de la informática que se enfoca en el desarrollo y mantenimiento de sistemas de software de alta calidad y confiabilidad. Esta disciplina se basa en un conjunto de métodos, herramientas y técnicas para la construcción y evolución de software que cumpla con los requisitos del cliente, sea fácil de mantener y esté libre de errores. La ingeniería de software implica el uso de modelos y procesos formales para el desarrollo de software. Estos modelos y procesos incluyen la especificación de requisitos, el diseño de arquitecturas de software, la implementación de software, la verificación y validación del software y la gestión de la configuración del software."',
      created_card_text: 'Última edición en ',
      mini_game_text: 'Principios Básicos',
      mini_game_url: 'https://es.educaplay.com/juego/14808143-principios_basicos_de_la_ingenieria_de_software.html',
      swebok_tittle: 'Libro SWEBOK',
      swebok_first_text: '"El SWEBOK (Software Engineering Body of Knowledge) es una guía que recopila el conocimiento fundamental en ingeniería de software. El libro SWEBOK proporciona una visión general de los principales conceptos, principios y prácticas que conforman la ingeniería de software. El libro está organizado en diez áreas de conocimiento, que son:',
      swebok_list_1: 'Requerimientos de software',
      swebok_list_2: 'Diseño de software',
      swebok_list_3: 'Construcción de software',
      swebok_list_4: 'Pruebas de software',
      swebok_list_5: 'Mantenimiento de software',
      swebok_list_6: 'Gestión de la configuración de software',
      swebok_list_7: 'Ingeniería de software basada en modelos',
      swebok_list_8: 'Calidad de software',
      swebok_list_9: 'Proceso de ingeniería de software',
      swebok_last_text: 'Cada área de conocimiento es tratada de manera detallada, incluyendo una descripción de los conceptos clave, los principios y prácticas relevantes, y las técnicas y herramientas comúnmente utilizadas en cada una."',
      swebok_url: '/assets/pdf/swebookv3es.pdf',
      last_edited_in: 'Última edición en '
    },
    dev_web: {
      options: [
        { title: 'Opción 1', to: '/opcion1' },
        { title: 'Opción 2', to: '/opcion2' },
        { title: 'Opción 3', to: '/opcion3' }
      ]
    },
    footer_page: {
      footer_social_networks: 'Redes Sociales',
      footer_credits: 'Créditos',
      footer_copyright: 'REDA (Recurso Educativo Digital Abierto) Ingeniería de Software - Derechos de autor '
    },
    paginator: {
      page: 'Página',
      of: 'de'
    }
  },
};

const i18n = createI18n({
  locale: 'es',
  messages,
});


export default i18n;