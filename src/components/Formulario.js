import React, { useContext } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';

const Formulario = () => {

    const { hola } = useContext(CategoriasContext);

    alert(hola);

    return (
        <form
            className="col-md-12"
        >
            <fieldset>
                <legend>Search drinks by categories or ingredients</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                         name="nombre"
                         className="form-control"
                         type="text"
                         placeholder="Search by ingredient"
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                    >
                        <option value="">-- Select Category --</option>
                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Find Drinks"
                    />
                </div>
            </div>
        </form>
    );
}

export default Formulario;
