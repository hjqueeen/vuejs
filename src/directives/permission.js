export default function permissionDirective(store) {
  const check = (el, binding) => {
    const requiredRole = binding.value;
    if (!requiredRole) return;

    const hasRole = store.getters["auth/hasRole"](requiredRole);
    if (!hasRole && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  };

  return {
    inserted(el, binding) {
      check(el, binding);
    },
    update(el, binding) {
      check(el, binding);
    },
  };
}
