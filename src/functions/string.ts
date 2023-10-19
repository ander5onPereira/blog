export const CutText=(texto:string, limite:number):string =>{
  if (texto.length > limite) {
    return texto.slice(0, limite) + " ..."; // Adicione "..." para indicar que o texto foi cortado
  } else {
    return texto;
  }
}