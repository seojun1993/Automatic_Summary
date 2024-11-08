import React from 'react';

const NoteList = () => {
  return (
    <div>
      <div>
        <button>최근</button>
        <button>이름순</button>
      </div>
      <ul>
        <li>
          <a href="/">
            <div>
              <h3>새로운 노트</h3>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NoteList;
