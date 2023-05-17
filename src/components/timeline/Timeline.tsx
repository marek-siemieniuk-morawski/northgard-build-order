import { useMemo, useState } from "react";
import "./Timeline.css";
import Tile from "../tile/Tile";

const NUMBER_OF_MONTHS = 12;

type Years = {
  year: number;
  months: {
    month: number;
    intervals: {
      year: number;
      month: number;
      second: number;
    }[];
  }[];
}[];

interface TimelineOptions {
  startYear: number;
  endYear: number;
  monthLength: number;
  interval: number;
}

interface TimelineEvent {
  year: number;
  month: number;
  second: number;
}

interface Properties {
  options: TimelineOptions;
}

/**
 * The `useMemo` factor that builds an array to render the timeline with hierarchical
 * structure of years, months, and intervals.
 */
export const yearsFactory = (options: TimelineOptions): Years => {
  const { startYear, endYear, monthLength, interval } = options;

  const createIntervals = (year: number, month: number) => {
    const intervals = [];

    for (let index = 1; index <= monthLength / interval; index++) {
      intervals.push({
        year,
        month,
        second: index * interval,
      });
    }

    return intervals;
  };

  const createMonths = (year: number) => {
    const months = [];

    for (let month = 1; month <= NUMBER_OF_MONTHS; month++) {
      months.push({ month, intervals: createIntervals(year, month) });
    }

    return months;
  };

  const years = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push({ year, months: createMonths(year) });
  }

  return years;
};

function Timeline(props: Properties) {
  const { options } = props;

  const [events, setEvents] = useState([
    {
      year: 800,
      month: 2,
      second: 10,
    },
  ]);

  const years = useMemo(() => yearsFactory(options), [options]);

  const onSnappingGridIntervalClickHandler = (time: {
    year: number;
    month: number;
    second: number;
  }) => {
    setEvents([...events, { ...time }]);
  };

  const renderSnappingGridInterval = (
    time: { year: number; month: number; second: number },
    events: TimelineEvent[]
  ) => {
    const isEventHere = events.some(
      (event) =>
        event.year === time.year &&
        event.month === time.month &&
        event.second === time.second
    );

    return (
      <div
        key={time.second}
        className="Timeline-month-timeline-snapping-grid-interval"
        onClick={() => onSnappingGridIntervalClickHandler(time)}
      >
        {isEventHere ? <Tile /> : null}
      </div>
    );
  };

  return (
    <div className="Timeline">
      {years.map(({ year, months }) => (
        <div key={year} className="Timeline-year">
          {months.map(({ month, intervals }) => (
            <div key={month} className="Timeline-month">
              <div className="Timeline-month-weather">{`Month: ${month}`}</div>
              <div className="Timeline-month-timeline">
                <div className="Timeline-month-timeline-snapping-grid">
                  {intervals.map(({ second }) =>
                    renderSnappingGridInterval({ year, month, second }, events)
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Timeline;
