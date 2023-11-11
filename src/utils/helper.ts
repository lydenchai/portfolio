import moment from "moment";

export const Helper = {
  // Date format
  dateFormat: (date: string) => {
    return moment(String(date)).format("DD MMM YYYY");
  },

  // Date time format
  dateTimeFormat(date: string) {
    return moment(String(date)).format("DD-MMM-YYYY h:mm");
  },

  // Pice format
  formatPrice(value: number) {
    let val = (value / 1).toFixed(2).replace(",", ".");
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  },
};
