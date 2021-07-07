import React, { useRef, useEffect, useState, } from 'react';
import InputMask from 'react-input-mask';

import {
  InputContainer,
  InputElement,
  InputElementPhone,
  DropDown,
} from './styles';

interface InputComponentDTO {
  iconPath?: string;
  label: string;
  inputType: 'name' | 'email' | 'phone' | 'city' | 'date';
  listOfCitys? : {
    city: string,
    location: string,
    clinical: string,
  }[],
  updateState?: ( value: string) => void;
  value?: string | number;
  updateValidation: ({ field, value }: {
    field: 'name' | 'phone' | 'email' | 'city' | 'date';
    value: boolean;
  }) => void;
  dates?: string[];
}

const Input: React.FC<InputComponentDTO> = ({ 
  iconPath, 
  label, 
  inputType, 
  listOfCitys,
  updateState,
  value,
  updateValidation,
  dates
}) => {
  const [ inputData, setInputData ] = useState('');
  const [ validation, setValidation ] = useState<'success' | 'error'>('error');

  const dataSelectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    functionValidation();
    
    if(updateState) {
      updateState(inputData);
    }
  }, [inputData])
  
  useEffect(() => {
    console.log(dataSelectRef.current?.value);
    
    if(dates?.length > 0) {
      if(dataSelectRef.current?.value) {
        console.log('existe');
        setInputData(dataSelectRef.current?.value);
      }
    } else {
      setInputData('');
    }
    
    if(inputType == 'date') {
      functionValidation();
    }
  }, [dates]);

  function functionValidation () {
    if(inputType == 'name') {
      if ( inputData.length > 0 ) {
        setValidation('success');
        updateValidation({ field: 'name', value: true });
      } else {
        setValidation('error');
        updateValidation({ field: 'name', value: false });
      }
    }

    if (inputType == 'phone') {
      if(!inputData.includes('_') && inputData.length > 0){
        setValidation('success');
        updateValidation({ field: 'phone', value: true });
      } else {
        setValidation('error');
        updateValidation({ field: 'phone', value: false });
      }
    }
    
    if( inputType == 'email' ) {
      if ( inputData.includes('@')  ) {
        setValidation('success');
        updateValidation({ field: 'email', value: true });
      } else {
        setValidation('error');
        updateValidation({ field: 'email', value: false });
      }
    }

    if( inputType == 'city' ) {
      if( inputData != '' ) {
        setValidation('success');
        updateValidation({ field: 'city', value: true });
      } else {
        setValidation('error');
        updateValidation({ field: 'city', value: false });
      }
    }
    
    if( inputType == 'date' ) {
      if( inputData != '' ) {
        setValidation('success');
        updateValidation({ field: 'date', value: true });
      } else {
        setValidation('error');
        updateValidation({ field: 'date', value: false });
      }
    }

  }

  return (
    <InputContainer>
      <div className="label">
        <figure>
          <img src={iconPath} alt="icon"/>
        </figure>
        <span>{ label }</span>
      </div>

      {
        inputType == 'phone'? 
          <InputElementPhone 
            mask='(99) 9 9999-9999' 
            current_state={validation} 
            value={inputData} 
            onChange={ e => setInputData(e.target.value) }
            type='phone'
          /> 
          : 
          <></>
      } 
      
      {
        inputType == 'name'? 
          <InputElement 
            current_state={validation} 
            value={inputData} 
            onChange={ e => setInputData(e.target.value) }
            type='text'
          />
          :
          <></>
      }

      {
        inputType == 'email'?
          <InputElement 
            current_state={validation} 
            value={inputData} 
            onChange={ e => setInputData(e.target.value) }
            type='mail'
          />
          :
          <></>
      }
      
      {
        inputType == 'city'?
          <DropDown 
            current_state={validation} 
            value={inputData} 
            onChange={ e => setInputData(e.target.value) }
          >
            <option value=""> Selecione uma cidade </option>
            {
              listOfCitys.map( (item, index) => {
                return (
                  <option key={index} value={item.city} > {item.city} </option>
                )
              } )
            }
          </DropDown>
          :
          <></>
      }

      {
        inputType == 'date'?
          <DropDown 
            current_state={validation} 
            onChange={ e => setInputData(e.target.value) }
            ref={dataSelectRef}
          >
            <option value="" > Selecione uma data </option>

            {
              dates.map( (item, index) => (
                  <option key={index} value={item} >{item}</option>
              ) )
            }
          </DropDown>
        :
          <></>
      }

    </InputContainer>
  );
}

export default Input;