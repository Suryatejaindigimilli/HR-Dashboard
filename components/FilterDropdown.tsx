import React from 'react';

interface FilterDropdownProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, options, selected, onChange }) => {
  const handleToggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="border rounded-md p-2">
      <p className="font-semibold mb-1">{label}</p>
      {options.map((option) => (
        <label key={option} className="block">
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => handleToggle(option)}
            className="mr-2"
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default FilterDropdown;