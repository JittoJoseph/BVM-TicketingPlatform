"use client";

import { THEATRE_CONFIG } from "@/lib/theatre-config";
import { cn } from "@/lib/utils";

interface SeatMapProps {
  bookedSeats: string[]; // Array of seat IDs e.g. ["A1", "B2"]
  selectedSeats: string[];
  onSeatToggle: (seatId: string) => void;
}

export function SeatMap({
  bookedSeats,
  selectedSeats,
  onSeatToggle,
}: SeatMapProps) {
  const {
    rows,
    cols,
    verticalAisleAfterColumn,
    horizontalAisleBeforeRowIndex,
    damagedSeats,
    getRowLabel,
  } = THEATRE_CONFIG;

  const renderSeat = (rowIndex: number, colIndex: number) => {
    const rowLabel = getRowLabel(rowIndex);
    const colNumber = colIndex + 1;
    const seatId = `${rowLabel}${colNumber}`;

    const isDamaged = damagedSeats.includes(seatId);
    const isBooked = bookedSeats.includes(seatId);
    const isSelected = selectedSeats.includes(seatId);

    return (
      <button
        key={seatId}
        disabled={isBooked || isDamaged}
        onClick={() => onSeatToggle(seatId)}
        className={cn(
          "w-6 h-6 sm:w-8 sm:h-8 m-0.5 sm:m-1 rounded text-[8px] sm:text-[10px] font-medium transition-all duration-200 flex items-center justify-center border",
          isDamaged
            ? "bg-gray-600 border-gray-500 text-gray-400 cursor-not-allowed opacity-60"
            : isBooked
            ? "bg-red-600 border-red-500 text-white cursor-not-allowed"
            : isSelected
            ? "bg-green-500 border-green-400 text-white shadow-[0_0_10px_rgba(34,197,94,0.5)] transform scale-110"
            : "bg-white/10 border-white/30 text-gray-300 hover:bg-white/20 hover:border-white/50 cursor-pointer"
        )}
        title={`${rowLabel}${colNumber}${
          isDamaged ? " (Unavailable)" : isBooked ? " (Booked)" : ""
        }`}
      >
        {rowLabel}
        {colNumber}
      </button>
    );
  };

  const renderRow = (rowIndex: number) => {
    const seats = [];
    for (let c = 0; c < cols; c++) {
      // Add vertical aisle gap
      if (c === verticalAisleAfterColumn) {
        seats.push(<div key={`aisle-${rowIndex}`} className="w-6 sm:w-8" />);
      }
      seats.push(renderSeat(rowIndex, c));
    }
    return (
      <div key={`row-${rowIndex}`} className="flex justify-center items-center">
        <div className="w-4 sm:w-6 text-gray-400 text-[10px] sm:text-xs font-bold mr-2 sm:mr-4">
          {getRowLabel(rowIndex)}
        </div>
        {seats}
      </div>
    );
  };

  const grid = [];
  for (let r = 0; r < rows; r++) {
    // Add horizontal aisle gap
    if (r === horizontalAisleBeforeRowIndex) {
      grid.push(<div key="h-aisle" className="h-8" />);
    }
    grid.push(renderRow(r));
  }

  return (
    <div className="w-full overflow-x-auto pb-8 pt-6 no-scrollbar">
      <div className="min-w-[600px] sm:min-w-[800px] flex flex-col items-center">
        {/* Screen Visual */}
        <div className="w-4/5 sm:w-3/4 h-12 sm:h-16 mb-8 sm:mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-t-[50%] transform perspective-[500px] rotateX-[-10deg] shadow-[0_-10px_40px_rgba(255,255,255,0.15)]" />
          <div className="text-center text-gray-400 text-xs sm:text-sm mt-2 sm:mt-4 font-medium">
            SCREEN
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 text-xs sm:text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-white/10 border border-white/30" />
            <span>Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-green-500 border border-green-400" />
            <span>Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-red-600 border border-red-500" />
            <span>Booked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-gray-600 border border-gray-500 opacity-60" />
            <span>Unavailable</span>
          </div>
        </div>

        {/* The Grid */}
        <div className="space-y-1">{grid}</div>
      </div>
    </div>
  );
}
