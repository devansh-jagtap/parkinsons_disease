"use server";

import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function savePrediction(inputData: any, probability: number) {
  const user = await currentUser();
  
  if (!user) {
    throw new Error("Unauthorized");
  }

  const prediction = await prisma.parkinsonPrediction.create({
    data: {
      userId: user.id,
      inputData,
      probability,
    },
  });

  revalidatePath("/dashboard");
  
  return prediction;
}

export async function getUserPredictions() {
  const user = await currentUser();
  
  if (!user) {
    throw new Error("Unauthorized");
  }

  const predictions = await prisma.parkinsonPrediction.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return predictions;
}

export async function deletePrediction(id: string) {
  const user = await currentUser();
  
  if (!user) {
    throw new Error("Unauthorized");
  }

  // Verify ownership
  const prediction = await prisma.parkinsonPrediction.findUnique({
    where: { id },
  });

  if (prediction?.userId !== user.id) {
    throw new Error("Unauthorized");
  }

  await prisma.parkinsonPrediction.delete({
    where: { id },
  });

  revalidatePath("/dashboard");
  
  return { success: true };
}
