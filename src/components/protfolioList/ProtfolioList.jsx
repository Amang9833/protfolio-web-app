import React from 'react';
import "./protfolioList.scss";



export default function ProtfolioList({title , active , setSelected , id}) {
    return (
        <li
        className={active ? "protfolioList active" : "protfolioList"}
        onClick={() => setSelected(id)}
        >
        {title}
      </li>
    );
}

