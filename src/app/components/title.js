import React from 'react';

export default function SectionTitle({ title })
{
    return (
    <div className="self-start flex">
      <h1 className="font-extrabold text-3xl tracking-widest text-white relative">
        <span className="before-content">{title}</span>
      </h1>
    </div>
  );
};