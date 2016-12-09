import React from 'react';

export default ({ visibilityClass, updateVisibility }) => (
  <ul className={ visibilityClass }>

    <li>
      <a data-value="Private" onClick={ updateVisibility }>
        <h4>Private</h4>
        <span className="quiet small">
          The board is private.
          Only people added to the board can view and edit it.
        </span>
      </a>
    </li>

    <li>
      <a data-value="Public" onClick={ updateVisibility }>
        <h4>Public</h4>
        <span className="quiet small">
          The board is public. It&#8217;s visible to anyone with the
          link and will show up in search engines like Google.
          Only people added to the board can edit it.
        </span>
      </a>
    </li>

  </ul>
);
