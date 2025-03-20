import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to convert file to Base64 string
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
}

// Function to validate email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to center a resource card in the container
export function centerResourceCard(card: HTMLElement, container: HTMLElement) {
  if (!card || !container) return;
  
  const containerWidth = container.offsetWidth;
  const cardWidth = card.offsetWidth;
  const cardLeft = card.offsetLeft;
  
  // Calculate the scroll position that will center the card
  const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidth / 2);
  
  // Smooth scroll to the position
  container.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });
}
