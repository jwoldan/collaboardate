import React from 'react';

const visibilities = [
  {
    value: 'Private',
    description: 'The board is private. Only people added to the board can view and edit it.',
  },
  {
    value: 'Public',
    description:
      'The board is public. It’s visible to anyone with the link and will show up in search engines like Google. Only people added to the board can edit it.',
  },
];

const BoardVisibilityOptions = ({ className, updateVisibility }) => (
  <ul className={className}>
    {visibilities.map((visibility) => (
      <li key={visibility.value}>
        <a data-value={visibility.value} onClick={updateVisibility}>
          <h4>{visibility.value}</h4>
          <span className="quiet small">{visibility.description}</span>
        </a>
      </li>
    ))}
  </ul>
);

export default BoardVisibilityOptions;
