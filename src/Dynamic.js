import React, { useEffect, useState } from 'react'

function Dynamic({
  callback,
  ssr = false,
  fallback: Fallback
}) {

  const [ Module, setModule ] = useState(null);

  useEffect(async() => {

    if((ssr && typeof window) || (!ssr && !typeof window)) {
      return;
    }
    else {
     const module = await callback();
     setModule(module);
    }

  }, [])

  const Component = Module && Module.default

  return Component ? <Component /> : Fallback
}

export default Dynamic;