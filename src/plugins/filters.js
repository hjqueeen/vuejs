export default function registerFilters(Vue) {
  Vue.filter("formatDate", (value) => {
    if (!value) return "-";
    const date = new Date(value);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
      date.getDate()
    ).padStart(2, "0")}`;
  });

  Vue.filter("statusLabel", (value) => {
    const map = {
      todo: "할 일",
      doing: "진행 중",
      done: "완료",
    };
    return map[value] || value;
  });
}
