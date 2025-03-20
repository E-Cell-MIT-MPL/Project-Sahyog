import { 
  pitches, type Pitch, type InsertPitch,
  resources, type Resource, type InsertResource
} from "@shared/schema";

export interface IStorage {
  // Pitch methods
  getPitches(): Promise<Pitch[]>;
  getPitch(id: number): Promise<Pitch | undefined>;
  createPitch(pitch: InsertPitch): Promise<Pitch>;
  
  // Resource methods
  getResources(): Promise<Resource[]>;
  getResource(id: number): Promise<Resource | undefined>;
  createResource(resource: InsertResource): Promise<Resource>;
}

export class MemStorage implements IStorage {
  private pitches: Map<number, Pitch>;
  private resources: Map<number, Resource>;
  private pitchCurrentId: number;
  private resourceCurrentId: number;

  constructor() {
    this.pitches = new Map();
    this.resources = new Map();
    this.pitchCurrentId = 1;
    this.resourceCurrentId = 1;
    
    // Initialize with default resources
    this.createResource({
      title: "RESOURCE",
      description: "Business planning toolkit",
      link: "#business-planning",
    });
    
    this.createResource({
      title: "RESOURCE",
      description: "Funding opportunities",
      link: "#funding",
    });
    
    this.createResource({
      title: "RESOURCE",
      description: "Market research guides",
      link: "#market-research",
    });
    
    this.createResource({
      title: "RESOURCE",
      description: "Pitch deck templates",
      link: "#pitch-templates",
    });
  }

  // Pitch methods
  async getPitches(): Promise<Pitch[]> {
    return Array.from(this.pitches.values());
  }

  async getPitch(id: number): Promise<Pitch | undefined> {
    return this.pitches.get(id);
  }

  async createPitch(insertPitch: InsertPitch): Promise<Pitch> {
    const id = this.pitchCurrentId++;
    const pitch: Pitch = { ...insertPitch, id };
    this.pitches.set(id, pitch);
    return pitch;
  }

  // Resource methods
  async getResources(): Promise<Resource[]> {
    return Array.from(this.resources.values());
  }

  async getResource(id: number): Promise<Resource | undefined> {
    return this.resources.get(id);
  }

  async createResource(insertResource: InsertResource): Promise<Resource> {
    const id = this.resourceCurrentId++;
    const resource: Resource = { ...insertResource, id };
    this.resources.set(id, resource);
    return resource;
  }
}

export const storage = new MemStorage();
