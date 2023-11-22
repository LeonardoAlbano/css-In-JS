// Importando o componente Container de um arquivo chamado "style"
import { Container } from "./style";

// Definindo um componente funcional chamado Details
export function Details() {
  
  // Retornando JSX, que é uma extensão de sintaxe para JavaScript recomendada pelo React
  return (
    // Renderizando o componente Container
    <Container>
      {/* Renderizando um elemento h1 (título) com o texto "Salve familia, uma boa" */}
      <h1>Salve familia, uma boa</h1>

      {/* Renderizando um elemento p (parágrafo) com o texto "sALVEADO MEU TRUTA" */}
      <p>sALVEADO MEU TRUTA</p>
    </Container>
  );
}
