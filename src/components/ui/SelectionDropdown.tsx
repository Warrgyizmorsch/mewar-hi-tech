"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface SelectionDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: string[] | DropdownOption[];
  placeholder?: string;
  className?: string;
  buttonClassName?: string;
  id?: string;
}

export default function SelectionDropdown({
  value,
  onChange,
  options,
  placeholder = "Select an option",
  className = "",
  buttonClassName,
  id,
}: SelectionDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Normalize options to DropdownOption[]
  const normalizedOptions: DropdownOption[] = options.map((opt) => {
    if (typeof opt === "string") {
      return { value: opt, label: opt };
    }
    return opt;
  });

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const defaultButtonClass = "border-2 rounded-lg text-xs md:text-sm py-2.5 px-2 md:py-3 md:px-4";
  const btnClass = buttonClassName || defaultButtonClass;

  return (
    <div className={`relative w-full ${className}`} ref={dropdownRef} id={id}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between appearance-none bg-background transition-colors font-semibold focus:outline-none ${btnClass} ${
          isOpen ? "border-primary text-foreground" : "border-border text-foreground hover:border-muted-foreground/40"
        }`}
      >
        <span className={`truncate text-left whitespace-nowrap mr-2 ${!selectedOption ? "text-muted-foreground" : ""}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute z-50 w-full mt-2 bg-card border-2 border-border rounded-xl shadow-lg shadow-black/10 dark:shadow-black/40 overflow-hidden origin-top animate-in fade-in slide-in-from-top-2 duration-150"
        >
            <ul className="max-h-60 overflow-y-auto py-1 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
              {normalizedOptions.length === 0 ? (
                <li className="px-4 py-3 text-sm text-muted-foreground text-center">
                  No options available
                </li>
              ) : (
                normalizedOptions.map((option) => (
                  <li key={option.value}>
                    <button
                      type="button"
                      onClick={() => {
                        onChange(option.value);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-between ${
                        value === option.value
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <span>{option.label}</span>
                      {value === option.value && (
                        <Check size={16} className="text-primary shrink-0" />
                      )}
                    </button>
                  </li>
                ))
              )}
            </ul>
        </div>
      )}
    </div>
  );
}
