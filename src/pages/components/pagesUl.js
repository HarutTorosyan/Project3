import React from "react";
import { Link } from "react-router-dom";

export default function PagesUl(props) {
  return (
    <ul className="space-y-2">
      <div className="text-black font-bold">{props.listTitle}</div>
      <li className="flex hover:text-main-purple hover:bg-slate-200 px-5 py-1 transition-all duration-200 ease-linear">
        <Link className="w-full">{props.li1}</Link>
      </li>
      <li className="flex hover:text-main-purple hover:bg-slate-200 px-5 py-1 transition-all duration-200 ease-linear">
        <Link className="w-full">{props.li2}</Link>
      </li>
      <li className="flex hover:text-main-purple hover:bg-slate-200 px-5 py-1 transition-all duration-200 ease-linear">
        <Link className="w-full">{props.li3}</Link>
      </li>
      <li className="flex hover:text-main-purple hover:bg-slate-200 px-5 py-1 transition-all duration-200 ease-linear">
        <Link className="w-full">{props.li4}</Link>
      </li>
      <li className="flex hover:text-main-purple hover:bg-slate-200 px-5 py-1 transition-all duration-200 ease-linear">
        <Link className="w-full">{props.li5}</Link>
      </li>
      <li className="flex hover:text-main-purple hover:bg-slate-200 px-5 py-1 transition-all duration-200 ease-linear">
        <Link className="w-full">{props.li6}</Link>
      </li>
      <li className="flex hover:text-main-purple hover:bg-slate-200 px-5 py-1 transition-all duration-200 ease-linear">
        <Link className="w-full">{props.li7}</Link>
      </li>
      <li className="flex hover:text-main-purple hover:bg-slate-200 px-5 py-1 transition-all duration-200 ease-linear">
        <Link className="w-full">{props.li8}</Link>
      </li>
      <li className="flex hover:text-main-purple hover:bg-slate-200 px-5 py-1 transition-all duration-200 ease-linear">
        <Link className="w-full">{props.li9}</Link>
      </li>
    </ul>
  );
}
