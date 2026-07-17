"use client";

import { useEffect, useRef, useState } from "react";

const countries = [
  { code: "au", name: "Australia", dial: "+61" },
  { code: "nz", name: "New Zealand", dial: "+64" },
  { code: "us", name: "United States", dial: "+1" },
  { code: "ca", name: "Canada", dial: "+1" },
  { code: "gb", name: "United Kingdom", dial: "+44" },
  { code: "sg", name: "Singapore", dial: "+65" },
  { code: "in", name: "India", dial: "+91" },
  { code: "de", name: "Germany", dial: "+49" },
  { code: "fr", name: "France", dial: "+33" },
  { code: "jp", name: "Japan", dial: "+81" },
  { code: "za", name: "South Africa", dial: "+27" },
];

export default function PhoneField() {
  const [selected, setSelected] = useState(countries[0]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="phone-field" ref={ref}>
      <div className="country-picker">
        <button type="button" className="country-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
          <img src={`https://flagcdn.com/w40/${selected.code}.png`} alt="" />
          <span>{selected.dial}</span><b>⌄</b>
        </button>
        {open && <div className="country-menu">
          {countries.map((country) => <button type="button" key={country.code} onClick={() => { setSelected(country); setOpen(false); }}>
            <img src={`https://flagcdn.com/w40/${country.code}.png`} alt="" />
            <span>{country.name}</span><em>{country.dial}</em>
          </button>)}
        </div>}
      </div>
      <input type="tel" placeholder="Your phone number" />
      <input type="hidden" name="countryCode" value={selected.dial} />
    </div>
  );
}
