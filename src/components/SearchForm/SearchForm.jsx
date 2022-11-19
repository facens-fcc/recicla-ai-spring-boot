import React, { useState, useEffect } from 'react';
import style from './SearchForm.module.css';

import categories from '../../data/categories.json';

const SearchForm = () => {
  const dropdownRef = React.useRef();
  const dropdownButtonRef = React.useRef();
  const zipCodeRef = React.useRef();

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [zipCode, setZipCode] = useState('');
  const [isZipCodeValid, setZipCodeValid] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [isCategoryValid, setCategoryValid] = useState(false);

  const [isFormValid, setFormValid] = useState();

  const [address, setAddress] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    document.addEventListener('click', handleDropdownClickOutside);
    document.addEventListener('keydown', handleDropdownEscape);

    return () => {
      document.removeEventListener('click', handleDropdownClickOutside);
      document.removeEventListener('keydown', handleDropdownEscape);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    selectedCategory.length > 0 ? setCategoryValid(true) : setCategoryValid(false);
  }, [selectedCategory]);

  useEffect(() => {
    zipCode.length === 9 && getAdressData(zipCode);
  }, [zipCode]);

  /**
   * ============================================================================
   * Dropdown
   * ============================================================================
   */

  const handleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

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

  const handleDropdownLabel = () => {
    if (selectedCategory.length === 0) return 'Selecione';
    if (selectedCategory.length === 1) return `(${selectedCategory.length}) Selecionado`;
    if (selectedCategory.length > 1) return `(${selectedCategory.length}) Selecionados`;
  };

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
    const zipCode = target.value
      .replace(/\D/g, '') // Remove all non-digits.
      .replace(/(\d{5})(\d)/, '$1-$2') // Add a hyphen after the fifth digit.
      .replace(/(-\d{3})\d+?$/, '$1'); // Limit to 9 digits.

    setZipCode(zipCode);
  };

  const getAdressData = async (zipCode) => {
    const zipCodeValue = zipCode.replace(/\D/g, '');

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCodeValue}&key=AIzaSyDdE2m_2nAtfQN9CA3emww375xD5CELjiU`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'OK') {
          setZipCodeValid(true);
          setAddress(data.results[0].formatted_address);
          setCoordinates(data.results[0].geometry.location);
        } else {
          setZipCodeValid(false);
          setAddress(null);
          setCoordinates(null);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * ============================================================================
   * Submit
   * ============================================================================
   */

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isZipCodeValid && !isCategoryValid) {
      setFormValid(false);
      dropdownButtonRef.current.focus();
    }

    if ((!isZipCodeValid && isCategoryValid) || (!isZipCodeValid && !isCategoryValid)) {
      setFormValid(false);
      zipCodeRef.current.focus();
    }

    if (isZipCodeValid && isCategoryValid) {
      setFormValid(true);
      window.location.href = `/resultados?zipCode=${zipCode}&lat=${coordinates.lat}&lng=${coordinates.lng}&categories=${selectedCategory}&address=${address}`;
    }
  };

  return (
    <div className={style.searchForm}>
      <form className={style.form} action="/resultados" method="GET" onSubmit={handleSubmit}>
        <div className={style.field}>
          <label className={style.label} htmlFor="zipcode">
            Qual é a sua localização?
          </label>
          <input className={style.input} value={zipCode} onChange={handleZipCodeChange} type="text" name="zipcode" id="zipcode" placeholder="00000-000" minLength="9" maxLength="9" required ref={zipCodeRef} />
        </div>

        <div className={style.field} ref={dropdownRef}>
          <p className={style.label}>O que deseja descartar?</p>
          <button className={style.dropdownButton} type="button" aria-expanded={isDropdownOpen} aria-controls="dropdown-content" id="dropdown-button" onClick={handleDropdown} ref={dropdownButtonRef}>
            {handleDropdownLabel()}
          </button>
          <div className={style.dropdownContent} aria-hidden={!isDropdownOpen} aria-labelledby="dropdown-button" id="dropdown-content" role="dialog">
            {categories.map(({ id, label }) => (
              <div className={style.field} key={id}>
                <input type="checkbox" name={label} id={id} onChange={handleCheckboxChange} />
                <label htmlFor={id}>{label}</label>
              </div>
            ))}
          </div>
        </div>
        <footer>
          <button className="button button--primary" type="submit">
            Buscar por locais
          </button>
          <div role="alert" aria-live="assertive" aria-atomic="true" className={style.errors}>
            {isFormValid === false && (
              <ul className={style.errorsList}>
                {!isZipCodeValid && <li className={style.errorsItem}>⚠️ Digite um CEP válido.</li>}
                {!isCategoryValid && <li className={style.errorsItem}>⚠️ Selecione pelo menos um tipo de resíduo.</li>}
              </ul>
            )}
          </div>
        </footer>
      </form>
    </div>
  );
};

export default SearchForm;
