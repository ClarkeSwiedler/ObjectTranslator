export function convertJavaToGroovyMapper(java: string): string {
  const bodySplit = java.split("{");
  const declaration = bodySplit[0].trim();
  const objectName = declaration.split(" ").pop();
  const fields = bodySplit[1].split(";");
  fields.pop();
  console.log(fields);
  const newFields = fields
    .map((f) => {
      const splitField = f.trim().split(" ");
      console.log(splitField);
      const type = splitField[1].trim();
      const name = splitField[2].trim();
      return `.${name}((map.${name} ? map.${name} : default) as ${type})`;
    })
    .join("\n    ");

  return `static def create${objectName}(Map map = [:]) {\n  return ${objectName}.builder()\n    ${newFields}\n\r  .build()\n\r}`;
}

export function convertGroovyMapperToJava(groovy: string): string {
  return groovy;
}
