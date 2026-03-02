"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { deletePrediction } from "@/app/dashboard/actions";
import { toast } from "sonner";

export function DeletePredictionButton({ predictionId }: { predictionId: string }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this prediction?")) {
      return;
    }

    setLoading(true);
    try {
      await deletePrediction(predictionId);
      toast.success("Prediction deleted successfully");
    } catch (error) {
      toast.error("Failed to delete prediction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleDelete}
      disabled={loading}
    >
      <Trash2 className="h-4 w-4 text-red-600" />
    </Button>
  );
}
