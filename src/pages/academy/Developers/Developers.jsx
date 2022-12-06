import React from 'react';
import useTheme from '/src/hooks/useTheme';
import Card from '../../../components/Card/Card';

function Developers() {
  useTheme('blue');

  return (
    <>
      <Card>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero illum
        illo accusamus pariatur, ratione ipsum voluptas repellat repellendus et.
        Incidunt fuga voluptatum at cumque, dolorum iste, voluptates
        reprehenderit praesentium nulla corporis id qui odit temporibus sequi
        delectus eveniet! Molestiae voluptatibus dolores sit sapiente ullam
        suscipit voluptatum, quia minima beatae dicta nesciunt quaerat error
        doloribus veritatis itaque, expedita tenetur est vel eaque repudiandae
        rerum. Aut, cupiditate unde tenetur odio repellat deserunt impedit vero
        eaque eligendi minus nostrum distinctio assumenda, eius fugit cumque vel
        autem perferendis laborum? Odit nam illum mollitia dignissimos eaque.
        Eos quod odit velit ducimus cupiditate accusantium consequatur culpa!
      </Card>
      <h1 className="only-for-testing">/academy/developers</h1>
    </>
  );
}

export default Developers;
