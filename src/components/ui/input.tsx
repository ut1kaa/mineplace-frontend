"use client"

import { useState } from "react";
import { OutlineSubBlock } from "./outlineBlocks";
import styles from "@/styles/components/ui/input.module.scss"
import SeachIcon from "$/assets/icons/search.svg"
import Drop from "$/assets/icons/drop.svg"
import Cross from "$/assets/icons/cross.svg"

import {addRandomChars} from "@/utils/idGenerator";

const Search = ({standartValue}: {standartValue?: string}) => {
    const [value, setValue] = useState(standartValue);

    const elementId = addRandomChars("search");

    const handleChange= (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <OutlineSubBlock style={{height:"55px", width:"100%"}}>
        <div className={styles.search}>
            <input type="text" value={value} onChange={handleChange} placeholder="Поиск..." id={elementId} name="search"/>
            <SeachIcon />
            <label htmlFor={elementId}>Поиск...</label>
        </div>
      </OutlineSubBlock>
    );
}

const MultiSelect = ({info, options, standartSelectedOptions=[]} : {info: {label: string, name: string}, options: {name: string, id: string}[]; standartSelectedOptions?: {name: string, id: string}[]}) => {
    const elementId = addRandomChars("multiselect");

    const [selectedOptions, setSelectedOptions] = useState<{name: string, id: string}[]>(standartSelectedOptions);
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const toggleOption = (option: {name: string, id: string}) => {
        const isSelected = selectedOptions.some((selectedOption) => selectedOption.id === option.id);
        let updatedSelected: {name: string, id: string}[] = [];
        
        if (isSelected) {
            updatedSelected = selectedOptions.filter((selectedOption) => selectedOption.id !== option.id);
        } else {
            updatedSelected = [...selectedOptions, option];
        }
        
        setSelectedOptions(updatedSelected);
        
        if (updatedSelected.length === options.length) {
            setShowOptions(false);
        } else {
            setShowOptions(true);
        }
    };

    const removeOption = (option: {name: string, id: string}) => {
        setSelectedOptions(selectedOptions.filter((selectedOptions) => selectedOptions.id !== option.id));
    }  
    
    return (
        <div className={styles.multiSelect}>
            <OutlineSubBlock style={{height:"auto", width:"100%", minHeight:"55px", padding: "0.5rem", position: "relative"}}>
                <label htmlFor={elementId} style={{ opacity: selectedOptions.length > 0 ? 0 : 1 }}>{info.label}</label>
                    <div className={styles.selectedOptions}>
                        <ul>
                        {selectedOptions.map((option) => (
                            <li key={option.id} onClick={() => removeOption(option)}>
                            {option.name}{' '}
                            <button onClick={() => removeOption(option)}><Cross width="auto" height="auto"/></button>
                            </li>
                        ))}
                        </ul>
                    </div>
                <button className={`${styles.dropButton} ${selectedOptions.length === 0 ? styles.dropButtonEmpty :""}`} onClick={() => setShowOptions(!showOptions)}
                disabled={selectedOptions.length === options.length}>
                    <div className={showOptions ? styles.activeDrop : styles.inctiveDrop}><Drop/></div>
                </button>
            </OutlineSubBlock>
            {showOptions && (
                <div className={styles.availableOptions}>
                    <OutlineSubBlock style={{height:"auto", width:"100%"}}> 
                        <select id={elementId} name={info.name} multiple style={{height: (options.length-selectedOptions.length) * 58 + "px"}} 
                        onChange={(e) => {
                            const selectedOptionId = e.target.value;
                            const selectedOption = options.find(option => option.id === selectedOptionId);
                            if (selectedOption) {
                                toggleOption(selectedOption); 
                            }
                        }}>
                            {options
                            .filter((option) => !selectedOptions.some((selectedOption) => selectedOption.id === option.id))
                            .map((option) => (
                                <option key={option.id} value={option.id}>
                                <span>{option.name}</span>
                                </option>
                            ))}
                        </select>
                    </OutlineSubBlock>
                </div>
            )}
        </div>
    );
}


const Select = ({info, options, standartSelectedOption} : {info: {label: string, name: string}, options: {name: string, id: string}[]; standartSelectedOption: {name: string, id: string}}) => {
    const elementId = addRandomChars("select");

    const [selectedOption, setSelectedOption] = useState<{name: string, id: string} | undefined>(standartSelectedOption);
    const [showOptions, setShowOptions] = useState<boolean>(false);
    
    const toggleOption = (option: { name: string; id: string }) => {
        setSelectedOption(option);
        setShowOptions(false);
    };


    return (
        <div className={styles.Select}>
            <OutlineSubBlock style={{ height: "auto", width: "100%", minHeight: "55px", padding: "1rem", position: "relative" }}>
                <label htmlFor={elementId} style={{ opacity: selectedOption ? 0 : 1 }}>{info.label}</label>
                <div className={styles.selectedOption} onClick={() => setShowOptions(!showOptions)}>
                    {selectedOption ? selectedOption.name : ""}
                </div>
                <button className={styles.dropButton} onClick={() => setShowOptions(!showOptions)}>
                    <div className={showOptions ? styles.activeDrop : styles.inctiveDrop}><Drop/></div>
                </button>
            </OutlineSubBlock>
            {showOptions && (
                <div className={styles.availableOptions}>
                    <OutlineSubBlock style={{height:"auto", width:"100%"}}> 
                        <select id={elementId} name={info.name} multiple style={{ height: (options.length - (selectedOption ? 1 : 0)) * 58 + "px" }}
                        onChange={(e) => {
                            const selectedOptionId = e.target.value;
                            const selectedOption = options.find(option => option.id === selectedOptionId);
                            if (selectedOption) {
                                toggleOption(selectedOption); 
                            }
                        }}>
                        {options
                            .filter(option => selectedOption ? option.id !== selectedOption.id : true)
                            .map((option) => (
                                <option key={option.id} value={option.id}>{option.name}</option>
                            ))}
                        </select>
                    </OutlineSubBlock>
                </div>
            )}      
        </div>
    );
}

export {Search, MultiSelect, Select};