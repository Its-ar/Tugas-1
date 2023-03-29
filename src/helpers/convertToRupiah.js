const convertToRupiah = (number) => {
  let rupiah = "";
  const numberReverse = number.toString().split("").reverse().join("");
  for (let i = 0; i < numberReverse.length; i++) {
    if (i % 3 === 0) {
      rupiah += numberReverse.substr(i, 3) + ".";
    }
  }
  return (
    "Rp. " +
    rupiah
      .split("", rupiah.length - 1)
      .reverse()
      .join("")
  );
};

export default convertToRupiah;
