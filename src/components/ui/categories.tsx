"use client"

import React, { useEffect, useState } from 'react';
import styles from "@/styles/components/ui/categories.module.scss"

interface Item {
  id: number;
  content: string;
}

interface TriangleProps {
  data: Item[];
}

const Triangle: React.FC<TriangleProps> = ({ data }) => {
  const [rows, setRows] = useState<Item[][]>([]);

  useEffect(() => {
    const numCols = Math.min(Math.ceil(Math.sqrt(data.length)), data.length);

    let numRows;
    let rowLengths: number[] = [];
    let remainingItems = data.length;

    for (let i = 0; i < numCols; i++) {
      const itemsInRow = Math.min(remainingItems, numCols - i);
      rowLengths.push(itemsInRow);
      remainingItems -= itemsInRow;
    }

    numRows = rowLengths.length;

    const rows: Item[][] = [];
    let rowStart = 0;
    for (let i = 0; i < numRows; i++) {
      const rowLength = rowLengths[i];
      const row: Item[] = data.slice(rowStart, rowStart + rowLength);
      rowStart += rowLength;
      rows.push(row);
    }

    setRows(rows);
  }, [data]);

  
  return (
    <div className={styles.triangle}>
      {rows.map((row, i) => (
        <div key={i} className={styles.row}>
          {row.map((item) => (
            <div key={item.id} className={styles.item}>
              {item.content}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Triangle;
