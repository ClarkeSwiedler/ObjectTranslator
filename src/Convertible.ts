interface Convertible {
  id: string;
  description: string;
  convertToJava: (toConvert: string) => string;
  convertFromJava: (toConvert: string) => string;
}

export default Convertible;
