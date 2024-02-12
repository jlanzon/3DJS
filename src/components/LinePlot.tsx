import * as React from 'react';
import * as d3 from 'd3';

// Define a type for the props
interface LinePlotProps {
  data: number[]; // Assuming data is an array of numbers
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

const LinePlot: React.FC<LinePlotProps> = ({
  data,
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 20,
  marginLeft = 20,
}) => {
  // Define scales and line generator
  const x = d3.scaleLinear()
              .domain([0, data.length - 1])
              .range([marginLeft, width - marginRight]);
  const y = d3.scaleLinear()
              .domain(d3.extent(data) as [number, number]) // Type assertion for d3.extent result
              .range([height - marginBottom, marginTop]);
  const line = d3.line<number>()
                 .x((d, i) => x(i)!)
                 .y(d => y(d)!); // Use non-null assertion since scaleLinear should not return undefined for valid input

  // Render the line plot
  return (
    <svg width={width} height={height}>
      <path fill="none" stroke="currentColor" strokeWidth="1.5" d={line(data) || undefined} />
      <g fill="white" stroke="currentColor" strokeWidth="1.5">
        {data.map((d, i) => (
          <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
        ))}
      </g>
    </svg>
  );
};

export default LinePlot;
