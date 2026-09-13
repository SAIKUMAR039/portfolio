"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { PortfolioData } from "@/types/portfolio";
import { defaultPortfolioData } from "@/lib/default-data";
import { supabase } from "@/lib/supabase";

interface PortfolioContextProps {
  portfolioData: PortfolioData;
  loading: boolean;
  saveData: (newData: PortfolioData) => Promise<{ success: boolean; error?: string }>;
  resetData: () => Promise<void>;
  isDbConfigured: boolean;
}

const PortfolioContext = createContext<PortfolioContextProps | undefined>(undefined);

// Helper to safely merge loaded data with defaults
const mergeWithDefaults = (loaded: any): PortfolioData => {
  if (!loaded || typeof loaded !== "object") return defaultPortfolioData;

  return {
    ...defaultPortfolioData,
    ...loaded,
    profile: {
      ...defaultPortfolioData.profile,
      ...(loaded.profile || {}),
    },
    socials: {
      ...defaultPortfolioData.socials,
      ...(loaded.socials || {}),
    },
    skills: (Array.isArray(loaded.skills) && loaded.skills.length > 0)
      ? loaded.skills
      : defaultPortfolioData.skills,
    experience: (Array.isArray(loaded.experience) && loaded.experience.length > 0)
      ? loaded.experience
      : defaultPortfolioData.experience,
    projects: (Array.isArray(loaded.projects) && loaded.projects.length > 0)
      ? loaded.projects
      : defaultPortfolioData.projects,
    achievements: (Array.isArray(loaded.achievements) && loaded.achievements.length > 0)
      ? loaded.achievements
      : defaultPortfolioData.achievements,
  };
};

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(defaultPortfolioData);
  const [loading, setLoading] = useState(true);
  const [isDbConfigured, setIsDbConfigured] = useState(false);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true);
        
        // 1. Try to fetch from Supabase
        const { data, error } = await supabase
          .from("portfolio_config")
          .select("data")
          .eq("id", 1)
          .maybeSingle();

        if (error) {
          console.warn("Supabase fetch notice:", error.message);
          setIsDbConfigured(false);
          loadFromLocalStorage();
        } else if (data && data.data && Object.keys(data.data).length > 0) {
          // Success from DB! Merge with defaults
          const merged = mergeWithDefaults(data.data);
          setPortfolioData(merged);
          setIsDbConfigured(true);
        } else {
          // Connected to DB but row is empty
          setIsDbConfigured(true);
          loadFromLocalStorage();
        }
      } catch (err) {
        console.error("Error connecting to Supabase database:", err);
        setIsDbConfigured(false);
        loadFromLocalStorage();
      } finally {
        setLoading(false);
      }
    };

    const loadFromLocalStorage = () => {
      try {
        const local = localStorage.getItem("portfolio_data");
        if (local) {
          const parsed = JSON.parse(local);
          if (parsed && Object.keys(parsed).length > 0) {
            setPortfolioData(mergeWithDefaults(parsed));
          }
        }
      } catch (err) {
        console.error("Failed to load portfolio_data from localStorage:", err);
      }
    };

    fetchPortfolioData();
  }, []);

  const saveData = async (newData: PortfolioData): Promise<{ success: boolean; error?: string }> => {
    try {
      const merged = mergeWithDefaults(newData);
      setPortfolioData(merged);

      // Save to localStorage
      localStorage.setItem("portfolio_data", JSON.stringify(merged));

      // Save to Supabase
      const { error } = await supabase
        .from("portfolio_config")
        .upsert({
          id: 1,
          data: merged,
          updated_at: new Date().toISOString()
        });

      if (error) {
        console.error("Failed to save to Supabase database:", error.message);
        return { 
          success: false, 
          error: `Saved locally, but database sync failed: ${error.message}` 
        };
      }

      setIsDbConfigured(true);
      return { success: true };
    } catch (err: any) {
      console.error("Save error:", err);
      return { 
        success: false, 
        error: `Saved locally, but system error syncing: ${err.message || err}` 
      };
    }
  };

  const resetData = async () => {
    try {
      setPortfolioData(defaultPortfolioData);
      localStorage.removeItem("portfolio_data");

      await supabase
        .from("portfolio_config")
        .upsert({
          id: 1,
          data: defaultPortfolioData,
          updated_at: new Date().toISOString()
        });
    } catch (err) {
      console.error("Failed to reset database portfolio data:", err);
    }
  };

  return (
    <PortfolioContext.Provider value={{ portfolioData, loading, saveData, resetData, isDbConfigured }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};
