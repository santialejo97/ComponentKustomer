import { component } from "@prismatic-io/spectral";
import actions from "./actions";

export default component({
  key: "componentKustomer",
  public: false,
  display: {
    label: "Kustomer",
    description: "Componente para hacer consulta de plantillas de kustomer",
    iconPath: "kustomer.png",
  },
  actions,
});
