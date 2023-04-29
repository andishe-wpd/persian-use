const flowers = [
  [1705, 1579, 1575, 1601, 1578],
  [1570, 1588, 1594, 1575, 1604],
  [1605, 1575, 1670, 32, 1705, 1585, 1583, 1606, 1740],
  [1570, 1604, 1578, 32, 1578, 1606, 1575, 1587, 1604, 1740],
  [1570, 1604, 1578],
  [1575, 1576, 1604, 1607],
  [1575, 1576, 1606, 32, 1740, 1586, 1740, 1583],
  [1575, 1581, 1605, 1602],
  [1575, 1587, 1576],
  [1575, 1604, 1575, 1594],
  [1575, 1604, 1575, 1602],
  [1575, 1606, 1711, 1604],
  [1575, 1606, 1740],
  [1575, 1606, 1740],
  [1575, 1608, 1587, 1705, 1604],
  [1575, 1608, 1587, 1705, 1604],
  [1575, 1608, 1587, 1711, 1604],
  [1575, 1608, 1589, 1705, 1604],
  [1575, 1608, 1589, 1711, 1604],
  [1576, 32, 1705],
  [1576, 1582, 1608, 1585, 1588],
  [1576, 1583, 1576, 1582, 1578],
  [1576, 1605, 1575, 1604],
  [1578, 1582, 1605, 1605],
  [1576, 1662, 1585, 1585, 1608, 1588],
  [1576, 1662, 1585, 1587, 1585, 1588],
  [1576, 1705, 1575, 1585, 1578],
  [1576, 1705, 1606, 32, 1578, 1608, 1588],
  [1576, 1705, 1606, 1588],
  [1576, 1705, 1606, 1605, 1578],
  [1576, 1740, 32, 1593, 1601, 1578],
  [1576, 1740, 32, 1594, 1740, 1585, 1578],
  [1576, 1740, 32, 1606, 1575, 1605, 1608, 1587],
  [1576, 1740, 32, 1662, 1583, 1585],
  [1576, 1740, 1588, 1593, 1608, 1585],
  [1576, 1740, 1606, 1575, 1605, 1608, 1587],
  [1578, 1582, 1605, 32, 1587, 1711],
  [1578, 1582, 1605],
  [1578, 1585, 1705],
  [1578, 1608, 1604, 1607, 32, 1587, 1711],
  [1580, 1575, 1705, 1588],
  [1580, 1604, 1602, 32, 1586, 1583, 1606],
  [1580, 1606, 1587, 1740],
  [1580, 1608, 1608, 1606],
  [1580, 1705, 1587],
  [1580, 1740, 1606, 1583, 1575],
  [1581, 1585, 1608, 1605, 1586, 1575, 1583, 1607],
  [1581, 1588, 1585],
  [1582, 1575, 1585, 1705, 1587, 32, 1583, 1607],
  [1582, 1575, 1585, 1705, 1587, 1583, 1607],
  [1582, 1575, 1585, 1705, 1587, 1617, 1607],
  [1582, 1575, 1740, 1607, 32, 1582, 1608, 1585],
  [1582, 1575, 1740, 1607, 32, 1605, 1575, 1604],
  [1582, 1575, 1740, 1607],
  [1582, 1585, 1601, 1578],
  [1582, 1586],
  [1582, 1585],
  [1582, 1601, 1607, 32, 1582, 1608, 1606],
  [1582, 1601, 1607, 32, 1588, 1608],
  [1582, 1740, 32, 1705, 1575, 1587],
  [1583, 1575, 1601, 32, 1606, 1575, 1586],
  [1583, 1575, 1601],
  [1583, 1575, 1711, 32, 1575, 1587, 1578, 1575, 1740, 1604],
  [1583, 1582, 1578, 1585, 1602, 1585, 1578, 1740],
  [1583, 1585, 1575, 1586, 1711, 1608, 1588],
  [1583, 1604, 1607],
  [1583, 1607, 1606, 32, 1587, 1585, 1608, 1740, 1587],
  [1711, 1575, 1740, 1740, 1583, 1607],
  [1583, 1607, 1606, 1578, 32, 1587, 1585, 1608, 1740, 1587],
  [1583, 1608, 1580, 1606, 1587, 1607],
  [1583, 1608, 1604],
  [1583, 1740, 1608, 1579],
  [1583, 1740, 1608, 1587, 32, 1582, 1575, 1606],
  [1583, 1740, 1608, 1587],
  [1583, 1740, 1608, 1589],
  [1585, 1588, 1578, 1740],
  [1585, 1740, 1583],
  [1586, 1575, 1585, 1578],
  [1586, 1576, 1575, 1604, 1607],
  [1586, 1585, 1606, 1586, 1606],
  [1586, 1606, 32, 1580, 1606, 1583, 1607],
  [1586, 1606, 32, 1705, 1575, 1587, 1583, 1607],
  [1586, 1606, 1575, 32, 1586, 1575, 1583, 1607],
  [1586, 1606, 1575, 1586, 1575, 1583, 1607],
  [1586, 1606, 1578, 1608],
  [1586, 1606, 1588, 1608],
  [1586, 1606, 1740, 1705, 1607],
  [1587, 1575, 1583, 1740, 1587, 1605, 1740],
  [1587, 1575, 1705, 1608, 1606, 1740],
  [1587, 1585, 1582, 1608, 1585],
  [1587, 1585, 1705, 1740, 1585],
  [1587, 1587, 1705, 1740],
  [1587, 1608, 1585, 1575, 1582, 32, 1705, 1608, 1606],
  [1587, 1608, 1585, 1575, 1582, 32, 1705, 1608, 1606],
  [1587, 1608, 1604, 1575, 1582],
  [1587, 1705, 1587, 32, 1670, 1578],
  [1581, 1740, 1608, 1575, 1606],
  [1587, 1705, 1587, 1740, 32, 1576, 1575, 1588],
  [1587, 1711, 32, 1578, 1608, 32, 1585, 1608, 1581, 1578],
  [1587, 1711, 32, 1583, 1607, 1606],
  [1587, 1711, 32, 1589, 1601, 1578],
  [1587, 1711, 32, 1662, 1583, 1585],
  [1587, 1711, 1740],
  [1587, 1740, 1705, 1578, 1740, 1585],
  [1588, 1575, 1587, 1711, 1608, 1604],
  [1588, 1575, 1588],
  [1588, 1602, 32, 1705, 1585, 1583, 1606],
  [1588, 1604, 32, 1605, 1594, 1586],
  [1588, 1606, 1711, 1608, 1604],
  [1588, 1607, 1608, 1578, 1740],
  [1589, 1740, 1594, 1607, 32, 1575, 1740],
  [1589, 1740, 1705],
  [1593, 1585, 1576],
  [1593, 1585, 1602, 32, 1582, 1608, 1585],
  [1593, 1605, 1578, 1608],
  [1593, 1605, 1607, 32, 1606, 1606, 1607],
  [1593, 1606, 32, 1578, 1585],
  [1593, 1606],
  [1593, 1608, 1590, 1740],
  [1594, 1585, 1605, 1587, 1575, 1602],
  [1594, 1585, 1605, 1589, 1575, 1602],
  [1601, 1575, 1581, 1588, 1607],
  [1601, 1575, 1585, 1587],
  [1601, 1575, 1705, 32, 1601, 1740, 1587],
  [1601, 1740, 1604, 1605, 32, 1587, 1608, 1662, 1585],
  [1602, 1585, 1578, 1740],
  [1602, 1585, 1605, 1587, 1575, 1602],
  [1602, 1585, 1605, 1589, 1575, 1602],
  [1602, 1587],
  [1604, 1575, 32, 1662, 1575],
  [1604, 1575, 1587],
  [1604, 1575, 1588, 32, 1711, 1608, 1588, 1578],
  [1604, 1575, 1588, 1740],
  [1604, 1575, 1705, 1608, 1606, 1740],
  [1604, 1580, 1606],
  [1604, 1582, 1578, 1740],
  [1604, 1582, 1578],
  [1604, 1585],
  [1604, 1586],
  [1605, 1575, 1583, 1585, 32, 1580, 1606, 1583, 1607],
  [1605, 1575, 1583, 1585, 1580, 1606, 1583, 1607],
  [1605, 1575, 1583, 1585, 1587, 1711],
  [1605, 1575, 1583, 1585, 1602, 1607, 1608, 1607],
  [1605, 1575, 1583, 1585, 1705, 1608, 1606, 1740],
  [1605, 1575, 1604, 1608, 1606, 1583, 1606],
  [1605, 1585, 1578, 1740, 1705, 1607],
  [1605, 1585, 1583, 1740, 1705, 1607],
  [1605, 1585, 1590, 32, 1583, 1575, 1585, 1740],
  [1605, 1585, 1590, 1583, 1575, 1585, 1740],
  [1605, 1588, 1585, 1608, 1576],
  [1605, 1604, 1606, 1711],
  [1605, 1605, 1607, 32, 1582, 1608, 1585],
  [1605, 1605, 1607],
  [1605, 1606, 1711, 1604],
  [1605, 1740, 1582, 1608, 1585, 1740, 1588],
  [1606, 1585, 1705, 1583, 1607],
  [1606, 1593, 1588, 1607],
  [1606, 1705, 1576, 1578],
  [1606, 1711, 1575, 1740, 1740, 1583, 1605],
  [1607, 1740, 1586],
  [1608, 1604, 1583, 1586, 1606, 1575],
  [1662, 1583, 1585, 32, 1587, 1608, 1582, 1578, 1607],
  [1662, 1583, 1585, 32, 1587, 1711],
  [1662, 1583, 1585, 32, 1589, 1604, 1608, 1575, 1578, 1740],
  [1662, 1583, 1585, 1587, 1711],
  [1662, 1585, 1740, 1608, 1583],
  [1662, 1587, 1578, 1575, 1606],
  [1662, 1587, 1608, 1606],
  [1662, 1588, 1605, 1575, 1605],
  [1662, 1601, 1740, 1608, 1586],
  [1662, 1604, 1588, 1578],
  [1662, 1608, 1585, 1606],
  [1662, 1662, 1607],
  [1670, 1575, 1594, 1575, 1604],
  [1670, 1575, 1602, 1575, 1604],
  [1670, 1587, 32, 1582, 1608, 1585],
  [1670, 1587],
  [1705, 1575, 1587, 1705, 1588],
  [1705, 1579, 32, 1604, 1740, 1587],
  [1705, 1579, 1575, 1601, 1591],
  [1705, 1585, 1605],
  [1705, 1604, 1601, 1578],
  [1705, 1608, 1587],
  [1705, 1608, 1589],
  [1705, 1608, 1606],
  [1705, 1740, 1585],
  [1711, 1575, 1608],
  [1711, 1575, 1711, 1608, 1604],
  [1711, 1575, 1740, 1583, 1606],
  [1711, 1575, 1740, 1583, 1740],
  [1711, 1575, 1740, 1740, 1583, 1606],
  [1711, 1585, 1583, 1606, 32, 1583, 1585, 1575, 1586],
  [1711, 1588, 1575, 1583],
  [1711, 1608, 1586, 1608],
  [1711, 1608, 1587, 1601, 1606, 1583],
  [1711, 1608, 1588, 32, 1583, 1585, 1575, 1586],
  [1711, 1608, 1607],
  [1711, 1608, 1607],
  [1711, 1740, 32, 1586, 1606],
  [1711, 1740, 1582, 1608, 1575, 1585],
  [1740, 1576, 1606, 32, 1586, 1606, 1575],
  [1605, 1575, 1583, 1585, 1578, 1608],
  [1606, 1575, 1605, 1608, 1587, 1578, 1608],
  [1670, 1606, 1583, 1607],
  [1576, 1575, 1587, 1606, 1740],
  [1587, 1740, 1705, 1740, 1605],
  [1587, 1711, 32, 1606, 1575, 1605, 1608, 1587],
  [1606, 1608, 1576],
  [1582, 1575, 1740, 1605, 1575, 1604],
  [1605, 1575, 1583, 1585, 32, 1576, 1607, 32, 1582, 1591, 1575],
  [1705, 1589, 1604, 1740, 1587],
  [1576, 1705, 1606, 1578],
  [1705, 1589, 1583, 1607],
  [1711, 1608, 1585, 1608, 1605, 1587, 1575, 1582],
  [1662, 1608, 1601, 1740, 1608, 1586],
  [1662, 1583, 1585, 1578, 1608],
  [1602, 1608, 1585, 1608, 1605, 1587, 1575, 1602],
  [1587, 1740, 1607, 1583, 1740, 1585],
  [1575, 1608, 1576, 1740],
  [1605, 1575, 1583, 1585, 32, 1587, 1711],
  [1582, 1575, 1740, 1607],
  [1580, 1606, 1583, 1607],
  [1586, 1606, 1575],
  [1587, 1575, 1705],
  [1705, 1608, 1606],
  [1705, 1740, 1585],
  [1587, 1705, 1587],
  [1575, 1587, 1705, 1604],
  [1575, 1587, 1705, 1604],
  [1575, 1587, 1711, 1604],
  [1705, 1585, 1583, 1606, 1740],
  [1575, 1587, 1711, 1608, 1604],
  [1705, 1579],
  [1705, 1585, 1583, 1606],
  [1711, 1608, 1586],
  [1705, 1589],
  [1576, 1575, 1587, 1606],
  [1705, 1587],
];

export const trees: any = [];

function charCodesToString(charCodes) {
  let str = "";
  for (let i = 0; i < charCodes.length; i++) {
    const char = String.fromCharCode(charCodes[i]);
    str += char;
  }
  return str;
}

flowers.map((item) => {
  return trees.push(charCodesToString(item));
});

// function stringToCharCodes(str) {
//     const charCodes = [];
//     for (let i = 0; i < str.length; i++) {
//       const code = str.charCodeAt(i);
//       charCodes.push(code);
//     }
//     return charCodes;
//   }
