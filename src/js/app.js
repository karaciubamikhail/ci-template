export default function getSortHealth(health) {
    return (a, b) => (a[health] < b[health] ? 1 : -1);
  }