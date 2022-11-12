import React, { useState, useEffect } from 'react';
import style from './SearchForm.module.css';

import categories from '../../data/categories.json';

const SearchForm = () => {
  const dropdownRef = React.useRef();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [zipCode, setZipCode] = React.useState('');
  const [selectedCategory, setSelectedCategory] = useState([]);

  const [formErrors, setFormErrors] = useState({});
  const [coordinates, setCoordinates] = useState([]);

  /**
   * ============================================================================
   * Dropdown
   * ============================================================================
   */

  const handleDropdownClickOutside = ({ target }) => {
    if (dropdownRef.current && !dropdownRef.current.contains(target)) {
      setDropdownOpen(false);
    }
  };

  const handleDropdownEscape = ({ key }) => {
    if (key === 'Escape') {
      setDropdownOpen(false);
    }
  };

  const handleDropdownOpen = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    document.addEventListener('click', handleDropdownClickOutside);
    document.addEventListener('keydown', handleDropdownEscape);

    return () => {
      document.removeEventListener('click', handleDropdownClickOutside);
      document.removeEventListener('keydown', handleDropdownEscape);
    };
  }, [isDropdownOpen]);

  const getCoordinates = (value) => {
    const test = value.replace(/\D/g, '');
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${test}&key=AIzaSyDdE2m_2nAtfQN9CA3emww375xD5CELjiU`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
          const lat = data.results[0].geometry.location.lat;
          const lng = data.results[0].geometry.location.lng;
          setCoordinates([lat, lng]);
      })
      .catch(err => console.log(err))
  }

  const validateZipCode = async () => {
    const zipCodeNumber = zipCode.replace(/\D/g, '');

    if (response.status === 200) {
      const data = await response.json();

      if (data.erro) {
        console.log(data.erro)
      } else {
        console.log('CEP válido');
      }
      return;
    }
  }

  /**
   * ============================================================================
   * Checkbox
   * ============================================================================
   */

  const handleCheckboxChange = ({ target }) => {
    const { name, checked } = target;

    if (checked) {
      setSelectedCategory([...selectedCategory, name]);
    } else {
      setSelectedCategory(selectedCategory.filter((category) => category !== name));
    }
  };

  /**
   * ============================================================================
   * Zip code
   * ============================================================================
   */

  const handleZipCodeChange = ({ target }) => {
    const zipCodeMarked = target.value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');

    setZipCode(zipCodeMarked);
  };

  /**
   * Submit
   */

  const handleSubmit = (event) => {
    event.preventDefault();
    getCoordinates(zipCode);
    console.log('submit');
  };

  return (
    <form className="form form--horizontal" action="/resultados" method="GET" onSubmit={handleSubmit}>
      <div className={style.field}>
        <label className={style.label} htmlFor="zipcode">
          Qual é a sua localização?
        </label>
        <input className={style.input} value={zipCode} onChange={handleZipCodeChange} type="text" name="zipcode" id="zipcode" placeholder="00000-000" minLength="9" maxLength="9" required />
        {formErrors.zipCode && <span className={style.error}>{formErrors.zipCode}</span>}
      </div>

      <div className={`${style.field} ${style.dropdown}`} ref={dropdownRef}>
        <p className={style.label}>O que deseja descartar?</p>
        <button className={style.dropdownButton} type="button" aria-expanded={isDropdownOpen} aria-controls="dropdown-content" id="dropdown-button" onClick={handleDropdownOpen}>
          {selectedCategory.length > 0 ? `(${selectedCategory.length})` : ''} Selecione os tipos de resíduos
        </button>
        <div className={style.dropdownContent} aria-hidden={!isDropdownOpen} aria-labelledby="dropdown-button" id="dropdown-content" role="dialog">
          {categories.map(({ id, name, label }) => (
            <div key={id}>
              <input type="checkbox" name={name} id={id} onChange={handleCheckboxChange} />
              <label htmlFor={id}>{label}</label>
            </div>
          ))}
        </div>
        {formErrors.category && <span className={style.error}>{formErrors.category}</span>}
      </div>

      <footer>
        <button className="button button--primary" type="submit">
          Buscar por locais
        </button>
      </footer>
    </form>
  );
};

export default SearchForm;
