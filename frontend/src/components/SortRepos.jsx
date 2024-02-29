// const SortRepos = ({ onSort, sortType }) => {
//   return (
//     <div className="mb-2 flex justify-center lg:justify-end">
//       <button onClick={() => onSort("recent")} type="button" className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${sortType === "recent" ? "border-blue-500" : ""}`}>
//         Most Recent
//       </button>
//       <button onClick={() => onSort("stars")} type="button" className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${sortType === "stars" ? "border-blue-500" : ""}`}>
//         Most Stars
//       </button>
//       <button onClick={() => onSort("forks")} type="button" className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${sortType === "forks" ? "border-blue-500" : ""}`}>
//         Most Forks
//       </button>
//     </div>
//   );
// };

const SortRepos = ({ onSort, sortType }) => {
  const BUTTONS = [
    { type: "recent", text: "Most Recent" },
    { type: "stars", text: "Most Stars" },
    { type: "forks", text: "Most Forks" },
  ];

  return (
    <div className="mb-2 flex justify-center lg:justify-end">
      {BUTTONS.map((button) => (
        <button key={button.type} type="button" className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${button.type == sortType ? "border-blue-500" : ""}`} onClick={() => onSort(button.type)}>
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default SortRepos;
