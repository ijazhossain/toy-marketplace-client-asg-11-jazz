import React, { useState } from 'react';

const Sort = ({ selectedOption, handleOptionChange }) => {


    const options = [
        { value: 'ascending', label: 'Ascending' },
        { value: 'descending', label: 'Descending' },

    ];


    return (
        <div>
            <select className='w-[200px] text-base ms-auto mb-8 rounded-[5px] block text-[#474747]  font-extrabold bg-[#d3d1d1] p-[10px]' value={selectedOption} onChange={e => handleOptionChange(e.target.value)}>
                <option value="">Sort By Price</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );

};

export default Sort;