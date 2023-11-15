'use client'
import React, { useState } from 'react';
import Input from 'react';

const PreviousChatsList = ({}) => {

  return (
    <div className="h-full w-60">
      <div className="flex h-full min-h-0 flex-col">
        <div className="flex h-full min-h-0 flex-col">
          <div className="flex h-full min-h-0 flex-col transition-opacity opacity-100">
            <div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
              <nav className="flex h-full w-full flex-col p-2 gizmo:px-3 gizmo:pb-3.5 gizmo:pt-0" aria-label="Chat history">
                <div className="mb-1 flex flex-row gap-2">
                  <a className="flex px-3 min-h-[44px] py-1 items-center gap-3 dark:text-white cursor-pointer text-sm rounded-md border dark:border-white/20 gizmo:min-h-0 hover:bg-gray-500/10 h-11 gizmo:h-10 gizmo:rounded-lg gizmo:border-[rgba(0,0,0,0.1)] bg-white dark:bg-transparent flex-grow overflow-hidden">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="icon-sm shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    <span className="truncate">New Chat</span>
                  </a>
                  <span className="" data-state="closed">
                  <a className="flex px-3 min-h-[44px] py-1 gap-3 dark:text-white cursor-pointer text-sm rounded-md border dark:border-white/20 gizmo:min-h-0 hover:bg-gray-500/10 h-11 gizmo:h-10 gizmo:rounded-lg gizmo:border-[rgba(0,0,0,0.1)] w-11 flex-shrink-0 items-center justify-center bg-white dark:bg-transparent">
                  </a>
                  </span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousChatsList;