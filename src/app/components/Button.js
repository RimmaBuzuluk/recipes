export default function ({ type, text, disable }) {
  return (
    <button
      type={type}
      className={`w-full ${
        !disable ? 'bg-orange-500 hover:bg-orange-600' : 'bg-orange-200 cursor-not-allowed'
      } text-white font-semibold py-2 px-4 rounded-md transition-colors`}
      disabled={disable}
    >
      {text}
    </button>
  );
}
