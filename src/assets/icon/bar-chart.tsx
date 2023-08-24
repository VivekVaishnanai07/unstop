const BarChart = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill={props.color}
    {...props}
  >
    <path fill={props.color} d="M0 16V5h4v11H0Zm6 0V0h4v16H6Zm6 0V9h4v7h-4Z" />
  </svg>
)
export default BarChart;
