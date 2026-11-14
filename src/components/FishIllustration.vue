<template>
  <svg viewBox="0 0 600 300" role="img" aria-label="Illustration of a fish that darkens and deepens in colour as the page is scrolled, representing the aging process" class="h-auto w-full">
    <defs>
      <clipPath id="body"><path d="M30 150C90 70 220 40 340 70C400 85 440 115 480 140L570 80C555 120 550 180 570 220L480 160C440 190 400 215 340 230C220 260 90 230 30 150Z" /></clipPath>
      <linearGradient id="sheen" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#fff" stop-opacity=".35" />
        <stop offset=".5" stop-color="#fff" stop-opacity="0" />
        <stop offset="1" stop-color="#000" stop-opacity=".3" />
      </linearGradient>
      <pattern id="scales" width="22" height="16" patternUnits="userSpaceOnUse">
        <path d="M0 8Q11 -2 22 8M-11 16Q0 6 11 16Q22 6 33 16" fill="none" stroke="#000" stroke-opacity=".16" stroke-width="1.2" />
      </pattern>
    </defs>
    <g fill="var(--flesh)" stroke="var(--flesh-edge)" stroke-width="2" stroke-linejoin="round">
      <path d="M220 58C250 18 300 24 332 68Z" />
      <path d="M240 244C262 278 302 276 322 232Z" />
      <path d="M30 150C90 70 220 40 340 70C400 85 440 115 480 140L570 80C555 120 550 180 570 220L480 160C440 190 400 215 340 230C220 260 90 230 30 150Z" />
    </g>
    <g clip-path="url(#body)">
      <rect width="600" height="300" fill="url(#scales)" />
      <rect width="600" height="300" fill="url(#sheen)" />
      <!-- pellicle: darkened outer layer that grows with age -->
      <rect width="600" height="300" fill="#3a0f12" :style="{ opacity: 'calc(var(--age) * .45)' }" />
    </g>
    <path d="M150 95C128 130 128 170 150 205" fill="none" stroke="var(--flesh-edge)" stroke-width="3" stroke-linecap="round" />
    <path d="M165 150C260 134 380 138 470 150" fill="none" stroke="var(--flesh-edge)" stroke-width="1.5" stroke-dasharray="3 7" stroke-linecap="round" />
    <circle cx="92" cy="136" r="9" fill="#0c2433" />
    <circle cx="89" cy="133" r="2.5" fill="#e8edee" />
  </svg>
</template>
