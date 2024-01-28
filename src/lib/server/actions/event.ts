"use server";
import fs from "fs";
import eventData from "@/utility/data.json";

export async function editEvent(data: Object) {
  try {
  } catch (error) {}
}

export async function updateFile(data: any) {
  try {
    if (eventData === data) return console.log("No changes made");
    fs.writeFile(
      "src/utility/data.json",
      JSON.stringify(data),
      "utf8",
      (writeErr) => {
        if (writeErr) {
          console.error("Error writing file:", writeErr);
          return;
        }

        console.log("JSON file updated successfully.");
      }
    );
  } catch (error) {
    console.log(error);
  }
}
