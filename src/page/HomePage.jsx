import React, { useEffect, useRef, useState } from "react";

// icons
import { BiStoreAlt } from "react-icons/bi";
import { BiSpa } from "react-icons/bi";
import { BiSolidTruck } from "react-icons/bi";
import { BiSolidPlaneLand } from "react-icons/bi";
import { BiSolidPackage } from "react-icons/bi";

const HomePage = () => {
  const listaOurService = [
    {
      title: "Servicio 1",
      texto:
        "explicar el servicio que la empresa le puede brindar al consumidor ",
    },
    {
      title: "Servicio 1",
      texto:
        "explicar el servicio que la empresa le puede brindar al consumidor ",
    },
    {
      title: "Servicio 1",
      texto:
        "explicar el servicio que la empresa le puede brindar al consumidor ",
    },
  ];

  const listaWhyChooseUs = [
    {
      num: "1",
      title: "motivo#1",
      texto:
        "el movito por el cual deberia de utilizar el servicio que ofrecen en la pagina weeb",
    },
    {
      num: "2",
      title: "motivo#2",
      texto:
        "el movito por el cual deberia de utilizar el servicio que ofrecen en la pagina weeb",
    },
    {
      num: "3",
      title: "motivo#3",
      texto:
        "el movito por el cual deberia de utilizar el servicio que ofrecen en la pagina weeb",
    },
  ];

  const listaCompanys = [
    {
      icon: BiStoreAlt,
      title: "Logoipsum",
    },

    {
      icon: BiSpa,
      title: "Logoipsum",
    },

    {
      icon: BiSolidTruck,
      title: "Logoipsum",
    },

    {
      icon: BiSolidPlaneLand,
      title: "Logoipsum",
    },

    {
      icon: BiSolidPackage,
      title: "Logoipsum",
    },
  ];

  const images = [
    "https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/16128702/pexels-photo-16128702/free-photo-of-mar-nublado-oceano-industria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambiar la imagen cada 5 segundos (5000 milisegundos)

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div className="presentation">
        <div
          className="presentation-text"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
          <h1>Texto sobre la promesa de tu negocio</h1>
          <p>
            Descripcion sobre lo que se dedica tu empresa y como ofreces
            resultados a tus clientes
          </p>
          <button>Call To Action</button>
        </div>
        <div className="companys">
          {listaCompanys.map((item, i) => (
            <div key={i}>
              {<item.icon />}
              <h2>{item.title} </h2>
            </div>
          ))}
        </div>
      </div>
      <div className="our-services">
        <div className="title">
          <h1>NUESTROS SERVICIOS</h1>
          <p>
            Explicar todos los servcicio que ofrece la empresa y sus beneficios
            y la facilidad que tenemos comparacion a otras empresas, Explicar
            todos los servcicio que ofrece la empresa .
          </p>
        </div>
        <div className="content">
          {listaOurService.map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <p>{item.texto}</p>
              <button>Call To Action</button>
            </div>
          ))}
        </div>
      </div>
      <div className="us">
        <div className="texto">
          <h1>SOBRE NOSOTROS</h1>
          <p>
            En [Nombre de la Empresa], nos dedicamos a ofrecer soluciones
            excepcionales que se adaptan a las necesidades únicas de nuestros
            clientes. Nos enorgullece ser tu socio confiable en la búsqueda de
            la mejor opción para tus requerimientos.
            <br></br>
            Nos destacamos por nuestro compromiso inquebrantable con la
            excelencia y la satisfacción del cliente. Desde el momento en que te
            unes a nosotros, nos comprometemos a trabajar incansablemente para
            entender tus necesidades y proporcionarte soluciones personalizadas
            que superen tus expectativas.
          </p>
        </div>
        <div className="cont-img">
          <div
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          ></div>
        </div>
      </div>
      <div className="why-choose-us">
        <h1>POR QUE ELEGIRNOS?</h1>
        <div className="contents">
          {listaWhyChooseUs.map((item, i) => (
            <div key={i} className="content">
              <h2 className="num">{item.num}</h2>
              <h1>{item.title}</h1>
              <p>{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
