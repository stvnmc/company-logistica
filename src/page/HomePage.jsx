import React from "react";

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

  return (
    <main>
      <div className="presentation">
        <div className="presentation-text">
          <h1>Texto sobre la promesa de tu negocio</h1>
          <p>
            Descripcion sobre lo que se dedica tu empresa y como ofreces
            resultados a tus clientes
          </p>
          <button>Call To Action</button>
        </div>
        <div className="companys">
          <div>
            <BiStoreAlt />
            <h2>Logoipsum </h2>
          </div>
          <div>
            <BiSpa />
            <h2>Logoipsum </h2>
          </div>
          <div>
            <BiSolidTruck />
            <h2>Logoipsum </h2>
          </div>
          <div>
            <BiSolidPlaneLand />
            <h2>Logoipsum </h2>
          </div>
          <div>
            <BiSolidPackage />
            <h2>Logoipsum </h2>
          </div>
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
          <img
            src={
              "https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
