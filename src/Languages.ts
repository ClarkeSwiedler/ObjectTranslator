import {
  convertGroovyMapperToJava,
  convertJavaToGroovyMapper,
} from "./converters/groovy";
import {
  convertJavaToTypeScript,
  convertTypeScriptToJava,
} from "./converters/typeScript";
import type Convertible from "./Convertible";

const Languages: Array<Convertible> = [
  {
    id: "jvo",
    description: "Java Object",
    convertToJava: (code) => code,
    convertFromJava: (code) => code,
  },
  {
    id: "tsi",
    description: "TypeScript Interface",
    convertToJava: convertTypeScriptToJava,
    convertFromJava: convertJavaToTypeScript,
  },
  {
    id: "gtm",
    description: "Groovy Test Map",
    convertToJava: convertGroovyMapperToJava,
    convertFromJava: convertJavaToGroovyMapper,
  },
];

export default Languages;
