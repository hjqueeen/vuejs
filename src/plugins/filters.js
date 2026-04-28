export default function registerFilters(Vue, i18n) {
  Vue.filter("formatDate", (value) => {
    if (!value) return "-";
    const date = new Date(value);
    return new Intl.DateTimeFormat(i18n.locale, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  });

  Vue.filter("statusLabel", (value) => {
    return i18n.t(`common.status.${value}`) || value;
  });
}
