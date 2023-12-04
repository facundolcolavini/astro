import { navigate } from "astro:transitions/client";
import { useState } from "preact/hooks";
import type { JSX } from "preact/jsx-runtime";
import type { Option, Results } from "../../types/selects.form.types";
import FilterSelect from "./FilterSelect";


interface Props {
  selects: Results
  onFilter?: (e: Record<string, string>) => void
}

const FormFilters = ({ selects, onFilter }: Props) => {
  const { localidades: sellocalidades, barrio: barrios1 } = selects
  // Obtener los valores de los filtros de la URL 
  const [urlSearchParams, setUrlSearchParams] = useState({});
  const [select, setSelect] = useState({});

  const bar = barrios1.filter(
    ({ descripcion }: Option) => descripcion !== "INDISTINTO"
  ).map(({ descripcion, value }: Option) => (
    { label: descripcion, value }
  ));
  const locs = sellocalidades.filter(

    ({ descripcion }: Option) => descripcion !== "INDISTINTO"
  ).map(({ descripcion, value }: Option) => (
    { label: descripcion, value }
  ));

  const handleSelect: JSX.GenericEventHandler<HTMLElement> = (e) => {
    const { id, value } = e.target as HTMLSelectElement;
    setSelect({ ...select, [id]: value });
  };

  // Actualizar los filtros de la URL para que se reflejen en la tabla
  const hanldeSubmit = async (e: JSX.TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const newParams = { ...urlSearchParams, ...select };
    Object.keys(newParams).forEach((key) => {
      params.set(key, newParams[key as keyof typeof newParams]);
    });

    url.search = params.toString();
    navigate(`/search/${params.toString()}`);
  }

  // Boton para resetear los filtros de la URL y del formulario
  const handleReset = (e:Event) => {
    
    e.preventDefault();
    setSelect({});
    // Update URL filters 
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    // Reset form 
    const form = document.getElementById("form-filters") as HTMLFormElement;
    form.reset();
    
    navigate(`/search`);
    setTimeout(() => {    window.location.reload();},100)
     
  }
  return (

    <form  id="form-filters" class="mb-4 w-100" onSubmit={hanldeSubmit}>
      <label class="text-white px-1" >Localidad :</label>
      <FilterSelect defaultOption={{ value: "All", label: "Seleccione una opción" } || select }
        id="sellocalidades" opts={locs} onChange={handleSelect} />

      <FilterSelect defaultOption={{ value: "All", label: "Seleccione una opción" } || select }
        
        id="barrios1" opts={bar} onChange={handleSelect} />
      {/* Boton de buscar y uno de limpar filtros */}
      <div class="flex justify-between items-center px-1 mt-5 gap-1">
        <button class="bg-[#768294] text-white px-4 py-2 rounded" type="button" onClick={handleReset}>Limpiar</button>
        <button type="submit" class="w-full p-2 text-white  rounded bg-blue-600 hover:bg-blue-700">Buscar</button>
      </div>
    </form>


  )
}

export default FormFilters