"use client";
import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

// Register needed components (e.g., tooltip, legend)
Chart.register(...registerables);

const ChartComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    // Destroy the previous chart instance
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Active Users",
          data: [65, 59, 80, 81, 56, 55, 40, 70, 75, 90, 85, 80], // Data for all months
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    };

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Active Users Chart</h2>
      <canvas
        ref={canvasRef}
        id="activeUsersChart"
        style={{ maxWidth: "500px", maxHeight: "300px" }}
      />
    </div>
  );
};

export default ChartComponent;
