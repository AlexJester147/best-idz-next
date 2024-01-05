"use client";
import { React, useEffect, useState } from "react";
import { getIdPo } from "@/api/requests";
import useStore from "@/store/cart";

function Redirect() {
  const { items } = useStore();

  getIdPo(items[0]).then((data) => console.log);

  return (
    <div className="redirect">
      <span className="loader"></span>
    </div>
  );
}

export default Redirect;
