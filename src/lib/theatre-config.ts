export const THEATRE_CONFIG = {
  rows: 15, // Total number of rows (A to O)
  cols: 20, // Total number of columns per row
  
  // Vertical aisle: Gap after column 10
  verticalAisleAfterColumn: 10,
  
  // Horizontal aisle: Gap before row 'M' (index 12)
  horizontalAisleBeforeRowIndex: 12, 

  // List of seat IDs that are permanently damaged/unavailable
  // Format: "RowLabel + ColumnNumber" e.g., "A1", "B5"
  damagedSeats: [
    "A1", "A2", // Example damaged seats
    "C15", "C16"
  ],

  // Helper to generate row labels (A, B, C...)
  getRowLabel: (index: number) => String.fromCharCode(65 + index),
};

export type SeatStatus = 'available' | 'selected' | 'booked' | 'damaged';

export interface Seat {
  id: string;
  row: string;
  col: number;
  status: SeatStatus;
}
