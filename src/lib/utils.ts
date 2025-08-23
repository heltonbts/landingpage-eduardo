import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleClickButton () {
  window.location.href = 'https://go.hotmart.com/C101506718F'
}