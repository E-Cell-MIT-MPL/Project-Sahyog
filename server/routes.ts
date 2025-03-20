import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPitchSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  const router = express.Router();

  // Get all resources
  router.get("/resources", async (req, res) => {
    try {
      const resources = await storage.getResources();
      res.json(resources);
    } catch (error) {
      console.error("Error fetching resources:", error);
      res.status(500).json({ message: "Failed to fetch resources" });
    }
  });

  // Submit a pitch
  router.post("/pitches", async (req, res) => {
    try {
      const result = insertPitchSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details 
        });
      }
      
      const pitch = await storage.createPitch(result.data);
      
      // In a real application, we would send a confirmation email here
      res.status(201).json({
        message: "Pitch submitted successfully! Check your email for confirmation.",
        pitch
      });
    } catch (error) {
      console.error("Error submitting pitch:", error);
      res.status(500).json({ message: "Failed to submit pitch" });
    }
  });

  // Get all pitches (for admin purposes)
  router.get("/pitches", async (req, res) => {
    try {
      const pitches = await storage.getPitches();
      res.json(pitches);
    } catch (error) {
      console.error("Error fetching pitches:", error);
      res.status(500).json({ message: "Failed to fetch pitches" });
    }
  });

  // Register API routes
  app.use("/api", router);

  const httpServer = createServer(app);
  return httpServer;
}
