export function convertTypeScriptToJava(ts: string): string {
  const bodySplit = ts.split("{");
  const declaration = bodySplit[0].trim();
  const objectName = declaration.split(" ").pop();
  const fields = bodySplit[1].split(";");
  fields.pop();
  const newFields = fields
    .map((f) => {
      const splitField = f.split(":");
      const name = splitField[0].trim();
      const type = determineJavaTypeFromTypeScriptType(splitField[1].trim());
      return `private ${type} ${name};`;
    })
    .join("\n  ");

  return `public class ${objectName} {\n  ${newFields}\n\r}`;
}

function determineJavaTypeFromTypeScriptType(tsType: string): string {
  const isArrayType = tsType.includes("[]") || tsType.includes("Array");
  const enclosedType = tsType.match(/\<(.*?)\>/)?.[1];
  if (isArrayType) {
    return `List<${
      enclosedType
        ? determineJavaTypeFromTypeScriptType(enclosedType)
        : determineJavaTypeFromTypeScriptType(tsType.split("[")[0])
    }>`;
  } else if (enclosedType) {
    return `${tsType.split("<")[0]}<${determineJavaTypeFromTypeScriptType(
      enclosedType
    )}>`;
  }
  switch (tsType) {
    case "string":
      return "String";
    case "number":
      return "Integer";
    case "boolean":
      return "Boolean";
    default:
      return tsType;
  }
}

export function convertJavaToTypeScript(java: string): string {
  const bodySplit = java.split("{");
  const declaration = bodySplit[0].trim();
  const objectName = declaration.split(" ").pop();
  const fields = bodySplit[1].split(";");
  fields.pop();
  const newFields = fields
    .map((f) => {
      const splitField = f.trim().split(" ");
      const name = splitField[2].trim();
      const type = determineTypeScriptTypeFromJavaType(splitField[1].trim());
      return `${name}: ${type};`;
    })
    .join("\n    ");

  return `export interface ${objectName} {\n    ${newFields}\n\r}`;
}

function determineTypeScriptTypeFromJavaType(jType: string): string {
  const isCollectionType = jType.includes("List") || jType.includes("Set");
  const enclosedType = jType.match(/\<(.*?)\>/)?.[1];
  if (isCollectionType) {
    return `Array<${
      enclosedType
        ? determineJavaTypeFromTypeScriptType(enclosedType)
        : determineJavaTypeFromTypeScriptType(jType.split("[")[0])
    }>`;
  } else if (enclosedType) {
    return `${jType.split("<")[0]}<${determineJavaTypeFromTypeScriptType(
      enclosedType
    )}>`;
  }
  switch (jType) {
    case "String":
      return "string";
    case "Integer":
      return "number";
    case "Double":
      return "number";
    case "Boolean":
      return "boolean";
    default:
      return jType;
  }
}
