import { input } from "@prismatic-io/spectral";

export const account = input({
    label: "Account de Linea",
    type: "string",
    required: true,
  });
  
export const token = input({
    label: "token de autorizacion",
    type: "string",
    required: true,
  });