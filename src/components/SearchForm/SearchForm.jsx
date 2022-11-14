import React, { useState, useEffect } from 'react';
import style from './SearchForm.module.css';

import categories from '../../data/categories.json';

const SearchForm = () => {
  const dropdownRef = React.useRef();
  const dropdownButton = React.useRef();
  const zipCodeRef = React.useRef();

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [zipCode, setZipCode] = useState('');
  const [isZipCodeValid, setZipCodeValid] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [isCategoryValid, setCategoryValid] = useState(false);

  const [isFormValid, setFormValid] = useState();

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

  const handleDropdownLabel = () => {
    if (selectedCategory.length === 0) return 'Selecione';
    if (selectedCategory.length === 1) return `(${selectedCategory.length}) Selecionados`;

    return `(${selectedCategory.length}) Selecionados`;
  };

  useEffect(() => {
    document.addEventListener('click', handleDropdownClickOutside);
    document.addEventListener('keydown', handleDropdownEscape);

    return () => {
      document.removeEventListener('click', handleDropdownClickOutside);
      document.removeEventListener('keydown', handleDropdownEscape);
    };
  }, [isDropdownOpen]);

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

  useEffect(() => {
    selectedCategory.length > 0 ? setCategoryValid(true) : setCategoryValid(false);
  }, [selectedCategory]);

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
    console.log(zipCodeMarked);
  };

  const validateZipCode = async (zipCode) => {
    const zipCodeValue = zipCode.replace(/\D/g, '');

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCodeValue}&key=AIzaSyDdE2m_2nAtfQN9CA3emww375xD5CELjiU`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        data.status === 'OK' ? setZipCodeValid(true) : setZipCodeValid(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleZipCodeBlur = () => {
    zipCode.length === 9 && validateZipCode(zipCode);
  };

  /**
   * ============================================================================
   * Submit
   * ============================================================================
   */

  const handleSubmit = (event) => {
    event.preventDefault();
    validateZipCode(zipCode);

    if (isZipCodeValid && !isCategoryValid) {
      setFormValid(false);
      dropdownButton.current.focus();
    }

    if ((!isZipCodeValid && isCategoryValid) || (!isZipCodeValid && !isCategoryValid)) {
      setFormValid(false);
      zipCodeRef.current.focus();
    }

    if (isZipCodeValid && isCategoryValid) {
      setFormValid(true);
    }

    isFormValid && (window.location.href = `/resultados?zipCode=${zipCode}&category=${selectedCategory}`);
  };

  return (
    <div className={style.searchForm}>
      <form className={style.form} action="/resultados" method="GET" onSubmit={handleSubmit}>
        <div className={style.field}>
          <label className={style.label} htmlFor="zipcode">
            Qual é a sua localização?
          </label>
          <input className={style.input} value={zipCode} onChange={handleZipCodeChange} onBlur={handleZipCodeBlur} type="text" name="zipcode" id="zipcode" placeholder="00000-000" minLength="9" maxLength="9" required ref={zipCodeRef} />
        </div>

        <div className={`${style.field} ${style.dropdown}`} ref={dropdownRef}>
          <p className={style.label}>O que deseja descartar?</p>
          <button className={style.dropdownButton} type="button" aria-expanded={isDropdownOpen} aria-controls="dropdown-content" id="dropdown-button" onClick={handleDropdownOpen} ref={dropdownButton}>
            {handleDropdownLabel()}
          </button>
          <div className={style.dropdownContent} aria-hidden={!isDropdownOpen} aria-labelledby="dropdown-button" id="dropdown-content" role="dialog">
            {categories.map(({ id, name, label }) => (
              <div key={id}>
                <input type="checkbox" name={name} id={id} onChange={handleCheckboxChange} />
                <label htmlFor={id}>{label}</label>
              </div>
            ))}
          </div>
        </div>

        <footer>
          <button className="button button--primary" type="submit">
            Buscar por locais
          </button>

          {/* Errors */}
          <ul role="alert" className={style.errors}>
            {isFormValid === false && !isZipCodeValid && <li className={style.error}>⚠️ Digite um CEP válido.</li>}
            {isFormValid === false && !isCategoryValid && <li className={style.error}>⚠️ Selecione pelo menos um tipo de resíduo.</li>}
          </ul>
        </footer>
      </form>
    </div>
  );
};

export default SearchForm;
