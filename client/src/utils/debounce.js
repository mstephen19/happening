// https://www.pluralsight.com/guides/re-render-react-component-on-window-resize

export default function debounce(func, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(this, arguments);
    }, ms);
  };
}
