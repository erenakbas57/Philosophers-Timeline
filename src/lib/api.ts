
import { Philosopher } from '@/lib/philosophers';

// Function to fetch philosophers from API
export async function fetchPhilosophers(): Promise<Philosopher[]> {
  const response = await fetch('/api/philosophers');
  
  if (!response.ok) {
    throw new Error('Failed to fetch philosophers');
  }
  
  return response.json();
}

// Function to fetch a single philosopher by ID
export async function fetchPhilosopherById(id: string): Promise<Philosopher> {
  const response = await fetch(`/api/philosophers/${id}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch philosopher with ID: ${id}`);
  }
  
  return response.json();
}
