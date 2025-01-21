export default function LvqIcon({ size, className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="2 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`p-treenode-icon ${className}`}>
      <g transform="rotate(90, 12, 12)">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
        <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
      </g>
    </svg>
  );
}