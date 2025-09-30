"use client";

import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";

function formatDate(date) {
  if (!date) {
    return "";
  }
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

function isValidDate(date) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

export function DateRangePicker({
  startDate = null,
  endDate = null,
  onChange,
  placeholder = "Select period",
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState({
    startDate,
    endDate,
  });
  const [month, setMonth] = useState(startDate || new Date());
  const [inputValue, setInputValue] = useState(placeholder);

  // Sync props changes with internal state
  useEffect(() => {
    setRange({ startDate, endDate });
    setMonth(startDate || new Date());
    if (startDate && isValidDate(startDate)) {
      setInputValue(
        `${formatDate(startDate)}${
          endDate && isValidDate(endDate) ? ` - ${formatDate(endDate)}` : ""
        }`
      );
    } else {
      setInputValue(placeholder);
    }
  }, [startDate, endDate, placeholder]);

  // Handle date selection
  const handleSelect = (selectedDate) => {
    if (!selectedDate) return;

    let newRange = { ...range };

    if (!range.startDate || (range.startDate && range.endDate)) {
      // Start a new range
      newRange = { startDate: selectedDate, endDate: null };
    } else if (range.startDate && !range.endDate) {
      // Complete the range
      if (selectedDate >= range.startDate) {
        newRange.endDate = selectedDate;
      } else {
        newRange.startDate = selectedDate;
      }
    }

    setRange(newRange);
    setInputValue(
      `${formatDate(newRange.startDate)}${
        newRange.endDate ? ` - ${formatDate(newRange.endDate)}` : ""
      }`
    );
    setMonth(selectedDate);
    onChange?.(newRange);
    if (newRange.endDate) setOpen(false);
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className="relative flex gap-2">
        <Input
          id="date-range"
          value={inputValue}
          readOnly
          className="bg-custom-secondary pr-12 cursor-pointer !py-5 pl-4 text-gray-900"
          onClick={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown" || e.key === "Enter") {
              e.preventDefault();
              setOpen(true);
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date-range-picker"
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-4" />
              <span className="sr-only">Select date range</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="single"
              selected={range.startDate}
              month={month}
              onMonthChange={setMonth}
              onSelect={handleSelect}
              captionLayout="dropdown"
              highlightToday
              modifiers={{
                range: (date) =>
                  range.startDate &&
                  range.endDate &&
                  date >= range.startDate &&
                  date <= range.endDate,
              }}
              modifiersClassNames={{
                range: "bg-accent/50",
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
