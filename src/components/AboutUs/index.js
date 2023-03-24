import React from "react";

import {
  ProductsContainer,
  ProductsHeading,
} from "./AboutElements";
import { HorariosPizzeria } from "./Horario";

export const AboutUs = () => {
  return (
    <>
      <ProductsContainer id='time'>
        <ProductsHeading> Horarios </ProductsHeading>
        <HorariosPizzeria/>
      </ProductsContainer>
      <ProductsContainer id="about">
      <ProductsHeading> <p >Sobre Nosotros</p></ProductsHeading>
        <p>
        ¡Bienvenido a la mejor pizzería de la ciudad! En nuestro establecimiento, nos enorgullecemos de servir las pizzas más deliciosas y auténticas que puedas encontrar en cualquier parte. Nuestros ingredientes frescos, nuestra masa casera y nuestro horno de leña garantizan una experiencia culinaria que no olvidarás.
        </p>
        <p>Desde la clásica Margarita hasta la más exótica Hawaiana, nuestro menú cuenta con una amplia variedad de opciones para satisfacer todos los gustos. Y si estás buscando algo diferente, también ofrecemos opciones vegetarianas y sin gluten.
        </p>
        <p>Además de nuestras pizzas, ofrecemos una selección de ensaladas frescas, aperitivos deliciosos y postres tentadores para completar tu comida. Todo ello, acompañado de una amplia selección de bebidas refrescantes y vinos de calidad.
        </p>
        <p>Nuestro ambiente acogedor y amigable te hará sentir como en casa, ya sea que estés comiendo solo, en pareja o en grupo. Y si prefieres disfrutar de tu pizza en casa, también ofrecemos servicio de entrega para que puedas disfrutar de la mejor pizza en la comodidad de tu hogar.
        </p>
        <p>Así que ven a visitarnos y prueba lo que hace que nuestra pizzería sea la mejor de la ciudad. ¡Estamos ansiosos por servirte!
        </p>
      </ProductsContainer>
    </>
  );
};
