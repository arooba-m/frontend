'use client';

import React from 'react'
import useStore from '@/app/_store/authStore';

export default function homeComponent() {
  const store = useStore();
  console.log("store in home: ", store.authUser);
  
  return (
    <div>homeComponent</div>
  )
}
