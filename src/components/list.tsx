import React, { FC } from 'react';

import './list.less';

export interface ListType {
  data: StringObject;
  latestVersionData: StringObject;
}

const List: FC<ListType> = ({ data, latestVersionData }) => {
  return (
    <div className="npm-manage-list">
      <ul>
        {Object.keys(data).map((key, idx) => (
          <li key={idx}>
            <span className="name">{key}</span>
            <div>
              <div className="version">
                <span>{data[key]}</span>
                {latestVersionData[key] ? (
                  <span>
                    <svg className="icon ziyuan-icon" aria-hidden="true">
                      <use xlinkHref="#icon-ziyuan"></use>
                    </svg>
                    <span className="latest-version">{latestVersionData[key]}</span>
                  </span>
                ) : null}
              </div>
              <div className="operation">
                <div className="version-select">
                  <select>
                    <option>2.32</option>
                    <option>2.33</option>
                    <option>2.34</option>
                  </select>
                  <div className="select-arrow"></div>
                </div>

                <svg className="icon delete-icon" aria-hidden="true">
                  <use xlinkHref="#icon-delete"></use>
                </svg>
                <svg className="icon download-icon" aria-hidden="true">
                  <use xlinkHref="#icon-download"></use>
                </svg>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
