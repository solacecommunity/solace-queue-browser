export default function QueueIcon({ size, className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="2 2 22 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`p-treenode-icon ${className}`}>
    <g transform="rotate(90, 12, 12)">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M 12 6 m -8 0 a 8 3 0 1 0 16 0 a 8 3 0 1 0 -16 0" />
      <path d="M 4 6 v 6 a 8 3 0 0 0 16 0 v -6" />
      <path d="M 4 12 v 6 a 8 3 0 0 0 16 0 v -6" />
    </g>
  </svg>
  );
}