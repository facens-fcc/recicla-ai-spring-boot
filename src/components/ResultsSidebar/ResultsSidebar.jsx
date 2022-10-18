import React from 'react';
import style from './ResultsSidebar.module.css';

const ResultsSidebar = () => {
  return (
    <form>
      <div>
        <label htmlFor="address">Endereço</label>
        <input type="text" name="address" id="address" />
      </div>
      <div>
        <label htmlFor="address">Quais tipos de lixo deseja descartar?</label>
        <select>
          <option value="Pilhas">Pilhas</option>
          <option value="Carregadores">Carregadores</option>
          <option value="Celulares">Celulares</option>
        </select>
      </div>
    </form>
  );
};

export default ResultsSidebar;
